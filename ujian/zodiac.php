<form action="" method="post">
    Tanggal:
    <input type="number" name="tanggal">
    Bulan:
    <input type="number" name="bulan">
    <input type="submit" name="save" value="save">
</form>

<?php

if (isset($_POST['save'])) {
    $tanggal = $_POST['tanggal'];
    $bulan = $_POST['bulan'];

    if ($tanggal >=1 && $tanggal <=31 && $bulan <=12 && $bulan >=1) {
        if ($bulan == 1) {
            if($tanggal >= 1 and $tanggal <=20){
                echo "capricorn";
            }else {
                echo "aquarius";
            }
        }
        if ($bulan == 2) {
            if($tanggal >= 1 and $tanggal <=20){
                echo "aquarius";
            }else {
                echo "pisces";
            }
        }
        if ($bulan == 3) {
            if($tanggal >= 1 and $tanggal <=20){
                echo "pisces";
            }else {
                echo "aries";
            }
        }
    }
}



    
   


?>