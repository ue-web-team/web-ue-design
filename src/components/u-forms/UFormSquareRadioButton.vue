<template>
  <div class="w-full flex">
    <input
      class="sr-only peer"
      type="radio"
      :id="inputId"
      :name="name"
      :value="value"
      :aria-describedby="fieldsetErrorId"
      :aria-invalid="!!errorMessage"
      :aria-required="required"
      :checked="checked"
      @blur="handleBlur"
      @change="handleChange"
    />
    <label
      :for="inputId"
      class="w-full py-5 px-3 bg-white border border-gray-300 rounded cursor-pointer peer-checked:border-darkgreen peer-checked:bg-lightgreen-100 hover:bg-lightgreen-100 font-semibold text-black text-center"
    >
      {{ label }}
    </label>
  </div>
</template>
<script setup lang="ts">
import { useField } from "vee-validate";
import { inject, ref, Ref, watch } from "vue";
import { useId } from "../../logic";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputId = ref(`u-form-square-${useId()}`);

const { checked, errorMessage, handleBlur, handleChange } = useField(
  props.name,
  undefined,
  {
    checkedValue: props.value,
    type: "radio",
  }
);

watch(checked as Ref, (newValue, oldValue) => {
  newValue && emit("update:modelValue", props.value);
});

const fieldsetErrorId = inject<Ref>("fieldset-error-id");
const fieldsetError = inject<Ref>("fieldset-error-message");
watch(errorMessage, (message) => {
  if (fieldsetError) {
    fieldsetError.value = message;
  }
});
</script>
