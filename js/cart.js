var cart = {}; //корзина

$.getJSON('goods.json', function(data){
    var goods = data; //все товары в массиве
    //console.log(goods);
    checkCart();
    //console.log(cart);
    showCart(); //вывод товаров на страницу
    
    function showCart()
    {
        var out = '';
        for (var key in cart)
        {
            // out+= key + ' - кол-во - '+cart[key]+'<br>';
            // простой вывод цифр
            // далее графическое представление
            out += '<button class="delete">x</button>'+" ";
            out += '<img src="'+goods[key].image+'" width="65">'+" ";
            out += goods[key].name+" ";
            out += '<button class="minus">-</button>'+" ";
            out += cart[key]+" ";
            out += '<button class="plus">+</button>'+" ";
            out += " Итого: "+cart[key]*goods[key].cost;
            out += '<br />';
        }
        $('#my-cart').html(out);
    }
});

function checkCart()
{
    // проверка наличия корзины в localStorage
    // console.log (localStorage.getItem('dddd') );
    if(localStorage.getItem('cart') != null)
   {
       cart = JSON.parse ( localStorage.getItem('cart') );
   }
}
