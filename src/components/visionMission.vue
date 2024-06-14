<template>
  <!-- bagian visi misi web -->
  <div class="container mx-auto px-5 mb-32">
    <h1
      class="text-3xl italic text-slate-900 mb-16 font-extrabold uppercase text-center"
    >
      Visi dan Misi
    </h1>
    <!-- gambar dan deskripsi -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
      <img
        :src="visionMissionDetail.img"
        alt="visi-misi"
        class="mx-auto xl:h-[540px] xl:scale-[1.11]"
      />
      <div>
        <h1 class="text-slate-700 text-2xl md:text-3xl mb-2 font-semibold">
          Visi
        </h1>
        <p
          class="text-gray-500 mb-14 md:text-lg leading-loose md:leading-loose"
        >
          {{ visionMissionDetail.visi }}
        </p>
        <h1 class="text-slate-600 text-2xl md:text-3xl mb-2 font-semibold">
          Misi
        </h1>
        <!-- looping object visionMissionDetail dari properti yang didefinisikan di defineProps -->
        <ul
          class="text-gray-500 mb-5 md:text-lg leading-loose md:leading-loose list-disc pl-5"
        >
          <li v-for="(misi, index) in visionMissionDetail.misi" :key="index">
            {{ Object.values(misi)[0] }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// mengambil properti dari homepage.vue
const props = defineProps({
  visionMissionDetail: {
    type: Object,
    required: true,
  },
});
</script>
