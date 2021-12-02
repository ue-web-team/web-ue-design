
<template>
  <div class="flex flex-col">
    <fieldset
      class="border-gray-600 border-2 px-3 pt-2 pb-4 rounded-md inline-flex flex-col gap-2"
      :class="{ 'border-red': !!errorMessage }"
      :aria-invalid="!!errorMessage"
    >
      <legend class="px-2">{{ legend }}</legend>
      <div class="pl-2 flex items-center gap-2" v-for="(item, index) in options" :key="`${name}-option-${index}`">
        <input
          class="focus-style u-form-control"
          type="radio"
          :name="name"
          :id="`${inputId}-${index}`"
          :value="item"
          :checked="inputValue == item"
          :aria-required="required"
          :aria-describedby="errorId"
          @blur="handleBlur"
          @change="handleChange"
        />
        <label :for="`${inputId}-${index}`">{{ item }}</label>
      </div>
    </fieldset>
    <p role="alert" aria-atomic="true" :id="errorId" class="text-red-400 text-sm mt-1" v-show="errorMessage">{{ errorMessage }}</p>
    <p :id="errorId" class="self-end text-sm mt-1" v-if="hint && !errorMessage">{{ hint }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useField } from "vee-validate";
import { ref, watch } from "vue";
import { useId } from '../../logic/use-id';

const inputId = ref(`u-form-radio-${useId()}`);
const errorId = ref(`u-form-error-${useId()}`);

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => ([])
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String
  },
  legend: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false
  },
  hint: {
    type: String,
  }
});

const emit = defineEmits(["update:modelValue"]);

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(props.name, undefined, {
  initialValue: props.modelValue,
});

watch(inputValue, (newValue) => {
  if (newValue === props.modelValue) {
    return;
  }
  emit("update:modelValue", newValue);
});

watch(
  () => props.modelValue,
  (newModel) => {
    if (newModel === inputValue.value) {
      return;
    }
    inputValue.value = newModel;
  }
);
</script>