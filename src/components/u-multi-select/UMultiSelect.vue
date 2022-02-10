<template>
  <div class="relative max-w-full">
    <label :id="labelId">{{ label }}</label>
    <div
      ref="combobox"
      :aria-labelledby="labelId + ' ' + selectedValuesId"
      :aria-expanded="open"
      :aria-controles="open ? listboxId : undefined"
      aria-haspopup="true"
      aria-autocomplete="none"
      class="input-focus u-ms__input"
      tabindex="0"
      role="combobox"
      :disabled="disabled"
      @click="onToggle"
      @keydown.enter="onToggle"
      @keydown.space.prevent="onToggle"
    >
      <div class="truncate" :id="selectedValuesId">
        <span aria-hidden="true" v-if="truncate">{{ displayTruncated }}</span>
        <span :class="{'sr-only': truncate}">{{ displayAll }}</span>
      </div>
    </div>
    <transition name="rise">
    <ul
      v-if="open"
      ref="listbox"
      :id="listboxId"
      class="u-ms__list"
      :class="{ 'u-ms__list--bottom': dropdownPosition === 'bottom' }"
      role="listbox"
      :aria-multiselectable="multiselect"
      :aria-labelledby="labelId"
      :aria-activedescendant="getOptionId(options[activeDescendantIndex])"
      tabindex="-1"
      @keydown.space.prevent="onSelect"
      @keydown.enter.prevent="onSelect"
      @keydown.prevent.up="onDirection($event, 'up')"
      @keydown.prevent.down="onDirection($event, 'down')"
      @keydown.esc="onEscape"
      @keydown.prevent.home="onHome"
      @keydown.prevent.end="onEnd"
      @blur="onBlur"
    >
      <li
        v-for="(option, index) in options"
        :ref="setOptionRef"
        class="u-ms__option"
        :class="{ 'u-ms__option--checked': isSelected(option), 'u-ms__option--active': index === activeDescendantIndex }"
        :key="getOptionId(option)"
        :id="getOptionId(option)"
        :aria-selected="isSelected(option) ? 'true' : 'false'"
        role="option"
        @click="input(option)"
      >
        <slot :option="option">
          <div class="flex text-base px-2 py-2 items-center truncate">
            <span aria-hidden="true" class="fake-checkbox"></span>
            <span>{{ option.label }}</span>
          </div>
        </slot>
      </li>
    </ul>
    </transition>
  </div>
</template>

<style scoped lang="pcss">
.u-ms__input {
  @apply flex items-center mt-1 pl-3 pr-10 py-2 rounded border-gray-500 border-2 min-h-11 bg-transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.8' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
}
.dark .u-ms__input{
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.8' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
}

.u-ms__list {
  @apply z-50 max-h-[40vh] absolute overflow-y-auto top-[calc(100%+0.25rem)] min-h-11;
  @apply rounded text-black bg-white shadow-xl border border-black;
  &.u-ms__list--bottom {
    @apply bottom-[calc(100%-1.25rem)] top-auto;
  }
}

.fake-checkbox {
  @apply flex-none w-4 h-4 rounded border border-black bg-white mr-2;
}

.u-ms__option {
  @apply cursor-pointer whitespace-nowrap;
  &:hover {
    @apply bg-blue-300 text-white;
  }
}
.u-ms__option--active {
  @apply bg-blue-300 text-white;
}

.u-ms__option--checked {
  .fake-checkbox {
    @apply bg-primary;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
  }
}
</style>

<script setup lang="ts">
import { computed, PropType, ref, watch, nextTick, onMounted, onUnmounted, reactive, onBeforeUpdate, onUpdated } from 'vue';
import { boolean } from 'yup/lib/locale';
import { useId } from '../../logic';

const emit = defineEmits(['update:modelValue', 'close'])
const props = defineProps({
  modelValue: {
    type: [String, Object, Array]
  },
  options: {
    type: Array as PropType<any[]>,
    default: () => ([]),
    required: true,
  },
  label: {
    type: String as PropType<string>,
    required: true,
  },
  truncate: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  allMessage: {
    type: [Boolean, String],
    default: false,
  },
  placeholder: String,
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  multiselect: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
});

// template refs
const combobox = ref<HTMLElement>();
const listbox = ref<HTMLElement>();

// reference to all options
let optionRefs: HTMLBaseElement[] = [];
const setOptionRef = (el: HTMLBaseElement) => {
  if (el) {
    optionRefs.push(el);
  }
};
onBeforeUpdate(() => {
  optionRefs = []
});

// position of dropdown listbox (top)
const dropdownPosition = ref('bottom');

