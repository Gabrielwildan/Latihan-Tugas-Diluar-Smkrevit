<form action="" method="post">
    Angka1:
    <input type="number" name="angka1">
    Angka2:
    <input type="number" name="angka2">
    Operator:
    <input type="text" name="operator">
    <input type="submit" name="submit" value="save">
</form>

<?php

    if (isset($_POST['submit'])) {
        $angka1=$_POST['angka1'];
        $angka2=$_POST['angka2'];
        $operator=$_POST['operator'];

        switch ($operator) {
            case '+':
              echo $angka1 + $angka2;
                break;
            case '*':
                echo $angka1 * $angka2;
                break;
            case '-':
                echo $angka1 - $angka2;
                break;
            case '/':
                echo $angka1 / $angka2;
                break;
            
            default:
                echo "salah tod";
                break;
        }
    }


?>