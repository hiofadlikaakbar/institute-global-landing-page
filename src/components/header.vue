<template>
  <!-- bagian header navbar -->
  <header>
    <nav
      :class="{
        'bg-slate-900/75 ': isScrolled,
        'bg-transparent': !isScrolled,
      }"
      class="p-5 xl:px-7 w-full fixed z-50"
      id="navbar"
      style="transition: background-color 0.3s ease-in-out"
    >
      <div class="flex container justify-between mx-auto items-center">
        <div class="flex items-center gap-20 lg:gap-10 xl:gap-20">
          <div class="flex gap-3 items-center">
            <!-- logo navbar -->
            <img :src="logo" alt="logo" class="scale-110" />
            <h1 class="text-xl italic text-white font-semibold">
              GLOBAL INSTITUTE
            </h1>
          </div>
        </div>
        <!-- list navbar untuk ukuran layar laptop -->
        <ul class="hidden lg:flex gap-10 xl:gap-12 lg:mt-[2px]">
          <li>
            <a
              href="#prodi"
              class="text-white duration-300 ease-in-out hover:text-orange-500"
              >Prodi</a
            >
          </li>
          <li>
            <a
              href="#organisation"
              class="text-white duration-300 ease-in-out hover:text-orange-500"
              >Organisasi</a
            >
          </li>

          <li>
            <a
              href="#academic"
              class="text-white duration-300 ease-in-out hover:text-orange-500"
              >Akademik</a
            >
          </li>
          <li>
            <a
              href="#achievement"
              class="text-white duration-300 ease-in-out hover:text-orange-500"
              >Prestasi</a
            >
          </li>
          <li>
            <a
              href="#gallery"
              class="text-white duration-300 ease-in-out hover:text-orange-500"
              >Gallery</a
            >
          </li>
        </ul>

        <!-- list navbar untuk ukuran layar hp -->
        <ul
          :class="showMenu ? 'right-0 grid' : 'right-[-100%] grid opacity-0'"
          class="h-screen w-[60%] md:w-1/2 fixed duration-500 lg:hidden ease-in-out content-center space-y-8 md:space-y-12 top-0 right-0 pl-[1.19rem] xs:pl-6 bg-gradient-to-b from-gray-100 to-white md:pl-12 shadow-xl"
        >
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.href" class="text-colorNav font-medium md:text-lg">{{
              link.label
            }}</a>
          </li>
        </ul>
        <!-- bagian tombol burger/menu untuk buka tutup navbar -->
        <div
          :class="showMenu ? 'left-0 opacity-100' : 'left-[-100%] opacity-0'"
          class="bg-black/60 lg:hidden md:w-1/2 left-0 z-50 duration-500 ease-in-out fixed top-0 w-[40%] h-screen"
        ></div>
        <button
          @click="toggleNav"
          class="block lg:hidden z-50 focus:outline-none"
        >
          <img :src="burgerMenu" alt="burger" ref="burger" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import logo from "../assets/logo-glbl.png";
import burgerMenu from "../assets/hamburger-menu-svgrepo-com.svg";
import closeMenu from "../assets/close-svgrepo-com.svg";
import { ref, onMounted, onUnmounted } from "vue";

// kode javascript untuk membuat navbar berfungsi
const burger = ref(null);
const showMenu = ref(false);
const toggleNav = () => {
  showMenu.value = !showMenu.value;
  burger.value.src = showMenu.value ? closeMenu : burgerMenu;
};

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 45;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const links = [
  { label: "Prodi", href: "#prodi" },
  { label: "Organisasi", href: "#organisation" },
  { label: "Akademik", href: "#academic" },
  { label: "Prestasi", href: "#achievement" },
  { label: "Gallery", href: "#gallery" },
];
</script>
