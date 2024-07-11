<template>
  <div id="organisation" class="container mx-auto pb-36">
    <!-- judul -->
    <h1
      class="text-3xl italic max-w-xl mx-auto text-slate-900 mb-10 font-extrabold uppercase text-center"
    >
      struktur organisasi fakultas teknologi dan informasi
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
      <div
        v-for="(lecturer, index) in organisationDetail.lecturers"
        :key="index"
        class="rounded-md py-4 px-5 border-2 border-slate-300"
      >
        <div class="grid items-start gap-5">
          <div>
            <h1 class="text-slate-600 mb-1 font-bold text-2xl">
              {{ lecturer.name }}
            </h1>
            <h3 class="text-slate-600 text-lg mb-3 font-medium">
              {{ lecturer.position }}
            </h3>
            <div
              class="px-6 py-2 inline-block bg-slate-900 text-white rounded-md"
            >
              Aktif
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- properti bertipe object yang diambil dari HomePage.vue -->
<script setup>
const props = defineProps({
  organisationDetail: {
    type: Object,
    required: true,
  },
});
</script>
