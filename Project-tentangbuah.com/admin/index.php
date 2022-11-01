<h1>dashboard admin</h1>

<h2><a href="./logout.php">logout</a></h2>

<?php

session_start();

   
    if (!isset($_SESSION["email"])) {
        header("location:login.php");
    }
    
?>