document.addEventListener('DOMContentLoaded', () => {
});

var game1 = document.getElementById('game1');
var game2 = document.getElementById('game2');
var game3 = document.getElementById('game3');

function removegame1(){
    recalculate1();
    game1.remove();
}

function removegame2(){
    recalculate2();
    game2.remove();
}

function removegame3(){
    recalculate3();
    game3.remove();
}

function recalculate1(){
    var prijs = parseFloat(document.getElementById("price-game-1").innerHTML);
    var totaal = parseFloat(document.getElementById("total-id").innerHTML);
    var subtotaal = parseFloat(document.getElementById("subtotaal-id").innerHTML);
    var btw = parseFloat(document.getElementById("BTW-id").innerHTML);
    var grandbtw = (btw - (prijs * 0.21)).toFixed(2);
    var grandsubtotaal = (subtotaal - prijs).toFixed(2);
    var grand = (totaal - (prijs * 1.21)).toFixed(2);
    document.getElementById("BTW-id").innerHTML = grandbtw;
    document.getElementById("subtotaal-id").innerHTML = grandsubtotaal;
    document.getElementById("total-id").innerHTML = grand;
}

function recalculate2(){
    var prijs = parseFloat(document.getElementById("price-game-2").innerHTML);
    var totaal = parseFloat(document.getElementById("total-id").innerHTML);
    var subtotaal = parseFloat(document.getElementById("subtotaal-id").innerHTML);
    var btw = parseFloat(document.getElementById("BTW-id").innerHTML);
    var grandbtw = (btw - (prijs * 0.21)).toFixed(2);
    var grandsubtotaal = (subtotaal - prijs).toFixed(2);
    var grand = (totaal - (prijs * 1.21)).toFixed(2);
    document.getElementById("BTW-id").innerHTML = grandbtw;
    document.getElementById("subtotaal-id").innerHTML = grandsubtotaal;
    document.getElementById("total-id").innerHTML = grand;
}

function recalculate3(){
    var prijs = parseFloat(document.getElementById("price-game-3").innerHTML);
    var totaal = parseFloat(document.getElementById("total-id").innerHTML);
    var subtotaal = parseFloat(document.getElementById("subtotaal-id").innerHTML);
    var btw = parseFloat(document.getElementById("BTW-id").innerHTML);
    var grandbtw = (btw - (prijs * 0.21)).toFixed(2);
    var grandsubtotaal = (subtotaal - prijs).toFixed(2);
    var grand = (totaal - (prijs * 1.21)).toFixed(2);
    document.getElementById("BTW-id").innerHTML = grandbtw;
    document.getElementById("subtotaal-id").innerHTML = grandsubtotaal;
    document.getElementById("total-id").innerHTML = grand;
}


