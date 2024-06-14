<template>
  <div class="relative">
    <!-- bagian hero dan judul halaman sistem informasi -->
    <div class="SI-img flex justify-center items-center relative px-3">
      <div class="z-30 text-center mt-5">
        <h1 class="text-2xl md:text-4xl xl:text-5xl mb-3 text-white font-bold">
          Prodi Sistem Informasi
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
            :src="SIimage"
            alt="SI image"
            class="rounded-lg shadow-sm w-full shadow-black md:mb-0"
          />
        </div>
        <div class="lg:order-1 border-l-4 border-orange-500">
          <p class="text-lg leading-loose text-gray-500 font-medium mb-6 pl-3">
            Program studi sistem informasi adalah program pendidikan tinggi yang
            berkaitan dengan pengembangan, penggunaan, dan manajemen sistem
            informasi dalam suatu organisasi. Program ini menggabungkan
            aspek-aspek teknologi informasi dan bisnis, sehingga lulusan dari
            program studi ini memiliki kemampuan untuk memahami dan menerapkan
            teknologi informasi dalam konteks bisnis.
          </p>
          <p class="text-lg leading-loose text-gray-500 font-medium pl-3">
            Setelah lulus, lulusan program studi sistem informasi dapat bekerja
            di berbagai industri, seperti teknologi informasi, konsultasi
            bisnis, perbankan, asuransi, perusahaan manufaktur, dan organisasi
            pemerintah. Mereka dapat bekerja dalam posisi seperti analis sistem,
            pengembang aplikasi, manajer proyek, analis bisnis, dan lain
            sebagainya.
          </p>
        </div>
      </div>
      <!-- Pilihan Konsentrasi prodi sistem informasi -->
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
          Pertanyaan Terkait Prodi Sistem Informasi
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
import SIimage from "../assets/SI-detail.jpg";
import AIS from "../assets/accounting.png";
import MIS from "../assets/information-management.png";
import LPIS from "../assets/checklist.png";

// array of objek concentrations yang menampung semua data dan detail concentrations
const concentrations = ref([
  {
    image: AIS,
    title: "Accounting Information System (AIS)",
    description:
      "Konsentrasi Accounting Information System (AIS) menggabungkan akuntansi dan teknologi informasi untuk mengelola sistem informasi akuntansi dalam organisasi, memfasilitasi proses akuntansi dan manajemen keuangan.",
  },
  {
    image: MIS,
    title: "Management Information System (MIS)",
    description:
      "Konsentrasi Management Information System (MIS) menggabungkan teknologi informasi dan manajemen untuk mengembangkan, menggunakan, dan mengelola sistem informasi dalam organisasi.",
  },
  {
    image: LPIS,
    title: "Logistic & Production Information System (LPIS)",
    description:
      "Konsentrasi Logistic & Production Information System (LPIS) adalah bidang yang berkaitan dengan pengembangan, penggunaan, dan manajemen sistem informasi dalam bidang logistik dan produksi dalam suatu organisasi.",
  },
]);

// array of objek accordionItems yang menampung semua data dan detail accordionItems
const accordionItems = ref([
  {
    title: "Apa itu Program Studi Sistem Informasi?",
    content:
      " Program Studi Sistem Informasi adalah disiplin ilmu yang mempelajari penggunaan teknologi informasi untuk mendukung operasional dan pengambilan keputusan dalam organisasi. Program ini menggabungkan ilmu komputer dengan manajemen dan bisnis untuk mengembangkan sistem informasi yang efektif dan efisien.",
    show: false,
  },
  {
    title: "Apa saja konsentrasi dalam Program Studi Sistem Informasi?",
    content:
      "Program Studi Sistem Informasi menawarkan berbagai konsentrasi, antara lain: Accounting Information System (AIS), Management Information System (MIS), Logistic & Production Information System (LPIS)",
    show: false,
  },
  {
    title: "Apa keunggulan dari konsentrasi Manajemen Sistem Informasi?",
    content:
      "Konsentrasi Manajemen Sistem Informasi menawarkan keahlian dalam mengelola dan mengintegrasikan sistem informasi dalam organisasi. Lulusan akan memiliki kemampuan untuk merancang, mengimplementasikan, dan mengelola sistem informasi yang mendukung operasional dan strategi bisnis.",
    show: false,
  },
  {
    title: "Apa Tujuan Utama Program Studi Sistem Informasi?",
    content:
      " Tujuan utama Program Studi Sistem Informasi adalah mempersiapkan lulusan menjadi profesional di bidang teknologi informasi, seperti analis sistem, manajer proyek TI, arsitek solusi teknologi, desainer UI/UX, atau konsultan TI. Program ini bertujuan untuk membekali mahasiswa dengan pengetahuan dan keterampilan yang diperlukan untuk mengelola dan mengembangkan sistem informasi yang efektif dan inovatif.",
    show: false,
  },
  {
    title: "Bagaimana Prospek Karir Lulusan Sistem Informasi?",
    content:
      "Lulusan Sistem Informasi memiliki prospek karir yang luas dan beragam, termasuk menjadi analis sistem, manajer proyek TI, analis bisnis, spesialis keamanan informasi, pengembang aplikasi, dan konsultan TI. Mereka dapat bekerja di berbagai sektor, seperti teknologi, keuangan, kesehatan, pendidikan, dan pemerintahan.",
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
