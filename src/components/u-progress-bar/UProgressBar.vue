<template>
  <div class="h-1 w-full">
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-bind:css="false"
    >
      <div class="top-progress" :style="barStyle" v-if="show">
        <div class="peg"></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

const queue = (() => {
  const pending: any[] = []
  function next() {
    let fn = pending.shift()
    if (fn) {
      fn(next)
    }
  }
  return (fn: any) => {
    pending.push(fn)
    if (pending.length === 1) {
      next()
    }
  }
})();

const props = defineProps(
  {
    loading: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 350
    },
    color: {
      type: String,
      default: '#29d'
    },
    colorShadow: String,
    errorColor: {
      type: String,
      default: '#f44336'
    },
    trickle: {
      type: Boolean,
      default: true
    },
    trickleSpeed: {
      type: Number,
      default: 250
    },
    easing: {
      type: String,
      default: 'linear'
    },
    height: {
      type: Number,
      default: 3
    },
    minimum: {
      type: Number,
      default: 0.8
    },
    maximum: {
      type: Number,
      default: 97.5
    },
    zIndex: {
      type: Number,
      default: 9999
    }
  }
);

const error = ref(false);
const show = ref(false);
const progress = ref(0);
const opacity = ref(1);
const status = ref(null);
const isPaused = ref(false);

watch(() => props.loading, (loading) => {
  loading ? start() : done()
});

const progressColor = computed(() => error.value ? props.errorColor : props.color);
const isStarted = computed(() => typeof status.value === 'number');
const barStyle = computed(() => ({
  position: 'relative',
  top: '0',
  left: '0',
  right: '0',
  width: `${progress.value}%`,
  height: `${props.height}px`,
  backgroundColor: progressColor.value,
  transition: `all ${props.speed}ms ${props.easing}`,
  opacity: `${opacity.value}`,
  //zIndex: `${props.zIndex}`
}));

const beforeEnter = (el) => {
  opacity.value = 0
  progress.value = 0
};

const enter = (el, done) => {
  opacity.value = 1
  done();
};

const afterEnter = (el) => {
  _runStart()
};

const _work = () => {
  setTimeout(() => {
    if (!isStarted.value || isPaused.value) {
      return
    }
    increase();
    _work();
  }, props.trickleSpeed)
};

const _runStart = () => {
  status.value = (progress.value === 100 ? null : progress.value)
  if (props.trickle) {
    _work()
  }
};

const start = () => {
  isPaused.value = false
  if (show.value) {
    _runStart()
  } else {
    show.value = true
  }
};

const set = (amount) => {
  isPaused.value = false;
  let o;
  if (isStarted.value) {
    o = amount < progress.value
      ? clamp(amount, 0, 100)
      : clamp(amount, props.minimum, 100);
  } else {
    o = 0;
  }
  status.value = (o === 100 ? null : o);
  queue(next => {
    progress.value = o;
    if (o === 100) {
      setTimeout(() => {
        opacity.value = 0;
        setTimeout(() => {
          show.value = false;
          error.value = false;
          next()
        }, props.speed)
      }, props.speed)
    } else {
      setTimeout(next, props.speed)
    }
  })
};

const increase = (amount) => {
  let o = progress.value;
  if (o < 100 && typeof amount !== 'number') {
    if (o >= 0 && o < 25) {
      amount = Math.random() * 3 + 3
    } else if (o >= 25 && o < 50) {
      amount = Math.random() * 3
    } else if (o >= 50 && o < 85) {
      amount = Math.random() * 2
    } else if (o >= 85 && o < 99) {
      amount = 0.5
    } else {
      amount = 0
    }
  }
  set(clamp(o + amount, 0, props.maximum));
};

const decrease = (amount) => {
  if (progress.value === 0) {
    return
  }
  increase(-amount);
};

const done = () => {
  set(100);
};

const fail = () => {
  error.value = true
  done();
};

onMounted(() => {
  if (props.loading) {
    start();
  }
});

</script>

<style scoped>
.peg {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  opacity: 1;
  box-shadow: 0 0 10px #ffb602, 0 0 5px #ffb602;
}
</style>