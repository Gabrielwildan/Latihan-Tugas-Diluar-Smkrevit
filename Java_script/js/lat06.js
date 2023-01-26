let buah = ['mangga', 'jambu', 'jeruk', 'duren', 'apel'];

console.log(buah);

// document.querySelector("#tampil").innerHTML = buah[0];

buah.forEach(
    a => {
        console.log(a);
    }
);


// function kali(a, b) {
//     return a * b;
// }
// function tampil(a) {
//     return a;
// }
// console.log(kali(2, 3));
// console.log(tampil(2));

let kali = (a, b) => {
    return a * b;
}
let tampil = a => {
    console.log(a);
}

console.log(kali(2, 5));
tampil("belajar");


// let siswa = {
//     nama: ["Yanto", "Yanti"],
//     sekolah: "SMKN 2 BUDURAN",
//     kelas: "11 RPL"
// }
// // console.log(siswa);
// console.log(siswa.nama);

let siswa = '{"Nama" : [' +
    '{"name":"Yanto" , "sekolah":"SMK"},' +
    '{"name":"Alpat" , "sekolah":"SMK"}' +
    ']}';

const obj = JSON.parse(siswa);

// console.log(obj);

// console.log(obj.Nama[1].name);

// document.querySelector("#tampil").innerHTML = obj.Nama[0].name;

obj.Nama.forEach(i => {
    console.log(i);
    document.querySelector("#tampil").innerHTML += i.name + " " + i.sekolah + "<br>";
});

