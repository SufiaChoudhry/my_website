function addToCart() {
alert("Wonderfull Choice You have Made!!!!");

}
var quantityOFScarf = 0;
var price =50;
var total = 0;
var cash=0 ;
function cash(){
if(total>=cash){
alert('your balance is 0');
}
    document.querySelector('#cash').value =cash;
}
function add(){
    document.querySelector('#addMin').value=quantityOFScarf;
    quantityOFScarf++;
    document.querySelector('#total').innerHTML=total;
    total=quantityOFScarf*price;
}
function minus(){
    if (quantityOFScarf>0){
        quantityOFScarf--;
    }
    document.querySelector('#addMin').value=quantityOFScarf;

    document.querySelector('#total').innerHTML=total;
    total=quantityOFScarf*price;
}
