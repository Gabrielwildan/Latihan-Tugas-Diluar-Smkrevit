

function zodiak(bln, tgl) {
    let hasil = "salah";
    if (bln < 13 && bln > 0 && tgl > 0 && tgl < 32) {
        hasil = "Zodiak belum dibuat";
        if (bln == 1) {
            hasil = "capricorn";
            if (tgl > 20) {
                hasil = "aquarius";
            }
        }
    }
    if (bln == 2 && tgl < 30) {
        hasil = "aquarius";
        if (tgl > 20) {
            hasil = "pisces"
        }
    }
    if (bln == 3 && tgl < 32) {
        hasil = "pisces";
        if (tgl > 20 && tgl < 31) {
            hasil = "aries"
        }
    }
    if (bln == 4 && tgl < 31) {
        hasil = "aries";
        if (tgl > 20 && tgl < 31) {
            hasil = "taurus"
        }
    }
    if (bln == 5 && tgl < 32) {
        hasil = "taurus";
        if (tgl > 20 && tgl < 31) {
            hasil = "gemini"
        }
    }
    if (bln == 6 && tgl < 31) {
        hasil = "gemini";
        if (tgl > 20 && tgl < 31) {
            hasil = "cancer"
        }
    }
    if (bln == 7 && tgl < 32) {
        hasil = "cancer";
        if (tgl > 20 && tgl < 31) {
            hasil = "leo"
        }
    }
    if (bln == 8 && tgl < 32) {
        hasil = "leo";
        if (tgl > 20 && tgl < 31) {
            hasil = "virgo"
        }
    }
    if (bln == 9 && tgl < 31) {
        hasil = "virgo";
        if (tgl > 20 && tgl < 31) {
            hasil = "libra"
        }
    }
    if (bln == 10 && tgl < 32) {
        hasil = "libra";
        if (tgl > 20 && tgl < 31) {
            hasil = "scorpio"
        }
    }
    if (bln == 11 && tgl < 31) {
        hasil = "scorpio";
        if (tgl > 20 && tgl < 31) {
            hasil = "sagittarius"
        }
    }
    if (bln == 12 && tgl < 32) {
        hasil = "saggitarius";
        if (tgl > 20 && tgl < 31) {
            hasil = "capricorn"
        }
    }
    console.log(hasil);
}

function lulus(nilai) {
    if (nilai >= 0 && nilai <= 100) {
        if (nilai >= 80) {
            console.log("LULUS");
        } else {
            console.log("GAGAL");
        }
    }
}

function terbilang(angka) {
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

function prima(bilangan) {
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

zodiak(4, 29)
lulus(80)
console.log(terbilang(100000000000000))
console.log(prima(13))