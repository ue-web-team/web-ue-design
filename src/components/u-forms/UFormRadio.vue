<template>
  <div class="flex items-center">
    <input
      class="mr-2 u-form-control"
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
    <label :for="inputId" :class="labelClasses">
      <slot>
        {{ label }} {{ required ? '*' : '' }}
      </slot>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { useField } from "vee-validate";
import { inject, Ref, ref, watch } from "vue";
import { useId } from '../../logic';

const props = defineProps({
  modelValue: {
    type: [String],
  },
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
  },
  labelClasses: {
    type: String,
    default: ""
  }
});

const emit = defineEmits(["update:modelValue"]);

const inputId = ref(`u-form-radio-${useId()}`);

const {
  checked,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(props.name, undefined, {
  checkedValue: props.value,
  type: 'radio',
});

watch(checked as Ref, (newValue, oldValue) => {
    newValue && emit("update:modelValue", props.value);
});

const fieldsetErrorId = inject<Ref>('fieldset-error-id');
const fieldsetError = inject<Ref>('fieldset-error-message');
watch(errorMessage, message => {
  if(fieldsetError) {
    fieldsetError.value = message;
  }
});

</script>