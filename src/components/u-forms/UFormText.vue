<template>
  <div class="flex flex-col">
    <label :for="inputId">{{ label }} {{ required ? '*' : '' }}</label>
    <textarea
      v-if="textarea"
      class="mt-1 u-form-control"
      :class="{ 'border-red': !!errorMessage }"
      :id="inputId"
      :aria-describedby="errorId"
      :aria-invalid="!!errorMessage"
      :aria-required="required"
      :value="inputValue"
      :name="name"
      :placeholder="placeholder"
      @blur="handleBlur"
      @change="handleChange"
    ></textarea>
    <input
      v-else
      class="mt-1 u-form-control"
      :class="{ 'border-red': !!errorMessage }"
      :type="type"
      :id="inputId"
      :aria-describedby="errorId"
      :aria-invalid="!!errorMessage"
      :aria-required="required"
      :value="inputValue"
      :name="name"
      :placeholder="placeholder"
      @blur="handleBlur"
      @change="handleChange"
    />
    <p role="alert" :id="errorId" class="text-red-400" v-show="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useField } from "vee-validate";
import { ref } from "vue";
import { useId } from '../../logic/use-id';

const inputId = ref(`u-form-input-${useId()}`);
const errorId = ref(`u-form-error-${useId()}`);

const props = defineProps({
  textarea: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "text",
  },
  value: {
    type: String,
    default: "",
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

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(props.name, undefined, {
  initialValue: props.value,
});
</script>