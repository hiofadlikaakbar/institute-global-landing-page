<template>
  <!-- bagian komponen seluruh web -->
  <Header></Header>
  <Hero></Hero>
  <section class="px-4">
    <!-- masing-masing object didefinisikan di komponennya agar bisa digunakan atau dipanggil di komponen itu sendiri -->
    <Stats :statsAssets="statsAssets"></Stats>
    <visionMission :visionMissionDetail="visionMissionDetail"></visionMission>
    <Prodi :prodiAssets="prodiAssets"></Prodi>
    <Organisation :organisationDetail="organisationDetail"></Organisation>
    <Academic :academicDetail="academicDetail"></Academic>
    <Achievement :achievementDetail="achievementDetail"></Achievement>
    <Gallery :galleryImages="galleryImages"></Gallery>
  </section>
  <Footer></Footer>
</template>

<script setup>
// componenent
import Header from "../components/header.vue";
import Hero from "../components/hero.vue";
import Stats from "../components/stats.vue";
import Prodi from "../components/prodi.vue";
import visionMission from "../components/visionMission.vue";
import Organisation from "../components/organisation.vue";
import Academic from "../components/academic.vue";
import Achievement from "../components/achievement.vue";
import Gallery from "../components/gallery.vue";
import Footer from "../components/footer.vue";

// assets
import cap from "../assets/cap-grad.png";
import jobs from "../assets/job-search.png";
import tie from "../assets/necktie.png";
import TI from "../assets/TI.jpg";
import SI from "../assets/SI.jpg";
import broadcasting from "../assets/broadcasting.jpg";
import visionmissionImg from "../assets/Group 3.png";
import academic from "../assets/academic-img.jpg";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpeg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpg";
import gallery9 from "../assets/gallery9.jpg";
import gallery10 from "../assets/gallery10.jpg";
import gallery11 from "../assets/gallery11.jpg";
import gallery12 from "../assets/gallery12.jpg";

// object statsAssets
const statsAssets = {
  detail: [
    {
      src: cap,
      title: "99%",
      info: "Mahasiswa lulus tepat waktu",
    },
    {
      src: jobs,
      title: "95%",
      info: "Lulusan Mendapat Pekerjaan ",
    },
    {
      src: tie,
      title: "97%",
      info: "Lulusan Bekerja Sesuai Bidang",
    },
  ],
};

// Object prodiAssets
const prodiAssets = {
  prodi: [
    {
      src: TI,
      subTitle: "Prodi TI",
      title: "Teknik Informatika",
      desc: "Program Studi Teknik Informatika berfokus pada ilmu komputer dan teknologi informasi. Mahasiswa akan mempelajari pemrograman, struktur data, algoritma, jaringan komputer, basis data, sistem operasi, dan keamanan informasi. Kurikulum juga mencakup rekayasa perangkat lunak, kecerdasan buatan, pengembangan web, dan aplikasi mobile.",
      link: "/informatika",
    },
    {
      src: SI,
      subTitle: "Prodi SI",
      title: "Sistem Informasi",
      desc: "Program Studi Sistem Informasi berfokus pada penerapan teknologi informasi untuk mendukung bisnis dan manajemen. Mahasiswa mempelajari analisis dan perancangan sistem, basis data, pemrograman, jaringan, keamanan, dan manajemen proyek. Lulusan dapat berkarir sebagai system analyst, IT consultant, database administrator, project manager, dan business analyst.",
      link: "/sistem_informasi",
    },
    {
      src: broadcasting,
      subTitle: "Prodi KFTM",
      title: "Kajian Film, TV dan Media",
      desc: "Program Studi Kajian Film, TV, dan Media berfokus pada produksi dan penyiaran media elektronik, seperti film, televisi, dan platform digital. Mahasiswa mempelajari teknik produksi audio dan video, jurnalistik penyiaran, penulisan naskah, editing, dan manajemen media. Kurikulum juga mencakup aspek teknis seperti operasi kamera, pencahayaan, dan sound design. ",
      link: "/kftm",
    },
  ],
  button: "Baca Selengkapnya",
};

