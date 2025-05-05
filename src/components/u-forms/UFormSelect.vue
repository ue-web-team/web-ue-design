<template>
  <div class="flex flex-col">
    <label :for="inputId" :class="labelClasses"
      >{{ label }} {{ required ? "*" : "" }}</label
    >
    <select
      class="mt-1 u-form-control dark:border-white"
      :class="{ 'border-red': !!errorMessage }"
      :id="inputId"
      :aria-describedby="errorId"
      :aria-invalid="!!errorMessage"
      :aria-required="required"
      :name="name"
      :value="inputValue"
      :disabled="disabled"
      @blur="handleBlur"
      @change="handleChange"
    >
      <option
        v-for="(option, index) in options"
        :key="`${name}-option-${index}`"
        :disabled="optionDisabled(option)"
        :value="optionValue(option)"
      >
        {{ optionLabel(option) }}
      </option>
    </select>
    <p
      role="alert"
      aria-atomic="true"
      :id="errorId"
      class="text-red-400 text-sm mt-1 dark:text-sun"
      v-show="errorMessage"
    >
      {{ errorMessage }}
    </p>
    <p :id="errorId" class="self-end text-sm mt-1" v-if="hint && !errorMessage">
      {{ hint }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useField } from "vee-validate";
import { PropType, ref, watch } from "vue";
import { useId } from "../../logic";

const inputId = ref(`u-form-select-${useId()}`);
const errorId = ref(`u-form-error-${useId()}`);

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  options: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  hint: {
    type: String,
  },
  labelClasses: {
    type: String,
    default: "",
  },
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

const optionValue = (option: string | number | any) => {
  if (typeof option === "object") {
    return option?.value;
  }
  return option;
};

const optionDisabled = (option: string | number | any) => {
  if (typeof option === "object") {
    return option?.disabled;
  }
  return false;
};

const optionLabel = (option: string | number | any) => {
  if (typeof option === "object") {
    return option?.label;
  }
  return option;
};
</script>
