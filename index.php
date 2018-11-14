<?php
//echo "это index.php <br>";
$prm = $_GET['prm'];
//var_dump($_GET['prm']);
print_r($prm);
require 'templates/header.php';
switch ($prm)
{
    case '':
        require 'templates/main.php';
        break;
    case 'cart':
        require 'templates/cart.php';
        break;
}
require 'templates/footer.php';
?>