<script src="js/jquery-3.3.1.min.js"></script>

<?php
switch($prm)
{
    case '':
        echo '<script src="js/eshop.js"></script>';
        break;
    case 'cart':
        echo '<script src="js/cart.js"></script>';
        break;
}
?>

</body>
</html>