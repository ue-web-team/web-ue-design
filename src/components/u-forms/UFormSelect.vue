<template>
  <div class="flex flex-col">
    <label :for="inputId">{{ label }} {{ required ? '*' : '' }}</label>
    <select
      class="mt-1 u-form-control"
      :class="{ 'border-red': !!errorMessage }"
      :id="inputId"
      :aria-describedby="errorId"
      :aria-invalid="!!errorMessage"
      :aria-required="required"
      :name="name"
      :value="inputValue"
      @blur="handleBlur"
      @change="handleChange"
    >
      <option
        v-for="(item, index) in items"
        :key="`${name}-option-${index}`"
        :value="item"
      >{{ item }}</option>
    </select>
    <p role="alert" :id="errorId" class="text-red-400" v-show="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useField } from "vee-validate";
import { ref, watch } from "vue";
import { useId } from '../../logic/use-id';

const inputId = ref(`u-form-select-${useId()}`);
const errorId = ref(`u-form-error-${useId()}`);

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  items: {
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
  label: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false
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
  //emit("update:modelValue", newValue);
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