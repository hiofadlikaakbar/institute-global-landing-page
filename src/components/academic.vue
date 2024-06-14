<template>
  <!-- judul akademik -->
  <div id="academic" class="container mx-auto px-5 mb-32">
    <h1
      class="text-3xl italic text-slate-900 mb-16 font-extrabold uppercase text-center"
    >
      Akademik
    </h1>
    <!-- gambar dan deskripsi -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
      <img
        :src="academicDetail.img"
        alt="visi-misi"
        class="mx-auto rounded-lg"
      />
      <div>
        <h1 class="text-slate-700 text-2xl md:text-3xl mb-2 font-semibold">
          Kurikulum
        </h1>
        <p
          class="text-slate-600 mb-8 md:text-lg leading-loose md:leading-loose"
        >
          {{ academicDetail.kurikulum }}
        </p>
        <h1 class="text-slate-700 text-2xl md:text-3xl mb-2 font-semibold">
          Panduan Akademik
        </h1>
        <!-- looping object academicDetail dari properti yang didefinisikan di defineProps -->
        <ul
          class="text-slate-600 mb-5 md:text-lg leading-loose md:leading-loose list-disc pl-5"
        >
          <li
            v-for="(panduanList, index) in academicDetail.panduanList"
            :key="index"
          >
            {{ Object.values(panduanList)[0] }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// properti bertipe object yang diambil dari HomePage.vue
const props = defineProps({
  academicDetail: {
    type: Object,
    required: true,
  },
});
</script>
