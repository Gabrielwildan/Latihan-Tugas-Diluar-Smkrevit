let tampil = document.querySelector("#belajar");
// let tanggal = document.getElementById("#tanggal");
// let bulan = document.getElementById("#bulan")

// klik.addEventListener("click", hasil);
klik.onclick = function () {
    hasil(12)
}

function hasil(a) {

    // let a = document.querySelector("tgl").value;
    // tampil.innerHTML = a;

    alert(a);

}

function zodiak() {
    let bulan = document.getElementById("bulan").value;
    let tanggal = document.getElementById("tanggal").value;
    let hasil = "salah";
    if (bulan < 13 && bulan > 0 && tanggal > 0 && tanggal < 32) {
        hasil = "Zodiak belum dibuat";
        if (bulan == 1) {
            hasil = "capricorn";
            if (tanggal > 20) {
                hasil = "aquarius";
            }
        }
    }
    if (bulan == 2 && tanggal < 30) {
        hasil = "aquarius";
        if (tanggal > 20) {
            hasil = "pisces"
        }
    }
    if (bulan == 3 && tanggal < 32) {
        hasil = "pisces";
        if (tanggal > 20 && tanggal < 31) {
            hasil = "aries"
        }
    }
    if (bulan == 4 && tanggal < 31) {
        hasil = "aries";
        if (tanggal > 20 && tanggal < 31) {
            hasil = "taurus"
        }
    }
    if (bulan == 5 && tanggal < 32) {
        hasil = "taurus";
        if (tanggal > 20 && tanggal < 31) {
            hasil = "gemini"
        }
    }
    if (bulan == 6 && tanggal < 31) {
        hasil = "gemini";
        if (tanggal > 20 && tanggal < 31) {
            hasil = "cancer"
        }
    }
    if (bulan == 7 && tanggal < 32) {
        hasil = "cancer";
        if (tanggal > 20 && tanggal < 31) {
            hasil = "leo"
        }
    }
    if (bulan == 8 && tanggal < 32) {
        hasil = "leo";
        if (tanggal > 20 && tanggal < 31) {
            hasil = "virgo"
        }
    }
    if (bulan == 9 && tanggal < 31) {
        hasil = "virgo";
        if (tanggal > 20 && tanggal < 31) {
            hasil = "libra"
        }
    }
    if (bulan == 10 && tanggal < 32) {
        hasil = "libra";
        if (tanggal > 20 && tanggal < 31) {
            hasil = "scorpio"
        }
    }
    if (bulan == 11 && tanggal < 31) {
        hasil = "scorpio";
        if (tanggal > 20 && tanggal < 31) {
            hasil = "sagittarius"
        }
    }
    if (bulan == 12 && tanggal < 32) {
        hasil = "saggitarius";
        if (tanggal > 20 && tanggal < 31) {
            hasil = "capricorn"
        }
    }
    console.log(hasil);
    tampil.innerHTML = hasil;
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

// zodiak(4, 29)
lulus(80)
console.log(terbilang(100000000000000))
console.log(prima(13))