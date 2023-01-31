let bil = [1, 3, 5, 7, 9];

function kali(num) {
    return num * 2;
}
console.log(kali(2));


let hasil = bil.map(num => num + 2);
console.log(hasil);


hasil.forEach(e => {
    console.log(e);
})

document.querySelector("#tampil").innerHTML = hasil;

// let out = '<tbody>';

// hasil.forEach(element => {
//     out += `<tr><td>${element}</td></tr>`;
// });

// out += '</tbody>';

// document.querySelector("#tabel").innerHTML = out;

let siswa = [
    { nama: "Yantod", sekolah: "SMKN 2 BUDURAN", kelas: "11 RPL" },
    { nama: "Alpat GEh", sekolah: "SMK", kelas: "11 RPL" },
    { nama: "REhan", sekolah: "SMK", kelas: "11 RPL" },
    { nama: "Joni", sekolah: "SMK", kelas: "11 RPL" }
];

console.log(siswa);

out = '<thead><tr><th>Nama</th><th>Sekolah</th><th>Kelas</th></tr></thead><tbody>';
has = siswa.map(a => out += `<tr><td>${a.nama}</td><td>${a.sekolah}</td><td>${a.kelas}</td></tr>`);
out += '</tbody>'

document.querySelector("#tabel").innerHTML = out;
// function sis(item) {
//     console.log(item.nama, item.sekolah, item.kelas);
// }