<template>
  <div class="w-full flex">
    <input
      type="radio"
      :id="inputId" 
      :name="name" 
      :value="value" 
      class="sr-only peer" 
      @blur="handleBlur" 
      @change="handleChange" 
      :checked="checked"
      :aria-required="required"/>
    <label :for="inputId" class="w-full py-5 px-3 bg-white border border-gray-300 rounded cursor-pointer peer-checked:border-primary-700 peer-checked:bg-primary-100 hover:bg-primary-100 font-semibold text-black text-center">
      {{ label }}
    </label>
  </div>
</template>
<script setup lang="ts">
import { ref, Ref, watch } from "vue";
import { useField } from "vee-validate";
import { useId } from '../../logic';

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
    default: false
  }
});

const inputId = ref(`u-form-square-${useId()}`);

const emit = defineEmits(["update:modelValue"]);

const {
  checked,
  handleBlur,
  handleChange,
} = useField(props.name, undefined, {
  checkedValue: props.value,
  type: 'radio',
});

watch(checked as Ref, (newValue, oldValue) => {
  newValue && emit("update:modelValue", props.value);
});

</script>
