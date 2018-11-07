var cart={}; //моя корзина (массив)

$( 'document' ).ready(function() 
{
 loadgoods();   
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
    console.log(cart);
}






