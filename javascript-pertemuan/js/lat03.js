let isi = document.querySelector("#isi");
isi.innerHTML = "<h1>SOTO</h1>" + "<p>deskripsi soto</p>" + '<img src="/images/bakso.jpg" alt="" srcset="">';

isi.innerHTML = "<h1>Rawon</h1>";
isi.innerHTML += "<p>deskripsi rawon</p>";
isi.innerHTML += '<img src="/images/bakso.jpg" alt="" srcset="">';

for (let i = 0; i < 10; i++) {
    // console.log(i);
    document.querySelector("#paragraf").innerHTML += "<h1>" + i + "</h1>";
}

// let tabel = document.querySelector("#tabel");
// tabel.innerHTML = "<table>"
//     + "<thead><tr><th>Nomor</th></tr></thead>"
//     + "<tbody>"
//     + "<tr><td>1</td></tr>"
//     + "<tr><td>2</td></tr>"
//     + "<tr><td>3</td></tr>"
//     + "<tr><td>4</td></tr>"
//     + "<tr><td>5</td></tr>"
//     + "</tbody>"
//     + "</table>";

let tabel = document.querySelector("#tabel");
tabel.innerHTML = "<table><thead><tr><th>NOMOR</th></tr></thead><tbody>"
// tabel.innerHTML += "<tr><td>1</td></tr>"
// tabel.innerHTML += "<tr><td>2</td></tr>"
// tabel.innerHTML += "<tr><td>3</td></tr>"

for (let index = 1; index <= 69; index++) {
    tabel.innerHTML += "<tr><td>" + index + "</td></tr>"

}
tabel.innerHTML += "</tbody></table>";