const displayTruncated = computed(() => {
  if (Array.isArray(props.modelValue)) {
    // should we display a custom all options selected text?
    if(props.allMessage && props.options.length > 1 && props.modelValue.length === props.options.length) {
      return props.allMessage
    }
    if(props.modelValue.length > 1) {
      const first = props.modelValue[0];
      const firstOption = props.options.find(option => JSON.stringify(option.value) === JSON.stringify(first))
      return (firstOption?.label ?? '') + ` (+${props.modelValue.length - 1})`
    }
    return props.modelValue
      .map(value => {
        // deep comparison
        const option = props.options.find(option => JSON.stringify(option.value) === JSON.stringify(value))
        return option?.label ?? ''
      })
      .join(', ')
  }
});

const displayAll = computed(() => {
  if (Array.isArray(props.modelValue)) {
    // should we display a custom all options selected text?
    if(props.allMessage && props.options.length > 1 && props.modelValue.length === props.options.length) {
      return props.allMessage
    }
    return props.modelValue
      .map(value => {
        // deep comparison
        const option = props.options.find(option => JSON.stringify(option.value) === JSON.stringify(value))
        return option?.label ?? ''
      })
      .join(', ')
  }
});

const computeDropdownDirection = () => {
  const listrect = combobox.value?.getBoundingClientRect() as DOMRect;
  return window.innerHeight / 2 < listrect.top ? 'bottom' : 'top';
};

// ids for all fields
const labelId = ref(`u-ms-label-${useId()}`);
const listboxId = ref(`u-ms-listbox-${useId()}`);
const selectedValuesId = ref(`u-ms-selected-values-${useId()}`);
const optionsBaseId = `u-ms-option-${useId()}`;

const open = ref(false);
const activeDescendantIndex = ref(-1);

// watch open state of listbox and act
watch(open, (isOpen: boolean) => {
  if (isOpen) {
    // compute position dropdown
    dropdownPosition.value = computeDropdownDirection()
    nextTick(() => {
      // focus listbox
      listbox.value?.focus();
      // Do wee have any selected options?
      if (props.modelValue?.length && optionRefs.length && listbox.value) {
        // set focus to first selected option
        activeDescendantIndex.value = getFirstSelectedOptionIndex(props.modelValue, optionRefs);
      }
    })
  } else {
    activeDescendantIndex.value = 0;
    emit('close')
  }
});

// watch active decendant for scroll into view
watch(activeDescendantIndex, () => {
  if (open && optionRefs.length && listbox.value) {
    // scroll to first selected option
    scrollToActiveDescendant(optionRefs, listbox.value, activeDescendantIndex.value);
  }
})

const getFirstSelectedOptionIndex = (modelValue: any, options: HTMLBaseElement[]) => {
  return options.findIndex(option => option.classList.contains('u-ms__option--checked')) || 0;
};

const scrollToActiveDescendant = (options: HTMLBaseElement[], listbox: HTMLElement, activeDescendantIndex: number) => {
  const selectedOption = options[activeDescendantIndex];
  const { offsetTop, clientHeight } = selectedOption;
  const currentVisibleArea = listbox.scrollTop + listbox.clientHeight
  if (offsetTop < listbox.scrollTop) {
    listbox.scrollTop = offsetTop
  } else if (offsetTop + clientHeight > currentVisibleArea) {
    listbox.scrollTop = offsetTop - listbox.clientHeight + clientHeight
  }
}

const onToggle = () => {
  open.value = !open.value;
};

const onDirection = (e: KeyboardEvent, direction: string) => {
  switch (direction) {
    case 'up':
      if (activeDescendantIndex.value !== 0) {
        activeDescendantIndex.value--;
      }
      break;
    case 'down':
      if (activeDescendantIndex.value !== props.options.length - 1) {
        activeDescendantIndex.value++;
      }
      break;
  }
};

// move focus to combobox on escape
const onEscape = () => {
  open.value = false;
  combobox.value?.focus();
};

const onSelect = (e: KeyboardEvent) => {
  if (e.shiftKey) {
    console.log('space + shift');
  } else {
    input(props.options[activeDescendantIndex.value]);
  }
};

const onHome = () => activeDescendantIndex.value = 0;
const onEnd = () => activeDescendantIndex.value = props.options.length - 1;

const onBlur = (e: FocusEvent) => {
  // if next focus target is not the combobox element
  // then close the listbox
  if (e.relatedTarget !== combobox.value) {
    open.value = false;
  }
};

// get uniqe id for each option in listbox
const getOptionId = (option: any) => `${optionsBaseId}-${props.options.indexOf(option)}`;

const input = (option: any) => {
  let value = props.modelValue as any;
  if (!Array.isArray(value)) {
    value = [];
  }
  const { value: optionValue } = option
  if (value.includes(optionValue)) {
    value.splice(value.indexOf(optionValue), 1)
  } else {
    value.push(optionValue)
  }
  emit('update:modelValue', value)
};

const isSelected = (option: any) => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(option.value)
  } else {
    return false
  }
};

</script>
