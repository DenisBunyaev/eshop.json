<?php
$prm = $_GET['prm'];
var_dump($_GET);
require 'templates/header.php';

switch ($prm)
{
    case '':
        require 'template/main.php';
        break;
    case 'cart':
        require 'template/cart.php';
        break;
}

require 'templates/footer.php';
?>