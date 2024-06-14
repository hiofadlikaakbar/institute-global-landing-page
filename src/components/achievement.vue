<template>
  <div id="achievement" class="container mx-auto pb-32">
    <h1
      class="text-3xl italic text-slate-900 mb-10 font-extrabold uppercase text-center"
    >
      Prestasi
    </h1>
    <div
      class="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <div
        v-for="item in achievementDetail.achievements"
        :key="item.name"
        class="p-6 rounded-lg shadow-md bg-white"
      >
        <h2 class="text-xl font-bold mb-4 text-slate-700">{{ item.name }}</h2>
        <ul>
          <li
            v-for="achievement in item.achievements"
            :key="achievement"
            class="text-slate-600 mb-2"
          >
            <i class="fa-solid fa-medal text-xl mr-1 text-gray-500"></i>
            {{ achievement }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  achievementDetail: {
    type: Object,
    required: true,
  },
});
</script>
