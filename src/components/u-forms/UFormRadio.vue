<template>
  <div class="flex items-center">
    <input
      class="focus-style mr-2 u-form-control"
      type="radio"
      :id="inputId"
      :aria-describedby="fieldsetErrorId"
      :aria-invalid="!!errorMessage"
      :aria-required="required"
      :checked="checked"
      :value="value"
      :name="name"
      @blur="handleBlur"
      @change="handleChange"
    />
    <label :for="inputId">
      <slot>
        {{ label }} {{ required ? '*' : '' }}
      </slot>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { useField } from "vee-validate";
import { inject, Ref, ref, watch } from "vue";
import { useId } from '../../logic/use-id';

const props = defineProps({
  value: {
    type: [String, Number],
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
    default: false
  }
});

const inputId = ref(`u-form-radio-${useId()}`);

const {
  checked,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(props.name, undefined, {
  type: 'radio',
  checkedValue: props.value,
});

const fieldsetErrorId = inject<Ref>('fieldset-error-id');
const fieldsetError = inject<Ref>('fieldset-error-message');
watch(errorMessage, message => {
  if(fieldsetError) {
    fieldsetError.value = message;
  }
});

</script>