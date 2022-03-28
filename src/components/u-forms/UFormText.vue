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
      :autocomplete="autocomplete"
      :disabled="disabled"
      @blur="handleBlur"
      @change="handleChange"
    ></textarea>
    <input
      v-else
      v-bind="$attrs"
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
      :autocomplete="autocomplete"
      :disabled="disabled"
      @blur="handleBlur"
      @change="handleChange"
    />
    <p
      role="alert"
      aria-atomic="true"
      :id="errorId"
      class="text-red-400 text-sm mt-1"
      v-show="errorMessage"
    >{{ errorMessage }}</p>
    <p :id="errorId" class="self-end text-sm mt-1" v-if="hint && !errorMessage">{{ hint }}</p>
  </div>
</template>

<script lang="ts">
// only possible this way
export default {
  inheritAttrs: false
}
</script>

<script lang="ts" setup>
import { useField } from "vee-validate";
import { ref } from "vue";
import { useId } from '../../logic';

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
  autocomplete: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  hint: {
    type: String,
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