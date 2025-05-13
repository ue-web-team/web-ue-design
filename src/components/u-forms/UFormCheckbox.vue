<template>
  <div>
    <div :class="[inline ? 'block' : 'flex items-center']">
      <input
        class="mr-2 u-form-control dark:checked:bg-lightgreen"
        type="checkbox"
        :id="inputId"
        :aria-describedby="fieldsetErrorId || errorId"
        :aria-invalid="!!errorMessage"
        :aria-required="required"
        :checked="checked"
        :value="value"
        :name="name"
        @blur="handleBlur"
        @change="handleChange"
      />
      <label :for="inputId" :class="labelClasses">
        <slot> {{ label }} {{ required ? '*' : '' }} </slot>
      </label>
    </div>

    <div :id="errorId">
      <p v-if="$slots.hint || hint" class="text-sm mt-1">
        <slot name="hint">
          {{ hint }}
        </slot>
      </p>
      <p
        role="alert"
        aria-atomic="true"
        class="text-red-400 text-sm mt-1 dark:text-sun"
        v-show="!!errorMessage && !fieldsetErrorId"
      >
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate';
import { inject, Ref, ref, watch } from 'vue';
import { useId } from '../../logic';

const inputId = ref(`u-form-checkbox-${useId()}`);
const errorId = ref(`u-form-error-${useId()}`);

const props = defineProps({
  modelValue: {
    type: [Boolean, String],
  },
  value: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  },
  required: {
    type: Boolean,
    default: false,
  },
  hint: {
    type: String,
  },
  inline: {
    type: Boolean,
    defalut: false,
  },
  labelClasses: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const { checked, errorMessage, handleBlur, handleChange } = useField(props.name, undefined, {
  type: 'checkbox',
  checkedValue: props.value,
});

watch(checked as Ref, (newValue) => {
  if (newValue === props.modelValue) {
    return;
  }
  emit('update:modelValue', newValue);
});

watch(
  () => props.modelValue,
  (newModel) => {
    if (newModel === (checked as Ref).value) {
      return;
    }
    (checked as Ref).value = newModel;
  }
);

const fieldsetErrorId = inject<Ref>('fieldset-error-id');
const fieldsetError = inject<Ref>('fieldset-error-message');
watch(errorMessage, (message) => {
  if (fieldsetError) {
    fieldsetError.value = message;
  }
});
</script>
