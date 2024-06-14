<template>
  <!-- kode data staistik web -->
  <div class="container mx-auto z-30 relative -mt-20 pb-36">
    <div
      class="grid grid-cols-1 z-30 md:grid-cols-3 gap-8 bg-white shadow-xl rounded-lg justify-between px-2 py-4 items-center"
    >
      <div
        v-for="(item, index) in statsAssets.detail"
        :key="index"
        class="px-6 py-5 grid grid-cols-1 text-center xl:text-left gap-5 lg:grid-cols-2 items-center"
      >
        <img :src="item.src" alt="cap" class="scale-90 mb-6 lg:mb-0 mx-auto" />
        <div>
          <h1 class="text-3xl text-slate-700 lg:text-4xl font-semibold mb-2">
            {{ item.title }}
          </h1>
          <p class="text-base lg:text-lg text-gray-500">{{ item.info }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// properti bertipe object yang diambil dari HomePage.vue
const props = defineProps({
  statsAssets: {
    type: Object,
    required: true,
  },
});
</script>
