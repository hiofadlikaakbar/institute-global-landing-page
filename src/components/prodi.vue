<template>
  <!-- bagian prodi -->
  <div id="prodi" class="container mx-auto pb-16 px-5">
    <h1
      class="text-3xl italic text-slate-900 mb-16 font-extrabold uppercase text-center"
    >
      prodi
    </h1>
    <!-- looping object prodiassets dari properti yang didefinisikan di defineProps -->
    <div
      v-for="(item, index) in prodiAssets.prodi"
      :key="index"
      class="grid grid-cols-1 md:grid-cols-2 items-start px-2 gap-16 mb-36"
    >
      <div :class="{ 'order-1 lg:order-2': index % 2 !== 0 }">
        <img :src="item.src" :alt="'prodi ' + item.title" class="rounded-lg" />
      </div>
      <div :class="{ 'order-2 lg:order-1': index % 2 !== 0 }">
        <h5
          class="text-blue-500 md:text-lg xl:text-xl mb-3 uppercase font-bold"
        >
          {{ item.subTitle }}
        </h5>
        <h1
          class="text-slate-700 text-2xl md:text-3xl xl:text-4xl mb-2 font-semibold"
        >
          {{ item.title }}
        </h1>
        <p class="text-gray-600 mb-5 md:text-lg md:leading-[2.3]">
          {{ item.desc }}
        </p>
        <router-link
          :to="item.link"
          class="bg-blue-500 rounded-lg duration-300 hover:text-orange-500 hover:bg-white text-white px-5 py-3 inline-block"
          >{{ prodiAssets.button }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  prodiAssets: {
    type: Object,
    required: true,
  },
});
</script>
