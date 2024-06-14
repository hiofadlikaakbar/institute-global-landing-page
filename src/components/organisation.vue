<template>
  <div id="organisation" class="container mx-auto pb-36">
    <!-- judul -->
    <h1
      class="text-3xl italic text-slate-900 mb-10 font-extrabold uppercase text-center"
    >
      struktur organisasi
    </h1>

    <div
      class="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-2 xl:grid-cols-3 items-start gap-8"
    >
      <!-- Bagian Rektorat -->
      <div
        v-if="rektorat"
        class="bg-white px-6 py-5 h-[220px] shadow-md rounded-md"
      >
        <h1 class="text-2xl text-slate-700 font-semibold mb-2">
          {{ rektorat.category }}
        </h1>
        <!-- Looping data dari properti organisationDetail yang diambil dari defineProps -->
        <div v-for="(member, index) in rektorat.members" :key="index">
          <p class="text-base mb-2 text-gray-500">
            <i class="fa-solid text-gray-500 mr-2 fa-user"></i>
            <strong>{{ member.title }}</strong
            >: {{ member.name }}
          </p>
        </div>
      </div>

      <!-- Bagian Prodi -->
      <div
        v-if="prodi"
        class="bg-white px-4 py-5 h-[220px] shadow-md rounded-md"
      >
        <h1 class="text-2xl text-slate-700 font-semibold mb-2">
          {{ prodi.category }}
        </h1>
        <!-- Looping data dari properti organisationDetail yang diambil dari defineProps -->
        <div v-for="(member, index) in prodi.members" :key="index">
          <p class="text-base mb-1 text-gray-500">
            <i class="fa-solid text-gray-500 mr-2 fa-user"></i>
            <strong>{{ member.title }}</strong
            >: {{ member.name }}
          </p>
        </div>
      </div>

      <!-- Bagian Komisi -->
      <div
        v-if="komisi"
        class="bg-white px-4 py-5 h-[220px] shadow-md rounded-md"
      >
        <h1 class="text-2xl text-slate-700 font-semibold mb-2">
          {{ komisi.category }}
        </h1>

        <!-- Looping data dari properti organisationDetail yang diambil dari defineProps -->
        <div v-for="(member, index) in komisi.members" :key="index">
          <p class="text-base mb-1 text-gray-500">
            <i class="fa-solid text-gray-500 mr-2 fa-user"></i>
            <strong>{{ member.title }}</strong
            >: {{ member.name }}
          </p>
          <p v-if="member.name2" class="text-base mb-1 text-gray-500">
            <i class="fa-solid text-gray-500 mr-2 fa-user"></i>
            <strong>{{ member.title }}</strong
            >: {{ member.name2 }}
          </p>
          <p v-if="member.name3" class="text-base text-gray-500">
            <i class="fa-solid text-gray-500 mr-2 fa-user"></i>
            <strong>{{ member.title }}</strong
            >: {{ member.name3 }}
          </p>
        </div>
      </div>

      <!-- Bagian bpm -->
      <div v-if="bpm" class="bg-white px-4 py-5 h-[220px] shadow-md rounded-md">
        <h1 class="text-2xl text-slate-700 font-semibold mb-2">
          {{ bpm.category }}
        </h1>
        <!-- Looping data dari properti organisationDetail yang diambil dari defineProps -->
        <div v-for="(member, index) in bpm.members" :key="index">
          <p class="text-base mb-1 text-gray-500">
            <i class="fa-solid text-gray-500 mr-2 fa-user"></i>
            <strong>{{ member.title }}</strong
            >: {{ member.name }}
          </p>
        </div>
      </div>

      <!-- Bagian sekretaris -->
      <div
        v-if="sekretaris"
        class="bg-white px-4 py-5 h-[220px] shadow-md rounded-md"
      >
        <h1 class="text-2xl text-slate-700 font-semibold mb-2">
          {{ sekretaris.category }}
        </h1>
        <!-- Looping data dari properti organisationDetail yang diambil dari defineProps -->
        <div v-for="(member, index) in sekretaris.members" :key="index">
          <p class="text-base mb-1 text-gray-500">
            <i class="fa-solid text-gray-500 mr-2 fa-user"></i>
            <strong>{{ member.title }}</strong
            >: {{ member.name }}
          </p>
        </div>
      </div>

      <!-- Bagian lppm -->
      <div
        v-if="lppm"
        class="bg-white px-4 py-5 h-[220px] shadow-md rounded-md"
      >
        <h1 class="text-2xl text-slate-700 font-semibold mb-2">
          {{ lppm.category }}
        </h1>
        <!-- Looping data dari properti organisationDetail yang diambil dari defineProps -->
        <div v-for="(member, index) in lppm.members" :key="index">
          <p class="text-base mb-1 text-gray-500">
            <i class="fa-solid text-gray-500 mr-2 fa-user"></i>
            <strong>{{ member.title }}</strong
            >: {{ member.name }}
          </p>
          <p v-if="member.name2" class="text-base text-gray-500">
            <i class="fa-solid text-gray-500 mr-2 fa-user"></i>
            <strong>{{ member.title }}</strong
            >: {{ member.name2 }}
          </p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 items-start mt-8 max-w-2xl mx-auto">
      <div v-if="upt" class="bg-white px-4 py-5 shadow-md rounded-md">
        <h1 class="text-2xl text-slate-700 font-semibold mb-2">
          {{ upt.category }}
        </h1>
        <div v-for="(member, index) in upt.members" :key="index">
          <p class="text-base mb-1 text-gray-500">
            <i class="fa-solid text-gray-500 mr-2 fa-user"></i>
            <strong>{{ member.title }}</strong
            >: {{ member.name }}
          </p>
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

// mengambil data dari object organisationDetail kategori Rektorat
const rektorat = props.organisationDetail.bagan.find(
  (category) => category.category === "Rektorat"
);
// mengambil data dari object organisationDetail kategori Prodi
const prodi = props.organisationDetail.bagan.find(
  (category) => category.category === "Prodi"
);
// mengambil data dari object organisationDetail kategori Komisi Disiplin & Biro Hukum
const komisi = props.organisationDetail.bagan.find(
  (category) => category.category === "Komisi Disiplin & Biro Hukum"
);
// mengambil data dari object organisationDetail kategori Badan Penjaminan Mutu
const bpm = props.organisationDetail.bagan.find(
  (category) => category.category === "Badan Penjaminan Mutu"
);
// mengambil data dari object organisationDetail kategori Sekretaris Fakultas
const sekretaris = props.organisationDetail.bagan.find(
  (category) => category.category === "Sekretaris Fakultas"
);

// mengambil data dari object organisationDetail kategori Lembaga Penelitian & Pengabdian Masyarakat
const lppm = props.organisationDetail.bagan.find(
  (category) =>
    category.category === "Lembaga Penelitian & Pengabdian Masyarakat"
);

// mengambil data dari object organisationDetail kategori Sekretaris Unit Pelaksana Teknis
const upt = props.organisationDetail.bagan.find(
  (category) => category.category === "Unit Pelaksana Teknis"
);
</script>