// Object visionMissionDetail
const visionMissionDetail = {
  img: visionmissionImg,
  visi: "Menjadi Perguruan Tinggi di tahun 2032 yang memiliki kompetensi, kualitas unggul dan mampu bersaing di Tingkat Nasional dan Internasional serta memiliki akhlak yang mulia.",
  misi: [
    {
      satu: "Menjalankan Tridharma Perguruan Tinggi.",
    },
    {
      dua: "Meningkatkan kompetensi sumber daya manusia dalam menghadapi perkembangan ilmu pengetahuan dan teknologi.",
    },
    {
      tiga: "Menghasilkan lulusan yang berkualitas nasional dan internasional, produktif, berjiwa wirausaha untuk mencetak sarjana mandiri, professional dan memiliki akhlak mulia.",
    },
    {
      empat:
        "Mengembangkan sinergi dan kerjasama dengan perguruan tinggi dan perusahaan baik dalam ataupun luar negeri.",
    },
    {
      lima: "Menyelenggarakan perguruan tinggi dengan nirlaba, akuntabilitas, transparansi, akses keadilan dengan sistem penjamin mutu dan memiliki sistem online berbasis teknologi.",
    },
  ],
};

// Object organisationDetail
const organisationDetail = {
  bagan: [
    {
      category: "Rektorat",
      members: [
        { title: "Rektor", name: "Dr. H. Dedi Royadi, M.Si." },
        {
          title: "Wakil Rektor Bidang Akademik",
          name: "Muchamad Iqbal, S.E., M.Kom.",
        },
        {
          title: "Wakil Rektor Bidang Non Akademik",
          name: "M. Iqbal Hanafri, S.Pi., M.Kom.",
        },
      ],
    },
    {
      category: "Dekan",
      members: [
        { title: "Dekan FTIK", name: "Rahmat Tullah, M.Kom." },
        { title: "Dekan FEB & Ka. Prodi BD", name: "Ramaddan Julianti, M.T." },
      ],
    },
    {
      category: "Prodi",
      members: [
        { title: "Ka. Prodi Sistem Informasi", name: "Ahmad Sidik, M.Kom." },
        {
          title: "Ka. Prodi Teknik Informatika",
          name: "Dr (Cand) Fredy Susanto, M.Kom.",
        },
        {
          title: "Ka. Prodi Kajian Film & Media",
          name: "M. Luthfi Prabowo, M.Ikom.",
        },
      ],
    },
    {
      category: "Sekretaris Fakultas",
      members: [
        {
          title: "Sekretaris Fakultas (FTIK)",
          name: "Nunung Nurmaesah, M.Kom.",
        },
        {
          title: "Sekretaris Fakultas (FEB)",
          name: "Refi Nabilah Royadi, S.E., S.Kom., M.M.",
        },
      ],
    },
    {
      category: "Komisi Disiplin & Biro Hukum",
      members: [
        {
          title: "Komisi Disiplin & Biro Hukum",
          name: "Noor Rochim, S.Sos.",
          name2: "Dr. (cand) M. Ramaddan Julianti, M.T.",
          name3: "Theodora Septiana, S.Kom., M.M.",
        },
      ],
    },
    {
      category: "Lembaga Penelitian & Pengabdian Masyarakat",
      members: [
        {
          title: "LPPM",
          name: "Bucci Ryando, M.Kom.",
          name2: "Alfiah Khoirunisa, S.Kom, M.T.I",
        },
      ],
    },
    {
      category: "Unit Pelaksana Teknis",
      members: [
        {
          title: "UPT Adm Akademik & Mahasiswa",
          name: "Nina Septiana, S.Kom, Supardi, S.Kom, Marchia, S.Kom",
        },
        { title: "UPT HRD", name: "Noor Rochim, S.Sos" },
        {
          title: "UPT Pusat Karir & Kewirausahaan",
          name: "Vera Lupi Nurpratiwi, S.Kom",
        },
        { title: "UPT E-learning", name: "Supardi, S.Kom" },
        {
          title: "UPT PDPT / Pusat Data",
          name: "Triono, M.Kom, Dimas Fahmi, S.Kom",
        },
        { title: "UPT Perpustakaan", name: "Renjana Dian, S.IP" },
        { title: "UPT System Development", name: "Bambang Tri, S.Kom" },
        {
          title: "UPT Infrastruktur & IT Support ",
          name: "Jalaludin, S.Kom, Bambang Tri, S.Kom",
        },
        {
          title: "UPT Laboratorium",
          name: "Haeri Setiawan, S.Kom, Dimas Fahmi, S.Kom, Jalaluddin, S.Kom, Bambang Tri, S.Kom",
        },
        { title: "UPT Accounting", name: "Chaerunnisa, S.Kom" },
        {
          title: "UPT Humas, Publikasi, Multimedia & Customer Service",
          name: "Eko Rendi, S.Kom, Novia, S.Kom",
        },
        { title: "UPT Kemahasiswaan", name: "Diki Niko, S.Kom" },
        { title: "UPT Kasir", name: "Nita, S.E, Evita Ayu, S.Kom" },
        {
          title: "UPT General Affairs",
          name: "Soleh, Nani, Jajuli, Wahyu (Security), Rouf (Security)",
        },
      ],
    },
    {
      category: "Badan Penjaminan Mutu",
      members: [
        { title: "Badan Penjaminan Mutu", name: "Sutarman, S.S., M.M." },
        {
          title: "Badan Perencanaan & Pengembangan",
          name: "M. Iqbal Hanafri, S.Pi., M.Kom.",
        },
        { title: "Sekretariat", name: "Irma Listiana, S.Kom." },
      ],
    },
    {
      category: "Biro",
      members: [
        { title: "Ka. Biro BAAK", name: "Nina Septiana, S.Kom." },
        {
          title: "Ka. Biro Teknologi & Sistem Informasi",
          name: "Nova Teguh Sunggono, M.Kom.",
        },
        { title: "Ka. Biro Keuangan", name: "Ratna Suminar" },
        {
          title: "Ka. Biro SDM, GA & Sarana Prasarana",
          name: "Noor Rochim, S.Sos.",
          name2: "Agus Budiman, S.Kom",
        },
        {
          title: "Ka. Biro Humas & Kerjasama",
          name: "Theodora Septiana, S.Kom., M.M",
        },
        {
          title: "Ka. Biro Kemahasiswaan & Marketing",
          name: "Arni R. Mariana, M.Kom.",
        },
      ],
    },
  ],
};

