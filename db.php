<?php

function input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = input($_POST["name"]);
    $phone = input($_POST["phone"]);
    $select = input($_POST["select"]);
    $email = input($_POST["email"]);
    $message = input($_POST["message"]);

    // $name = $_POST["name"];
    // $phone = $_POST["phone"];
    // $select = $_POST["select"];
    // $email = $_POST["email"];
    // $message = $_POST["message"];

    echo "$name <br>";
    echo "$phone <br>";
    echo "$select <br>";
    echo "$email <br>";
    echo "$message <br>";
}
