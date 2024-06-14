<template>
  <!-- footer -->
  <div class="pt-16 pb-10 bg-gray-100">
    <div
      class="flex gap-10 flex-col lg:flex-row justify-between px-5 xl:px-20 items-start"
    >
      <!-- logo dan deskripsi -->
      <div class="lg:w-1/3 lg:-mt-2">
        <img :src="logoGlobal" alt="suxz" class="mb-7 xl:scale-110" />
        <p class="text-base font-medium md:text-lg text-slate-700">
          Untuk informasi lebih lanjut tentang program studi, pendaftaran, atau
          layanan kampus lainnya, silakan kunjungi situs resmi kami di
          <a
            href="https://global.ac.id/"
            target="_blank"
            class="italic underline"
            >global Institute of Technology & Business</a
          >
        </p>
      </div>
      <!-- 2 links pada footer untuk menuju ke halaman lain -->
      <div
        class="flex-col flex lg:w-1/2 justify-center gap-10 lg:gap-28 lg:flex-row"
      >
        <ul class="flex-col flex gap-5 mb-5 md:mb-0">
          <li class="text-xl text-slate-900 font-bold md:text-2xl">Links</li>
          <li>
            <a
              href="https://global.ac.id/international-programs/"
              target="_blank"
              class="text-base text-slate-700 font-medium md:text-lg hover:text-orange-500 ease-in-out duration-300"
            >
              International Programs
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/groups/1637939413141703"
              target="_blank"
              class="text-base text-slate-700 font-medium md:text-lg hover:text-orange-500 ease-in-out duration-300"
            >
              Alumni
            </a>
          </li>
          <li>
            <a
              href="https://global.ac.id/our-lecturers/"
              target="_blank"
              class="text-base text-slate-700 font-medium md:text-lg hover:text-orange-500 ease-in-out duration-300"
            >
              Dosen Pengajar
            </a>
          </li>
          <li>
            <a
              href="#prodi"
              class="text-base text-slate-700 font-medium md:text-lg hover:text-orange-500 ease-in-out duration-300"
            >
              Prodi
            </a>
          </li>
        </ul>
        <ul class="flex-col flex gap-5 mb-5 md:mb-0">
          <li class="text-xl text-slate-900 font-bold md:text-2xl">Links</li>
          <li>
            <a
              href="#organisation"
              class="text-base text-slate-700 font-medium md:text-lg hover:text-orange-500 ease-in-out duration-300"
            >
              Organisasi
            </a>
          </li>
          <li>
            <a
              href="#academic"
              class="text-base text-slate-700 font-medium md:text-lg hover:text-orange-500 ease-in-out duration-300"
            >
              Akademik
            </a>
          </li>
          <li>
            <a
              href="#achievement"
              class="text-base text-slate-700 font-medium md:text-lg hover:text-orange-500 ease-in-out duration-300"
            >
              Prestasi
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              class="text-base text-slate-700 font-medium md:text-lg hover:text-orange-500 ease-in-out duration-300"
            >
              Gallery
            </a>
          </li>
        </ul>
      </div>
      <!-- bagian kontak -->
      <div class="lg:w-1/3">
        <ul class="flex-col flex gap-5">
          <li class="text-xl text-slate-900 font-bold md:text-2xl">Contact</li>
          <li
            class="text-base flex gap-3 items-center md:text-lg text-slate-700 font-medium"
          >
            <span><i class="fa-solid fa-phone"></i></span>
            <p class="text-slate-700">(021) 552 2727</p>
          </li>
          <li
            class="text-base flex gap-3 items-center md:text-lg text-slate-700 font-medium"
          >
            <span><i class="fa-solid fa-envelope"></i></span>
            <p class="text-slate-700">kampus@global.ac.id</p>
          </li>
          <li
            class="text-base flex gap-3 items-center md:text-lg text-secondaryPurple text-slate-700 font-medium max-w-sm"
          >
            Jl. Aria Santika No. 43 Margasari, Karawaci - Kota Tangerang, Banten
            - Indonesia.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import logoGlobal from "../assets/logo-glbl.png";
</script>