// Object academicDetail
const academicDetail = {
  img: academic,
  kurikulum:
    "Kurikulum akademik kami dirancang untuk memberikan pendidikan yang komprehensif dan relevan. Kami menawarkan berbagai program studi yang mencakup disiplin ilmu yang beragam, memungkinkan mahasiswa untuk mengeksplorasi minat mereka. Setiap program disusun sesuai perkembangan terbaru di bidangnya, sehingga lulusan kami siap menghadapi tantangan profesional.",
  panduan:
    "Panduan akademik ini bertujuan untuk membantu mahasiswa dalam memahami berbagai aspek penting dari perjalanan pendidikan mereka di kampus ini. Dalam panduan ini, Anda akan menemukan informasi mengenai:",
  panduanList: [
    {
      satu: "Proses pendaftaran dan administrasi akademik",
    },
    {
      dua: "Peraturan dan kebijakan akademik",
    },
    {
      tiga: "Jadwal kuliah dan kalender akademik",
    },
    {
      empat: "Sumber daya dan layanan pendukung mahasiswa",
    },
    {
      lima: "Prosedur evaluasi dan penilaian akademik",
    },
  ],
};

// Object achievementDetail
const achievementDetail = {
  achievements: [
    {
      name: "Yuhana Widi Rahayu",
      achievements: [
        "Diploma, World Orienteering Day",
        "Peserta Kebut Gunung Nasional Gede - Pangrango",
      ],
    },
    {
      name: "Ahmad Zaenuri",
      achievements: [
        "Diploma, World Orienteering Day",
        "Peserta Kebut Gunung Nasional Gede - Pangrango",
      ],
    },
    {
      name: "Rizky",
      achievements: [
        "Juara 1 Lomba Photography, Tingkat Provinsi Banten (Dinas Pendidikan Provinsi)",
      ],
    },
    {
      name: "Astrid & Rizky",
      achievements: [
        "Juara 2 Lomba Film Dokumenter Kategori Informatif, Tingkat Provinsi Banten (Dinas Pendidikan Provinsi)",
      ],
    },
    {
      name: "Yayan & Andrian",
      achievements: [
        "Juara 2 Lomba Film Dokumenter Kategori Sinopsis, Tingkat Provinsi Banten (Dinas Pendidikan Provinsi)",
      ],
    },
    {
      name: "Viktor Mahardika",
      achievements: ["Juara 2 Web Design Tingkat Kota Tangerang"],
    },
  ],
};

// Object galleryImages
const galleryImages = {
  img1: gallery1,
  alt1: "gallery image 1",
  img2: gallery2,
  alt2: "gallery image 2",
  img3: gallery3,
  alt3: "gallery image 3",
  img4: gallery4,
  alt4: "gallery image 4",
  img5: gallery5,
  alt5: "gallery image 5",
  img6: gallery6,
  alt6: "gallery image 6",
  img7: gallery7,
  alt7: "gallery image 7",
  img8: gallery8,
  alt8: "gallery image 8",
  img9: gallery9,
  alt9: "gallery image 9",
  img10: gallery10,
  alt10: "gallery image 10",
  img11: gallery11,
  alt11: "gallery image 11",
  img12: gallery12,
  alt12: "gallery image 12",
};
</script>
