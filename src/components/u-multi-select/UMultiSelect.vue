<template>
  <div class="relative">
    <label :id="labelId">{{ label }}</label>
    <div
      ref="combobox"
      :aria-labelledby="labelId + ' ' + selectedValuesId"
      :aria-expanded="open"
      :aria-controles="listboxId"
      aria-haspopup="listbox"
      aria-autocomplete="none"
      class="focus-style u-ms__input"
      tabindex="0"
      role="combobox"
      :disabled="disabled"
      @click="onToggle"
      @keydown.enter.prevent.="onToggle"
    >
      <div :id="selectedValuesId">{{ display }}</div>
    </div>
    <ul
      v-if="open"
      ref="listbox"
      :id="listboxId"
      class="u-ms__list"
      role="listbox"
      :aria-multiselectable="multiselect"
      :aria-labelledby="labelId"
      :aria-activedescendant="getOptionId(options[activeDescendantIndex])"
      tabindex="-1"
      @keyup="keyUpHandler"
      @keydown.space.prevent="onSelect"
      @keydown.enter.prevent="onSelect"
      @keydown.prevent.up="directionHandler($event, 'up')"
      @keydown.prevent.down="directionHandler($event, 'down')"
      @keydown.esc="escapeHandler"
      @keydown.home="homeAndEndHandler"
      @keydown.end="homeAndEndHandler"
      @blur="blurHandler"
    >
      <li
        v-for="(option, index) in options"
        class="hover:bg-gray-200 cursor-pointer"
        :class="{ 'text-red': isSelected(option), 'bg-gray-200': index === activeDescendantIndex }"
        :key="option.key"
        :id="getOptionId(option)"
        :aria-selected="isSelected(option) ? 'true' : 'false'"
        role="option"
        @click="input(option)"
      >{{ option.label }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref, watch, nextTick } from 'vue';
import { useId } from '../../logic/use-id';

const ARROWS = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];

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
  placeholder: String,
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  multiselect: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
})

// template refs
const combobox = ref<HTMLElement>();
const listbox = ref<HTMLElement>();

const display = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue
      .map(value => {
        const option = props.options.find(option => option.value === value)
        return option?.label ? option.label : ''
      })
      .join(', ')
  }
});

// ids for all fields
const labelId = ref(`u-ms-label-${useId()}`);
const listboxId = ref(`u-ms-listbox-${useId()}`);
const selectedValuesId = ref(`u-ms-selected-values-${useId()}`);
const optionsBaseId = `u-ms-option-${useId()}`;

const open = ref(false);
const activeDescendantIndex = ref(-1);

//watch open state of listbox
watch(open, (isOpen: boolean) => {
  if (isOpen) {
    nextTick(() => {
      // register click to listen for clicks outside listbox
      document.addEventListener('click', onClickOutside);
      // focus listbox
      listbox.value?.focus();
      console.log('opened');
      // set focus to first selected option
      if (props.modelValue?.length == -3) {
        // if there ar options provided
        /*if (this.$refs.options) {
          const firstSelectedOptionIndex = this.$refs.options.findIndex(
            option =>
              option.classList.contains('v-multiselect__option--selected')
          )
          this.activeDescendantIndex = firstSelectedOptionIndex
        }*/
      } else {
        // if not select to the first option
        activeDescendantIndex.value = 0;
      }
    })
  } else {
    document.removeEventListener('click', onClickOutside)
    emit('close')
  }

});

// logic 
const onClickOutside = (e: MouseEvent) => {
  if ((listbox.value?.contains(e.target)) || combobox.value?.contains(e.target)) {
  } else {
    console.log('closed');
    open.value = false
  }
};

const onToggle = () => {
  open.value = !open.value;
};

// prevent default scroll behavior for arrow keys
const keyDownHandler = (e: KeyboardEvent) => {
  if (ARROWS.includes(e.key)) {
    console.log('prevented scroll');
    e.preventDefault();
  }
};

const keyUpHandler = (e: KeyboardEvent) => {
  const keyCode = e.keyCode || e._keyCode;
  console.log('keyup: ', e.code, keyCode);
}

const directionHandler = (e: KeyboardEvent, direction: string) => {
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
const escapeHandler = () => {
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

const homeAndEndHandler = () => {

};

const blurHandler = (e: FocusEvent) => {
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

<style scoped lang="postcss">
.u-ms__input {
  @apply pl-3 pr-10 py-2 rounded border-black border-2 min-h-11 bg-primary-100;
}

.u-ms__list {
  @apply z-50 min-w-full absolute top-[100%] min-h-11;
  @apply rounded p-2 bg-white shadow-xl border;
}
</style>