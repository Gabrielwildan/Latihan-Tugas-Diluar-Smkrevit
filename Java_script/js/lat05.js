function perkalian(a, b) {
    return a * b;
}

console.log(perkalian(3, 5));

let kali = (a, b) => a * b;
console.log(kali(4, 2));

let zodiak = (tg, bl) => {
    let hasil = "invalid";
    if (bl < 13 && bl > 0 && tg < 32 && tg > 0) {
        hasil = "under develop"
        if (bl == 1) {
            hasil = "capricorn"
        } if (tg > 20) {
            hasil = "aquarius"
        }
        if (bl == 2) {
            hasil = "aquarius"
        } if (tg > 20) {
            hasil = "pisces"
        }
        if (bl == 3) {
            hasil = "pisces"
        } if (tg > 20) {
            hasil = "aries"
        }
    }
    return hasil;
}
console.log(zodiak(1, 3));

let lulus = (nilai) => {
    let result = "invalid";
    if (nilai > 0 && nilai < 100) {
        if (nilai >= 80) {
            result = "lulus";
        } else {
            result = "tdk lulus";
        }
    }
    return result;
}
console.log(lulus(80));

let terbilang = (angka) => {
    let bil = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
    if (angka < 12) {
        return bil[angka];
    } else if (angka < 20) {
        return terbilang(angka - 10) + "belas";
    } else if (angka < 100) {
        return terbilang(Math.floor(parseInt(angka) / 10)) + " puluh " + terbilang(parseInt(angka) % 10);
    } else if (angka < 200) {
        return "seratus " + terbilang(parseInt(angka) - 100);
    } else if (angka < 1000) {
        return terbilang(Math.floor(parseInt(angka) / 100)) + " ratus " + terbilang(parseInt(angka) % 100);
    } else if (angka < 2000) {
        return "seribu " + terbilang(parseInt(angka) - 1000);
    } else if (angka < 1000000) {
        return terbilang(Math.floor(parseInt(angka) / 1000)) + " ribu " + terbilang(parseInt(angka) % 1000);
    } else if (angka < 1000000000) {
        return terbilang(Math.floor(parseInt(angka) / 1000000)) + " juta " + terbilang(parseInt(angka) % 1000000);
    } else if (angka < 1000000000000) {
        return terbilang(Math.floor(parseInt(angka) / 1000000000)) + " milyar " + terbilang(parseInt(angka) % 1000000000);
    } else if (angka < 1000000000000000) {
        return terbilang(Math.floor(parseInt(angka) / 1000000000000)) + " trilyun " + terbilang(parseInt(angka) % 1000000000000);
    }
}
console.log(terbilang(6969))

let prima = (bilangan) => {
    let pembagi = 0;
    for (let i = 0; i <= bilangan; i++) {
        if (bilangan % i == 0) {
            pembagi++;
        }
    }
    if (pembagi == 2) {
        return "bilangan Prima";
    } else {
        return "Bukan bilangan prima";
    }
}

console.log(prima(73))


