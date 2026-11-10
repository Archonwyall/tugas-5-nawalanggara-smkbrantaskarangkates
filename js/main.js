// JavaScript Portofolio Nawal Anggara Putra

// 1. Data Keahlian (Beranda)
const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

if (daftarSkill && jumlahSkill) {
  skills.forEach((skill) => {
    const item = document.createElement("li");
    item.textContent = `${skill.nama} (${skill.level})`;
    daftarSkill.appendChild(item);
  });
  jumlahSkill.textContent = `Ada ${skills.length} keahlian yang sedang saya kembangkan.`;
}

// 2. Data 6 Proyek (Halaman Proyek)
const proyek = [
  {
    judul: "Modul 1&2",
    kategori: "HTML",
    gambar: ["img/proyek-1.jpeg", "img/proyek-2.jpeg"],
    alt: "Tangkapan layar halaman profil Nawal",
    deskripsi: "Halaman web pertama saya, berisi perkenalan, foto, hobi, cita-cita, keahlian, dan kontak.",
  },
  {
    judul: "Modul 3",
    kategori: "HTML",
    gambar: "img/proyek-3.jpeg",
    alt: "Tangkapan layar form kontak",
    deskripsi: "Form dengan label dan validasi bawaan browser.",
  },
  {
    judul: "Modul 4",
    kategori: "git and git hub",
    gambar: "img/proyek-4.jpeg",
    alt: "Tangkapan layar modul 4",
    deskripsi: "Mengaplikasikan Git dan GitHub pada semua proyek pada minggu 04.",
  },
  {
    judul: "Modul 5",
    kategori: "vercel",
    gambar: "img/proyek-5.jpeg",
    alt: "Tangkapan layar modul 5",
    deskripsi: "Mendeploy proyek pada Vercel dan menambahkan file README.md.",
  },
  {
    judul: "Kalkulator Nilai Rapor",
    kategori: "JavaScript",
    gambar: "img/image.png",
    alt: "Tangkapan layar kalkulator",
    deskripsi: "Aplikasi penghitung nilai rata-rata dan predikat rapor.",
  },
  {
    judul: "Lima Soal Logika",
    kategori: "JavaScript",
    gambar: "img/kalkulator.jpeg",
    alt: "Tangkapan layar soal logika",
    deskripsi: "Latihan pemecahan masalah logika pemrograman JavaScript.",
  }
];
// 3. Tema gelap (semua halaman)
const tombolTema = document.querySelector("#tombol-tema");
tombolTema.addEventListener("click", () => {
  document.body.classList.toggle("gelap");
  if (document.body.classList.contains("gelap")) {
    tombolTema.textContent = "Mode Terang";
  } else {
    tombolTema.textContent = "Mode Gelap";
  }
});

const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");
const tombolFilter = document.querySelectorAll("[data-filter-proyek]");

if (daftarProyek && jumlahProyek) {
  function tampilkanProyek(daftar) {
    daftarProyek.replaceChildren();

    daftar.forEach((item) => {
      const kartu = document.createElement("article");
      kartu.className = "kartu";

      // Label Kategori (Muncul di atas judul)
      const label = document.createElement("span");
      label.className = "label";
      label.textContent = item.kategori;

      const judul = document.createElement("h3");
      judul.textContent = item.judul;

      const deskripsi = document.createElement("p");
      deskripsi.textContent = item.deskripsi;

      kartu.append(label, judul);

      // PENANGANAN GAMBAR: Memeriksa apakah gambar tunggal atau array 2 gambar
      if (Array.isArray(item.gambar)) {
        item.gambar.forEach((srcGambar) => {
          const img = document.createElement("img");
          img.src = srcGambar;
          img.alt = item.alt;
          img.width = 180;
          kartu.append(img);
        });
      } else {
        const img = document.createElement("img");
        img.src = item.gambar;
        img.alt = item.alt;
        img.width = 280;
        kartu.append(img);
      }

      kartu.append(deskripsi);
      daftarProyek.append(kartu);
    });

    // Menampilkan status jumlah proyek (misal: Menampilkan 2 dari 6 proyek)
    jumlahProyek.textContent = `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
  }

  // Fungsi Filter saat Tombol Diklik
  tombolFilter.forEach((tombol) => {
    tombol.addEventListener("click", () => {
      const kategori = tombol.dataset.filterProyek.toLowerCase();

      const hasilFilter = (kategori === "semua")
        ? proyek
        : proyek.filter((item) => item.kategori.toLowerCase() === kategori);

      tombolFilter.forEach((btn) => {
        const aktif = btn === tombol;
        btn.classList.toggle("aktif", aktif);
        btn.setAttribute("aria-pressed", String(aktif));
      });

      tampilkanProyek(hasilFilter);
    });
  });

  // Jalankan pertama kali
  tampilkanProyek(proyek);
}

// 3. Penghitung karakter pesan (halaman kontak)
const kontakPesan = document.querySelector("#pesan");
const kontakHitung = document.querySelector("#hitung-karakter");

if (kontakPesan && kontakHitung) {
  kontakHitung.textContent = `${kontakPesan.value.length}/300 karakter`;
  kontakPesan.addEventListener("input", () => {
    kontakHitung.textContent = `${kontakPesan.value.length}/300 karakter`;
  });
}