<template>
  <div class="relative">
    <!-- bagian hero dan judul halaman Kajian Film, Televisi dan Media -->
    <div class="KFTM-img flex justify-center items-center relative px-3">
      <div class="z-30 text-center mt-5">
        <h1 class="text-2xl md:text-4xl xl:text-5xl mb-3 text-white font-bold">
          Prodi Kajian Film, Televisi & Media
        </h1>
      </div>
    </div>
    <!-- bagian about prodi terdapat gambar beserta detail deskripsinya -->
    <div class="container mx-auto px-4 xl:px-8 mt-16">
      <h1 class="text-3xl text-slate-700 mb-16 font-bold italic text-center">
        Tentang Prodi
      </h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-36">
        <div class="lg:order-2">
          <img
            :src="KFTMimage"
            alt="KFTM image"
            class="rounded-lg shadow-sm w-full shadow-black md:mb-0"
          />
        </div>
        <div class="lg:order-1 border-l-4 border-orange-500">
          <p class="text-lg leading-loose text-gray-500 font-medium mb-6 pl-3">
            Program Studi Kajian Film, Televisi dan Media (KFTM) mempelajari
            berbagai aspek film, televisi, dan media secara teoritis dan
            praktis. Mahasiswa akan mempelajari sejarah, estetika, produksi, dan
            distribusi film dan televisi, serta berbagai aspek media lainnya
            seperti media sosial, media massa, dan media digital.
          </p>
          <p class="text-lg leading-loose text-gray-500 font-medium pl-3">
            Lulusan KFTM diharapkan memiliki pengetahuan dan keterampilan yang
            luas mengenai film, televisi, dan media, serta mampu bekerja secara
            profesional di industri kreatif, media, dan komunikasi. Selain itu,
            lulusan KFTM juga diharapkan memiliki kemampuan berpikir kritis dan
            analitis dalam menganalisis dan mengkaji film, televisi, dan media.
          </p>
        </div>
      </div>
      <!-- Pilihan Konsentrasi prodi sistem informasi -->
      <h1 class="text-3xl text-slate-900 mb-16 font-bold italic text-center">
        Pilihan Konsentrasi
      </h1>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 max-w-xl lg:max-w-none mx-auto items-center gap-10"
      >
        <!-- looping dari objek concentration -->
        <div
          v-for="(item, index) in concentrations"
          :key="index"
          :class="[
            'rounded-lg hover:-translate-y-4 duration-300 ease-in-out shadow-xl px-5 py-4',
            { 'border-t-4 border-orange-500': index === 0 },
            { 'border-t-4 border-blue-500': index === 1 },
            { 'border-t-4 border-purple-500': index === 2 },
          ]"
        >
          <!-- informasi tambahan mengenai konsentrasi data "item" diambil dari objek concentration-->
          <div class="py-6 px-2">
            <img
              :src="item.image"
              :alt="item.title"
              class="scale-125 mb-9 mx-auto"
            />
            <h2 class="text-2xl text-slate-700 font-semibold mb-3">
              {{ item.title }}
            </h2>
            <p class="text-gray-500 font-medium leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- bagian accordion  -->
      <div class="container mx-auto px-5 lg:px-8 mt-32 pb-24">
        <h1 class="text-3xl text-slate-700 mb-16 font-bold italic text-center">
          Pertanyaan Terkait Prodi Kajian Film, Televisi & Media
        </h1>
        <div
          class="grid grid-cols-1 max-w-4xl cursor-pointer mx-auto"
          id="accordions"
        >
          <!-- looping dari objek accordionItems -->
          <div
            v-for="(item, index) in accordionItems"
            :key="index"
            class="p-5 border"
            :class="{
              'border-orange-500': item.show,
              'border-orange-500/40': !item.show,
            }"
            v-auto-animate
            @click="toggleAccordion(index)"
          >
            <div
              class="flex items-center justify-between"
              :class="{
                'mb-5': item.show,
                'mb-0': !item.show,
              }"
            >
              <!-- judul accordion -->
              <div class="flex items-center gap-3">
                <span class="text-base md:text-lg text-slate-700">&bull;</span>
                <p class="text-slate-700 md:text-lg text-base font-medium">
                  {{ item.title }}
                </p>
              </div>
              <i
                class="fa-solid"
                :class="{
                  'fa-chevron-down text-orange-500': !item.show,
                  'fa-chevron-up text-orange-500/40': item.show,
                }"
              ></i>
            </div>
            <!-- konten accordion -->
            <p class="text-base md:text-lg text-gray-500" v-if="item.show">
              {{ item.content }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="border-t-[1px] border-secondGray/50 pt-5 pb-10">
      <div
        id="footer"
        class="flex-col container mx-auto px-5 lg:px-8 md:flex-row md:flex items-center justify-between pt-5"
      >
        <h3 class="text-base md:text-lg mb-5 md:mb-0 font-medium">
          <i class="fa-regular fa-copyright text-slate-700 text-xl"></i>
          Copyright 2023. Global Institute of Technology and Business
        </h3>
        <h3 class="text-base text-slate-700 md:text-lg font-medium">
          <i
            class="fa-brands fa-whatsapp text-slate-700 font-medium text-xl"
          ></i>
          (62)81315198308 |
          <i
            class="fa-regular fa-envelope text-xl font-medium text-slate-700"
          ></i>
          kampus@global.ac.id
        </h3>
      </div>
    </div>

    <!-- tombol back untuk kembali ke menu home -->
    <div class="fixed bottom-8 px-[0.6rem] py-1 right-8 rounded-full bg-black">
      <router-link to="/">
        <i class="fa-solid fa-arrow-left text-2xl text-white"></i>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import KFTMimage from "../assets/KFTM-detail.jpg";
import VMC from "../assets/3d-video.png";
import PRDC from "../assets/public-relations.png";

// array of objek concentrations yang menampung semua data dan detail concentrations
const concentrations = ref([
  {
    image: VMC,
    title: "Visual Media Communication (VMC)",
    description:
      "Konsentrasi Visual Media Communication (VMC) berfokus pada aspek visual dan estetika dalam film, televisi, dan media, mengajarkan teknik visual storytelling, desain grafis, animasi, dan multimedia.",
  },
  {
    image: PRDC,
    title: "Public Relation & Digital Communication (PRDC)",
    description:
      "Konsentrasi Public Relation & Digital Communication (PRDC) berfokus pada strategi komunikasi dan penggunaan media digital dalam membangun dan memelihara hubungan dengan publik. ",
  },
]);

// array of objek accordionItems yang menampung semua data dan detail accordionItems
const accordionItems = ref([
  {
    title: " Apa itu Program Studi Kajian Film, Televisi, dan Media?",
    content:
      "Program Studi Kajian Film, Televisi, dan Media adalah disiplin ilmu yang mempelajari berbagai aspek produksi, analisis, dan teori media visual, termasuk film dan televisi. Program ini mencakup sejarah, kritik, dan teknik pembuatan konten media.",
    show: false,
  },
  {
    title:
      "Apa saja konsentrasi dalam Program Studi Kajian Film, Televisi, dan Media?",
    content:
      "Program Studi Kajian Film, Televisi, dan Media menawarkan berbagai konsentrasi, antara lain: Visual Media Communication (VMC), Public Relation & Digital Communication (PRDC)",
    show: false,
  },
  {
    title:
      "Apa Keuntungan Mengambil Konsentrasi di Program Studi Kajian Film, Televisi, dan Media?",
    content:
      "Mengambil konsentrasi di Program Studi Kajian Film, Televisi, dan Media memungkinkan mahasiswa untuk mengkhususkan diri dalam area tertentu seperti produksi film, produksi televisi, kritik film, atau multimedia dan animasi. Ini memberikan keahlian spesifik yang dibutuhkan untuk sukses di bidang yang dipilih dan meningkatkan peluang karir.",
    show: false,
  },
  {
    title:
      "Bagaimana Program Studi Ini Mempersiapkan Mahasiswa untuk Karir di Industri Media?",
    content:
      "Program Studi ini mempersiapkan mahasiswa untuk karir di industri media melalui kombinasi teori dan praktik. Mahasiswa terlibat dalam proyek produksi nyata, magang di perusahaan media, dan belajar dari praktisi industri, yang membantu mereka mengembangkan keterampilan profesional dan jaringan industri.",
    show: false,
  },
  {
    title: "Apa Peran Teknik Produksi dalam Kajian Film dan Televisi?",
    content:
      "Teknik produksi adalah inti dari Kajian Film dan Televisi. Mahasiswa belajar berbagai keterampilan teknis seperti penyutradaraan, editing, sinematografi, dan efek visual untuk menghasilkan konten yang berkualitas tinggi dan menarik.",
    show: false,
  },
]);

// kode script untuk menjalankan fungsi buka tutup pada setiap accordion
const toggleAccordion = (index) => {
  accordionItems.value.forEach((item, i) => {
    item.show = i === index ? !item.show : false;
  });
};
</script>
