<?php

$host = "localhost";
$user = "root";
$password = "";
$db = "dbbuah";
$koneksi = mysqli_connect($host, $user, $password, $db);

$sql = "SELECT * FROM tblbuah";

$hasil = mysqli_query($koneksi, $sql);

// if (mysqli_num_rows($result) > 0) {
//     $data = array();
//     while ($row = $hasil->fetch_assoc()) {
//         $data[] = $row;
//     }
// }

while ($row = $hasil->fetch_assoc()) {
    $json[] = $row;
}

// $result = mysqli_fetch_assoc($hasil);

echo json_encode($json);
// echo json_encode($data);

// print_r($result);
