<form action="" method="post">
    Game: 
    <input type="text" name="game" id="">
    <br>
    Jenis:
    <input type="text" name="jenis" id="">
    <br>
    <input type="submit" name = "submit"value="Submit">
</form>
<?php

    $db = "dbgame";
    $host = "localhost";
    $user = "root";
    $password = "";

    $koneksi = new mysqli($host,$user,$password,$db);

    if (isset($_POST['submit'])) {
        $game=$_POST['game'];
        $jenis=$_POST['jenis'];

        $sql = "INSERT INTO tblgame (game,jenis) VALUES ('$game','$jenis')";
        $koneksi->query($sql);
    }
    $sql = "SELECT * FROM tblgame";
    $hasil = $koneksi->query($sql);

    echo "<table border>";
    while ($row=$hasil->fetch_array()) {
        echo "<tr>";
        echo "<td>".$row[1]."</td>";
        echo "<td>".$row[2]."</td>";
        echo "</tr>";
    }
    echo "</table>";
?>