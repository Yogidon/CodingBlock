/**
 * Created by aayusharora on 6/26/18.
 */

window.onload = function(){
    var price = document.getElementById('price');
    var kilo = document.getElementById('km');
    var btn = document.getElementById('btn');
    var result = document.getElementById('result');
    btn.onclick = function(){

        let totalPrice = km(kilo.value) + pricetime(price.value);
        result.innerHTML = totalPrice;

    }
}