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
            out += '<button class="delete" data-art="'+key+'">x</button>'+" ";
            out += '<img src="'+goods[key].image+'" width="65">'+" ";
            out += goods[key].name+" ";
            out += '<button class="minus" data-art="'+key+'">-</button>'+" ";
            out += cart[key]+" ";
            out += '<button class="plus" data-art="'+key+'">+</button>'+" ";
            out += " Итого: "+cart[key]*goods[key].cost;
            out += '<br />';
        }
        $('#my-cart').html(out);
        $('.plus').on('click', plusGoods);
        $('.minus').on('click', minusGoods);
        $('.delete').on('click', deleteGoods);
    }
    
    function plusGoods()
    {
        var articul = $(this).attr('data-art');
        cart[articul]++;
        saveCartToLS(); //Сохранение корзины в local storage
        showCart();
    }
    
    function minusGoods()
    {
        var articul = $(this).attr('data-art');
        if (cart[articul]>1) 
        {
             cart[articul]--;
        } else {
            delete cart[articul];
        }   
        saveCartToLS(); //Сохранение корзины в local storage
        showCart();
    }
    
    function deleteGoods()
    {
        var articul = $(this).attr('data-art');
        delete cart[articul];
        saveCartToLS(); //Сохранение корзины в local storage
        showCart();
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

function saveCartToLS()
{
    localStorage.setItem( 'cart', JSON.stringify(cart) );
}