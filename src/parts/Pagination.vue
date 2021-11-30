<template>
  <article>
    <h2 class="text-3xl border-b pb-4 mb-6 font-medium bg-li">Pagination</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <table class="table-fixed w-full">
          <thead>
            <tr class="text-left">
              <th class="w-1/3">Name</th>
              <th class="w-1/3">Gender</th>
              <th class="w-1/3 text-right">Stålar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="person in pagedList">
              <td class="py-2 truncate">{{ person.name }}</td>
              <td>{{ person.gender }}</td>
              <td class="text-right">{{ person.balance }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex mt-2 w-full justify-end">
          <UPagination
            :current="currentPage"
            :total="list.length"
            :perPage="4"
            @page-changed="onPageChange"
          />
        </div>
      </div>
    </div>

    <h3 class="text-xl my-4">Usage</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Prism language="html" class="codesnippet">{{ template }}</Prism>
      <Prism language="javascript" class="codesnippet">{{ code }}</Prism>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Prism from "@/lib/code-block"

const currentPage = ref(1)
const perPage = 4;
const pagedList = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return list.slice(start, start + perPage);
})

const onPageChange = (page: number) => {
  currentPage.value = page;
};

const list = [
  {
    "_id": "61a0b4c67e453bc8497532ab",
    "index": 0,
    "guid": "ea7ea2f2-88e2-4ad5-a9f1-b9b387506e42",
    "isActive": true,
    "balance": "$3,006.77",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "blue",
    "name": "Evans Duran",
    "gender": "male"
  },
  {
    "_id": "61a0b4c6186582e9d8083fc6",
    "index": 1,
    "guid": "d2e250e5-0ad3-475a-8025-3949ba9618a4",
    "isActive": false,
    "balance": "$2,093.48",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "green",
    "name": "Gomez Guerrero",
    "gender": "male"
  },
  {
    "_id": "61a0b4c65505e1e6fca456a1",
    "index": 2,
    "guid": "4dbe720b-5d05-4c33-ac22-7afcbf8d8a5e",
    "isActive": false,
    "balance": "$2,182.91",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "blue",
    "name": "Swanson Davis",
    "gender": "male"
  },
  {
    "_id": "61a0b4c624dc457cc76409c6",
    "index": 3,
    "guid": "9993587d-9c72-4d86-98a4-f41e3e40e4a3",
    "isActive": false,
    "balance": "$1,172.67",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "brown",
    "name": "Downs Blankenship",
    "gender": "male"
  },
  {
    "_id": "61a0b4c64787aeeb390f54b2",
    "index": 4,
    "guid": "aa4b22ff-66ec-4bdf-af08-f9537cf3c35a",
    "isActive": false,
    "balance": "$2,729.49",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "green",
    "name": "Lara Acosta",
    "gender": "male"
  },
  {
    "_id": "61a0b4c6ec595bf6b3114b82",
    "index": 5,
    "guid": "1b2bd090-acee-4efe-9056-f29e46643531",
    "isActive": false,
    "balance": "$1,392.00",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "green",
    "name": "Nadia Patrick",
    "gender": "female"
  },
  {
    "_id": "61a0b4c65d531277adc6dece",
    "index": 6,
    "guid": "c4e10c87-459e-4499-94d3-be9d43900928",
    "isActive": true,
    "balance": "$1,224.40",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "brown",
    "name": "Gentry Robbins",
    "gender": "male"
  },
  {
    "_id": "61a0b4c60f0b905031259f4c",
    "index": 7,
    "guid": "b6c18f06-d6af-4731-9aa1-5b30814369fb",
    "isActive": false,
    "balance": "$3,547.86",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "green",
    "name": "Hewitt Patel",
    "gender": "male"
  },
  {
    "_id": "61a0b4c6b851da7429fca6b3",
    "index": 8,
    "guid": "80be050a-e41d-4404-86fd-d48afde4f74c",
    "isActive": false,
    "balance": "$1,913.63",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "blue",
    "name": "Yang Holland",
    "gender": "male"
  },
  {
    "_id": "61a0b4c661c26b17603df4bd",
    "index": 9,
    "guid": "79a60c1b-270d-4da3-8103-d08ccd0049df",
    "isActive": false,
    "balance": "$3,990.80",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "brown",
    "name": "Deirdre Humphrey",
    "gender": "female"
  },
  {
    "_id": "61a0b4c6d05561e6c51e3cae",
    "index": 10,
    "guid": "b4a32dd4-a48c-4b1d-b74d-3aff01a484ff",
    "isActive": false,
    "balance": "$1,262.02",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "blue",
    "name": "Levy Suarez",
    "gender": "male"
  },
  {
    "_id": "61a0b4c6a14adca2a119758d",
    "index": 11,
    "guid": "45d8eff0-918d-48bc-ab25-31be120db2ba",
    "isActive": true,
    "balance": "$1,899.89",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "brown",
    "name": "Adela Nicholson",
    "gender": "female"
  },
  {
    "_id": "61a0b4c64ccd6f92e40fe44e",
    "index": 12,
    "guid": "8319c732-4188-47ce-bd71-ef353dd12633",
    "isActive": false,
    "balance": "$2,705.93",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "blue",
    "name": "House Horn",
    "gender": "male"
  },
  {
    "_id": "61a0b4c6c8ee081f2197e22c",
    "index": 13,
    "guid": "f0425c67-6c23-4660-a63e-42ce3e129cbd",
    "isActive": false,
    "balance": "$1,397.39",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "brown",
    "name": "Crane Snyder",
    "gender": "male"
  },
  {
    "_id": "61a0b4c66e9d3e61dabe92c9",
    "index": 14,
    "guid": "bdd81c0c-f641-4f90-9ae4-241530a17de2",
    "isActive": false,
    "balance": "$3,698.22",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "blue",
    "name": "Lloyd Velez",
    "gender": "male"
  },
  {
    "_id": "61a0b4c6f236d038078103a6",
    "index": 15,
    "guid": "5b696356-b678-4a08-889d-6e19c46bffaf",
    "isActive": true,
    "balance": "$2,145.01",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": "Dominique King",
    "gender": "female"
  }
]

const isDialogOpen = ref(false);
const isLoading = ref(false);

const template =
  `<table>
  ...
  <tr v-for="person in pagedList">
    <td>{{ person.name }}</td>
    <td>{{ person.gender }}</td>
    <td>{{ person.balance }}</td>
  </tr>
</table>
<UPagination
  :current="currentPage"
  :total="list.length"
  :perPage="4"
  @page-changed="onPageChange"
/>
`
const code =
  `list = [
  { name: 'Lisa Bettson', gender: 'female', balance: '$2,800.33'}
  ...
]
const currentPage = ref(1);
const perPage = 4;
const pagedList = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return list.slice(start, start + perPage);
});
const onPageChange = (page: number) => {
  currentPage.value = page;
};
`
</script>