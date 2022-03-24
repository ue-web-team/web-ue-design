<template>
  <transition ref="root" :name="transition">
    <div
      tabindex="0"
      class="ld-overlay"
      :class="{ 'is-full-page': !contained }"
      v-show="isActive"
      :aria-busy="isActive"
      aria-label="Loading"
      :style="{ zIndex }"
    >
      <div class="ld-background" :style="{ backgroundColor: bgColor }"></div>
      <div class="ld-icon">
        <slot name="before" />
        <slot name="loader">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            :height="height"
            :width="width"
            :fill="color"
          >
            <rect x="0" y="13" width="4" height="5">
              <animate
                attributeName="height"
                attributeType="XML"
                values="5;21;5"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="13; 5; 13"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="10" y="13" width="4" height="5">
              <animate
                attributeName="height"
                attributeType="XML"
                values="5;21;5"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="13; 5; 13"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="20" y="13" width="4" height="5">
              <animate
                attributeName="height"
                attributeType="XML"
                values="5;21;5"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="13; 5; 13"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </slot>
        <slot name="default" />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, PropType, ref, render, watch } from "vue";
import { colors } from "@/config/colors";

const props = defineProps({
  modelValue: Boolean,
  contained: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  container: {
    type: [Object, Function],
  },
  trapFocus: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  lockScroll: {
    type: Boolean,
    default: false,
  },
  transition: {
    type: String,
    default: "fade",
  },
  zIndex: {
    type: Number,
    default: 1010,
  },
  height: {
    type: Number,
    default: 100,
  },
  width: {
    type: Number,
    default: 100,
  },
  color: {
    type: String,
    default: colors.primary.DEFAULT,
  },
  bgColor: {
    type: String,
    default: colors.gray[700]
  },
  programmatic: Boolean,
});

const isActive = ref(props.modelValue);
watch(
  () => props.modelValue,
  (value) => {
    isActive.value = value;
  }
);

const root = ref<HTMLElement>();

const onFocusIn = (event: FocusEvent) => {
      // Do not trap if inactive
      if (!isActive) return;

      if (
        // Event target is the loading div element itself
        event.target === root.value ||
        // Event target is inside the loading div
        root.value?.contains(event.target as Node)
      ) return;

      // Use container as parent when available otherwise use parent element when isFullPage is false
      let parent = props.container ? props.container : (props.contained ? root.value?.parentElement :null );

      if (
        // Always prevent when loading is full screen
        !props.contained ||
        // When a parent exist means loader is running inside a container
        // When loading is NOT full screen and event target is inside the given container
        (parent && parent.contains(event.target))
      ) {
        event.preventDefault();
        root.value?.focus()
      }
}

onMounted(() => {
  document.addEventListener('focusin', onFocusIn)
})
onBeforeUnmount(() => {
  document.removeEventListener('focusin', onFocusIn)
})
</script>

<style scoped>
.ld-shown {
  overflow: hidden;
}

.ld-overlay {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.ld-overlay.is-full-page {
  position: fixed;
}

.ld-background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0.5;
}

.ld-overlay .ld-icon {
  position: relative;
}
</style>
