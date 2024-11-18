<template>
  <div class=" mb-6 relative my-4">
    <label :for="inputId">{{ label }}</label><br/>
    <span ref="bubble" class="bubble">90</span>
    <span v-if="unit" class="absolute text-green font-semibold text-xs mt-8">{{ unit }}</span>
    <input
      ref="slider"
      type="range" 
      :id="inputId" 
      :name="name" 
      :min="min" 
      :max="max" 
      :value="inputValue" 
      :step="step" 
      @blur="handleBlur"
      @change="handleChange"
      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mt-12 accent-primary "/>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">{{ min }}</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">{{ (max - min) / 4 }}</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">{{ (max - min) / 2 }}</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">{{ 3 * (max - min) / 4 }}</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">{{ max }}</span>
  </div>
</template>
<script setup lang="ts">
import { colors } from '../../config/colors';
import { ref, onMounted } from "vue";
import { useField } from "vee-validate";
import { useId } from '../../logic';

const inputId = ref(`u-form-slider-${useId()}`);

const slider = ref<HTMLInputElement>();
const bubble = ref<HTMLSpanElement>();

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  step: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  unit: {
    type: String
  }
});

onMounted(() => {
  if(slider.value && bubble.value) {
    const min = Number(slider.value.min);
    const max = Number(slider.value.max);
    const value = Number(slider.value.value);

    const sliderRangeLength = max - min;
    const sliderCurrentOffset = value - min;
    const percent = sliderCurrentOffset / sliderRangeLength * 100;
    const adjust = 10 - percent * 0.2;

    slider.value.style.background = `linear-gradient(to right, ${ colors.primary.DEFAULT } 0%, ${ colors.primary.DEFAULT } ${ percent }%, #DEE2E6 ${ percent }%, #DEE2E6 100%)`
    bubble.value.style.left = `calc(${ percent }% + ${ adjust }px)`
    bubble.value.innerHTML = slider.value.value;

    slider.value.oninput = function() {
      if(bubble.value && slider.value) {
        const sliderRangeLength = Number(slider.value.max) - Number(slider.value.min)
        const sliderCurrentOffset = Number(slider.value.value) - Number(slider.value.min);
        const percent = sliderCurrentOffset / sliderRangeLength * 100;
        const adjust = 10 - percent * 0.2;

        slider.value.style.background = `linear-gradient(to right, ${ colors.primary.DEFAULT } 0%, ${ colors.primary.DEFAULT } ${ percent }%, #DEE2E6 ${ percent }%, #DEE2E6 100%)`

        bubble.value.style.left = `calc(${ percent }% + ${ adjust }px)`
        bubble.value.innerHTML = slider.value.value;
      }
    };
  }
})

const {
  value: inputValue,
  handleBlur,
  handleChange
} = useField(props.name, undefined, {
  initialValue: props.value,
});

</script>
<style lang="pcss" scoped>
.bubble {
  @apply absolute rounded-full bg-green-100 font-semibold py-2 px-4 w-16 text-center -translate-x-1/2
}

.bubble:after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 0;
	height: 0;
	border: 5px solid transparent;
	border-bottom: 0;
	margin-bottom: -5px;
  margin-left: -5px;
  @apply border-t-green-100
}

</style>