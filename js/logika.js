// Soal 1: ganjil atau genap
function ganjilGenap(angka) {
	if (angka % 2 === 0) {
		return "genap";
	}
	return "ganjil";
}
console.log("Soal 1: ganjil atau genap");
console.log(`ganjilGenap(7) = ${ganjilGenap(7)}`); // ganjil
console.log(`ganjilGenap(10) = ${ganjilGenap(10)}`); // genap
console.log(`ganjilGenap(29) = ${ganjilGenap(29)}`); // ganjil

// Soal 2: celsius ke fahrenheit
console.log("Soal 2: celsius ke fahrenheit");
function celsiusKeFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}
console.log(`celsiusKeFahrenheit(0) → ${celsiusKeFahrenheit(0)}`);
console.log(`celsiusKeFahrenheit(100) → ${celsiusKeFahrenheit(100)}`);
console.log(`celsiusKeFahrenheit(-40) → ${celsiusKeFahrenheit(-40)}`);

// Soal 3: nilai terbesar
console.log("Soal 3: nilaiTerbesar(a, b, c)");
function nilaiTerbesar(a, b, c) {
	return Math.max(a, b, c);
}
console.log(`nilaiTerbesar(5, 9, 2) → ${nilaiTerbesar(5, 9, 2)}`);
console.log(`nilaiTerbesar(80, 75, 80) → ${nilaiTerbesar(80, 75, 80)}`);
console.log(`nilaiTerbesar(-3, -7, -1) → ${nilaiTerbesar(-3, -7, -1)}`);

// Soal 4: tahun kabisat
console.log("Soal 4: tahun kabisat");
function tahunKabisat(tahun) {
	if (tahun % 400 === 0) {
        return "true";
    }
	if (tahun % 100 === 0) {
		return "false";
	}
	if (tahun % 4 === 0) {
		return "true";
	}
	return "false";
}
console.log(`tahunKabisat(2024) = ${tahunKabisat(2024)}`); //true
console.log(`tahunKabisat(2026) = ${tahunKabisat(2026)}`); //false
console.log(`tahunKabisat(1900) = ${tahunKabisat(1900)}`); //false
console.log(`tahunKabisat(2000) = ${tahunKabisat(2000)}`); //true

// Soal 5: harga setelah diskon
console.log("Soal 5: harga setelah diskon");
function hargaSetelahDiskon(total) {
	if (total >= 200000) {
		return total * 0.8;
	}
	if (total >= 100000) {
		return total * 0.9;
	}
	return total;
}
console.log(`hargaSetelahDiskon(250000) → ${hargaSetelahDiskon(250000)}`);
console.log(`hargaSetelahDiskon(100000) → ${hargaSetelahDiskon(100000)}`);
console.log(`hargaSetelahDiskon(75000) → ${hargaSetelahDiskon(75000)}`);