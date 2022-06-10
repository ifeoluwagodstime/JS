<?php
session_start();

    $conn =mysqli_connect("localhost", "root", "", "practice");

    if ($conn == false) {
        die("ERROR: could not connect to database" .mysqli_connect_error());
    } else{
        echo "database connected sucessfully";
    }