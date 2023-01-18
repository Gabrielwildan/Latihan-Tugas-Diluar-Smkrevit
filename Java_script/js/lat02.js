// document.querySelector("#paragraf").innerHTML = "Saya belajar Javascript";

// document.querySelector("#content").innerHTML = "<h1> Ganti isi </h1>";

let tanggal = 19;
let bulan = 1;
let hasil = "salah";
if (tanggal > 0 && tanggal < 32 && bulan > 0 && bulan < 13) {
    hasil = "zodiak belum dibuat";
    if (bulan == 1) {
        hasil = "capricorn";
        if (tanggal > 20) {
            hasil = "aquarius";
        }

    }
    if (bulan == 2) {
        hasil = "aquarius";
        if (tanggal > 20) {
            hasil = "pisces";
        }
    }
    if (bulan == 3) {
        hasil = "pisces";
        if (tanggal > 20) {
            hasil = "aries";
        }
    }
    if (bulan == 4) {
        hasil = "aries";
        if (tanggal > 20) {
            hasil = "taurus";
        }
    }
    if (bulan == 5) {
        hasil = "taurus";
        if (tanggal > 20) {
            hasil = "gemini";
        }
    }
}
// console.log(hasil);
document.querySelector("#content").innerHTML = "<h1>" + hasil + "<h1>";