var cart={}; //моя корзина (массив)

$( 'document' ).ready(function() 
{
 loadgoods(); //загрузка товаров 
 checkCart(); // проверка на наличие товаров в корзине    
 showMiniCart();    
});

function loadgoods()
{
    //загрузка товаров а страницу
    $.getJSON('goods.json', function(data) 
    {
 //  console.log(data);  эта строка для проверки работоспособности кода
        var out = '';
        for (var key in data)
        {
            out+='<div class="single-goods">';
            out+='<h3>'+data[key]['name']+'</h3>';
            out+='<p>Цена: '+data[key]['cost']+" грн"+'</p>';
            out+='<img src="'+data[key].image+'">';
            out+='<button class="add-to-cart" data-art="'+key+'">Купить</button>';
            out+='</div>';
            
        }
        $('#goods').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
}

function addToCart()
{
    //добавление товара в корзину через lockal storage
    var articul = $(this).attr('data-art');
    if(cart[articul]!=undefined)
   {
       cart[articul]++;
   } else {
       cart [articul] = 1;
   }
    //создание локального хранлища в браузере
    // функция json.stringify() принимает массив - выдает строку
    localStorage.setItem( 'cart', JSON.stringify(cart) );
    //console.log(cart);
    showMiniCart();
}

function checkCart()
{
    // проверка наличия корзины в localStorage
    // console.log (localStorage.getItem('dddd') );
    if(localStorage.getItem('cart') != null)
   {
       cart = JSON.parse ( localStorage.getItem('cart') );
   }
}

function showMiniCart()
{
    if( $.isEmptyObject(cart) ){
        out = '';
    } else {
        var out = '';
//        for (var u in cart)
//        { 
//            //out += u + ' -- '+cart[u]+ '<br />'; 
//        }
        out+='<br /><a href="cart">В корзину</a><br />';
        $('#mini-cart').html(out);
            }
}