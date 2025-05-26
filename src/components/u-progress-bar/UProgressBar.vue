<template>
  <div class="h-1 w-full">
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter" v-bind:css="false">
      <div class="top-progress" :style="barStyle" v-if="show">
        <div class="peg"></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch, type CSSProperties } from 'vue';

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

const queue = (() => {
  const pending: ((next: () => void) => void)[] = [];
  function next() {
    const fn = pending.shift();
    if (fn) fn(next);
  }
  return (fn: (next: () => void) => void) => {
    pending.push(fn);
    if (pending.length === 1) next();
  };
})();

const props = defineProps<{
  loading?: boolean;
  speed?: number;
  color?: string;
  colorShadow?: string;
  errorColor?: string;
  trickle?: boolean;
  trickleSpeed?: number;
  easing?: string;
  height?: number;
  minimum?: number;
  maximum?: number;
  zIndex?: number;
}>();

const error = ref(false);
const show = ref(false);
const progress = ref(0);
const opacity = ref(1);
const status = ref<number | null>(null);
const isPaused = ref(false);

watch(
  () => props.loading,
  (loading) => {
    loading ? start() : done();
  }
);

const progressColor = computed(() => (error.value ? props.errorColor ?? '#f44336' : props.color ?? '#29d'));

const isStarted = computed(() => typeof status.value === 'number');

const barStyle = computed<CSSProperties>(() => ({
  position: 'relative',
  top: '0',
  left: '0',
  right: '0',
  width: `${progress.value}%`,
  height: `${props.height ?? 3}px`,
  backgroundColor: progressColor.value,
  transition: `all ${props.speed ?? 350}ms ${props.easing ?? 'linear'}`,
  opacity: `${opacity.value}`,
  // zIndex: props.zIndex?.toString() ?? '9999',
}));

const beforeEnter = () => {
  opacity.value = 0;
  progress.value = 0;
};

const enter = (_el: Element, done: () => void) => {
  opacity.value = 1;
  done();
};

const afterEnter = (_el: Element) => {
  _runStart();
};

const _work = () => {
  setTimeout(() => {
    if (!isStarted.value || isPaused.value) return;
    increase();
    _work();
  }, props.trickleSpeed ?? 250);
};

const _runStart = () => {
  status.value = progress.value === 100 ? null : progress.value;
  if (props.trickle ?? true) {
    _work();
  }
};

const start = () => {
  isPaused.value = false;
  if (show.value) {
    _runStart();
  } else {
    show.value = true;
  }
};

const set = (amount: number) => {
  isPaused.value = false;
  let o: number;
  if (isStarted.value) {
    o = amount < progress.value ? clamp(amount, 0, 100) : clamp(amount, props.minimum ?? 0.8, 100);
  } else {
    o = 0;
  }
  status.value = o === 100 ? null : o;
  queue((next) => {
    progress.value = o;
    if (o === 100) {
      setTimeout(() => {
        opacity.value = 0;
        setTimeout(() => {
          show.value = false;
          error.value = false;
          next();
        }, props.speed ?? 350);
      }, props.speed ?? 350);
    } else {
      setTimeout(next, props.speed ?? 350);
    }
  });
};

const increase = (amount?: number) => {
  let o = progress.value;
  if (o < 100 && typeof amount !== 'number') {
    if (o >= 0 && o < 25) {
      amount = Math.random() * 3 + 3;
    } else if (o >= 25 && o < 50) {
      amount = Math.random() * 3;
    } else if (o >= 50 && o < 85) {
      amount = Math.random() * 2;
    } else if (o >= 85 && o < 99) {
      amount = 0.5;
    } else {
      amount = 0;
    }
  }
  set(clamp(o + (amount ?? 0), 0, props.maximum ?? 97.5));
};

const decrease = (amount: number) => {
  if (progress.value === 0) return;
  increase(-amount);
};

const done = () => {
  set(100);
};

const fail = () => {
  error.value = true;
  done();
};

onMounted(() => {
  if (props.loading) {
    start();
  }
});
</script>

<style lang="pcss" scoped>
.peg {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  opacity: 1;
}
</style>
