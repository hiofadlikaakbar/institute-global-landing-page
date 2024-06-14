<template>
  <div class="relative">
    <!-- bagian hero dan judul halaman Teknik Informatika -->
    <div class="TI-img flex justify-center items-center relative px-3">
      <div class="z-30 text-center mt-5">
        <h1 class="text-2xl md:text-4xl xl:text-5xl mb-3 text-white font-bold">
          Prodi Teknik Informatika
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
            :src="TIimage"
            alt="TI person image"
            class="rounded-lg shadow-sm w-full shadow-black md:mb-0"
          />
        </div>
        <div class="lg:order-1 border-l-4 border-orange-500">
          <p class="text-lg leading-loose text-gray-500 font-medium mb-6 pl-3">
            Program Studi Teknik Informatika di Global Institute mempelajari
            pengembangan dan penggunaan teknologi informasi serta komputer.
            Mahasiswa belajar dasar-dasar teknologi informasi, pemrograman,
            database, jaringan komputer, keamanan informasi, pengembangan
            aplikasi, dan desain grafis.
          </p>
          <p class="text-lg leading-loose text-gray-500 font-medium pl-3">
            Tujuan utama Program Studi Teknik Informatika adalah mempersiapkan
            lulusan menjadi profesional di bidang teknologi informasi, seperti
            pengembang perangkat lunak, administrator jaringan, arsitek solusi
            teknologi, desainer UI/UX, atau konsultan TI.
          </p>
        </div>
      </div>
      <!-- Pilihan Konsentrasi prodi teknik informatika -->
      <h1 class="text-3xl text-slate-700 mb-16 font-bold italic text-center">
        Pilihan Konsentrasi
      </h1>
      <div
        class="grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-none mx-auto items-center gap-10"
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
          Pertanyaan Terkait Prodi Informatika
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

    <!-- bagian Footer -->
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
        <i class="fa-solid fa-arrow-left text-xl text-white"></i>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TIimage from "../assets/TI-detail.jpg";
import SE from "../assets/TI.png";
import IOT from "../assets/iot.png";
import CDM from "../assets/cdm.png";

// array of objek concentrations yang menampung semua data dan detail concentrations
const concentrations = ref([
  {
    image: SE,
    title: "Software Engineering",
    description:
      "Konsentrasi software engineering adalah disiplin ilmu yang mencakup pengembangan, perancangan, dan pembuatan perangkat lunak. Bidang ini meliputi seluruh tahapan siklus pengembangan perangkat lunak, dan lain-lain.",
  },
  {
    image: IOT,
    title: "Internet of Things (IOT)",
    description:
      "Konsentrasi Internet of Things (IoT) dan Networking adalah bidang teknologi yang mencakup penghubungan perangkat dalam lingkungan digital. IoT melibatkan berbagai perangkat yang terhubung ke internet untuk berkomunikasi dan bertukar data.",
  },
  {
    image: CDM,
    title: "Computerized Design (CDM)",
    description:
      "Konsentrasi Computerized and Multimedia adalah bidang teknologi yang mencakup pengembangan dan penggunaan teknologi komputer untuk menghasilkan konten yang interaktif dan berkualitas menggunakan Adobe Premiere, After Effect dll.",
  },
]);

// array of objek accordionItems yang menampung semua data dan detail accordionItems
const accordionItems = ref([
  {
    title: "Apa itu Program Studi Teknik Informatika?",
    content:
      "Program Studi Teknik Informatika adalah disiplin ilmu yang mempelajari penggunaan teknologi komputer untuk mengembangkan sistem dan aplikasi yang mengelola dan memproses informasi. Program ini mencakup berbagai aspek seperti pemrograman, algoritma, jaringan komputer, dan keamanan siber.",
    show: false,
  },
  {
    title: "Apa keuntungan mengambil konsentrasi di Teknik Informatika?",
    content:
      "Mengambil konsentrasi di Teknik Informatika memungkinkan mahasiswa untuk mengkhususkan diri dalam area tertentu yang sesuai dengan minat dan tujuan karir mereka. Misalnya, konsentrasi dalam Software Engineering akan mempersiapkan mahasiswa untuk menjadi pengembang perangkat lunak, sementara konsentrasi dalam Keamanan Siber akan mempersiapkan mereka untuk menjadi spesialis keamanan siber. Ini memberikan keunggulan kompetitif di pasar kerja dan peluang karir yang lebih spesifik.",
    show: false,
  },
  {
    title: "Apa Saja Konsentrasi dalam Program Studi Teknik Informatika?",
    content:
      "Program Studi Teknik Informatika menawarkan berbagai konsentrasi, antara lain: Software Engineering (SE), Internet of Things (IoT) dan Networking, Computerized and Multimedia (CDM).",
    show: false,
  },
  {
    title: "Apa Keunggulan dari Konsentrasi Software Engineering?",
    content:
      "Konsentrasi Software Engineering menawarkan keahlian dalam pengembangan, perancangan, dan pemeliharaan perangkat lunak. Lulusan akan memiliki kemampuan untuk mengelola seluruh siklus pengembangan perangkat lunak, dari analisis kebutuhan hingga implementasi dan pemeliharaan.",
    show: false,
  },
  {
    title: "Apa yang dipelajari dalam Program Studi Teknik Informatika?",
    content:
      "Program Studi Teknik Informatika mempelajari berbagai aspek teknologi komputer dan informasi, termasuk pemrograman, algoritma, sistem operasi, jaringan komputer, keamanan siber, kecerdasan buatan, dan pengembangan perangkat lunak. Mahasiswa juga belajar tentang manajemen basis data, rekayasa perangkat lunak, dan teknologi web.",
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
