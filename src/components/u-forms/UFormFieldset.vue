<template>
  <div class="flex flex-col">
    <fieldset
      class="border-gray-600 pt-2 pb-4 rounded-md"
      :class="{ 'border-red': !!errorMessage, 'border-2 px-3 ' : (!!errorMessage || showBorder) }"
    >
      <legend class="px-2" :class="legendClasses">{{ legend }}</legend>
      <slot></slot>
    </fieldset>
    <p
      role="alert"
      aria-atomic="true"
      :id="errorId"
      class="text-red-400 text-sm mt-1"
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
import { provide, ref } from "vue";
import { useId } from "../../logic";

const errorId = ref(`u-form-error-${useId()}`);
const errorMessage = ref();
provide("fieldset-error-id", errorId);
provide("fieldset-error-message", errorMessage);

const props = defineProps({
  legend: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
  },
  showBorder: {
    type: Boolean,
    default: true
  },
  legendClasses: {
    type: String,
    default: ""
  }
});
</script>
