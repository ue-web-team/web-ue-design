<template>
  <nav
    aria-label="pagination"
    class="text-sm sm:text-base sm:justify-between flex w-full justify-end"
  >
    <span class="hidden sm:block">
      {{ t('pagination.page') }}
      <span class="font-semibold">{{ current }}</span>
      {{ t('pagination.of') }}
      <span>
        {{
          Math.ceil(total / perPage)
        }}
      </span>
    </span>
    <ul class="flex items-center">
      <li class="pr-3">
        <a
          href="javascript:;"
          @click="changePage(prevPage)"
          :disabled="!hasPrev()"
          :aria-disabled="!hasPrev()"
          class="focus-style flex items-center justify-center hover:bg-gray-200 rounded-md h-6 w-6"
          :class="{ 'opacity-50': !hasPrev() }"
        >
          <span class="sr-only">{{ t('pagination.previus') }}</span>
          <svg
            class="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </a>
      </li>
      <li class="pr-3" v-if="hasFirst()">
        <a
          href="javascript:;"
          @click="changePage(1)"
          class="focus-style flex hover:bg-gray-200 rounded-md transition-colors duration-300 h-6 w-6 items-center justify-center"
        >1</a>
      </li>
      <li class="pr-3" v-if="hasFirst()">...</li>
      <li class="pr-3" v-for="page in pages" :key="page">
        <a
          :aria-current="current === page ? 'page' : 'false'"
          href="javascript:;"
          @click="changePage(page)"
          :class="{
            'bg-gradient-to-br from-primary-300 to-primary-400 font-medium text-white':
              current === page,
          }"
          class="focus-style flex hover:bg-gray-200 rounded-md transition-colors duration-300 h-6 w-6 items-center justify-center"
        >{{ page }}</a>
      </li>
      <li class="pr-3" v-if="hasLast()">...</li>
      <li class="pr-3" v-if="hasLast()">
        <a
          href="javascript:;"
          @click="changePage(totalPages)"
          class="focus-style flex hover:bg-gray-200 rounded-md transition-colors duration-300 h-6 w-6 items-center justify-center"
        >{{ totalPages }}</a>
      </li>
      <li>
        <a
          href="javascript:;"
          @click="changePage(nextPage)"
          :disabled="!hasNext()"
          :aria-disabled="!hasNext()"
          class="focus-style flex items-center justify-center hover:bg-gray-200 rounded-md h-6 w-6"
          :class="{ 'opacity-50': !hasNext() }"
        >
          <span class="sr-only">{{ t('pagination.next') }}</span>
          <svg
            class="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  current: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 0,
  },
  perPage: {
    type: Number,
    default: 9,
  },
  pageRange: {
    type: Number,
    default: 1,
  },
  t: {
    type: Function,
    default: (message: string) => {
      switch (message) {
        case 'pagination.previus': return 'föregående'
        case 'pagination.next': return 'nästa'
        case 'pagination.of': return 'av'
        case 'pagination.page': return 'sida'
      }
    }
  }
});

const emit = defineEmits(["page-changed"]);

const pages = computed(() => {
  const pages = [];
  for (let i = rangeStart.value; i <= rangeEnd.value; i++) {
    pages.push(i);
  }
  return pages;
});

const rangeStart = computed(() => {
  const start = props.current - props.pageRange;
  return start > 0 ? start : 1;
});

const rangeEnd = computed(() => {
  const end = props.current + props.pageRange;
  return end < totalPages.value ? end : totalPages.value;
});

const totalPages = computed(() => Math.ceil(props.total / props.perPage));
const nextPage = computed(() => props.current + 1);
const prevPage = computed(() => props.current - 1);

const hasFirst = () => rangeStart.value !== 1;
const hasLast = () => rangeEnd.value < totalPages.value;
const hasPrev = () => props.current > 1;
const hasNext = () => props.current < totalPages.value;

const changePage = (page: number) => {
  if (page > 0 && page <= totalPages.value) {
    emit("page-changed", page);
  }
};

</script>