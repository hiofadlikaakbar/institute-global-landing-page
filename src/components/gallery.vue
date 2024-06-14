<template>
  <div id="gallery" class="container mx-auto pb-32">
    <h1
      class="text-3xl italic text-slate-700 mb-10 font-extrabold uppercase text-center"
    >
      Galleries
    </h1>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl items-center"
    >
      <div v-for="index in 12" :key="index">
        <img
          :src="galleryImages[`img${index}`]"
          :alt="galleryImages[`alt${index}`]"
          class="h-[200px] w-[500px] rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  galleryImages: {
    type: Object,
    required: true,
  },
});
</script>
