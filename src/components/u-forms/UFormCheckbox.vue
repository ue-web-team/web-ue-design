<template>
  <div>
    <div class="flex items-center">
      <input
        class="focus-style mr-2 u-form-control"
        :class="{ 'border-red': !!errorMessage }"
        type="checkbox"
        :id="inputId"
        :aria-describedby="errorId"
        :aria-invalid="!!errorMessage"
        :aria-required="required"
        :checked="checked"
        :value="value"
        :name="name"
        @blur="handleBlur"
        @change="handleChange"
      />
      <label :for="inputId">{{ label }} {{ required ? '*' : '' }}</label>
    </div>
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

<script lang="ts" setup>
import { useField } from "vee-validate";
import { ref } from "vue";
import { useId } from '../../logic/use-id';

const inputId = ref(`u-form-checkbox-${useId()}`);
const errorId = ref(`u-form-error-${useId()}`);

const props = defineProps({
  value: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
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

const {
  checked,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(props.name, undefined, {
  type: 'checkbox',
  checkedValue: props.value,
});
</script>