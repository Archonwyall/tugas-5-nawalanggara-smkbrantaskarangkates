const inputTugas = document.querySelector("#nilaiTugas");
const inputUts = document.querySelector("#nilaiUts");
const inputUas = document.querySelector("#nilaiUas");
const tombol = document.querySelector("#hitungButton");
const hasil = document.querySelector("#hasil");

tombol.addEventListener("click", () => {
  const tugas = Number(inputTugas.value);
  const uts = Number(inputUts.value);
  const uas = Number(inputUas.value);

  const rata = hitungRataRata(tugas, uts, uas);
  hasil.textContent = `Rata-rata ${rata}, predikat ${predikat(rata)}`;
});