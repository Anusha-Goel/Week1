function month(){
    var amt = document.getElementById("amount").value;
    var intRate = document.getElementById("interestrate").value;
    var tenure = document.getElementById("year").value;
    var r = intRate/1200;
    var x = Math.pow(1+r,tenure*12);
    var res = (amt * r * x)/(x-1);
    document.getElementById("monthbasis").innerHTML="" + res.toFixed(2);
}
function interest(){
    var amt = document.getElementById("amount").value;
    var intRate = document.getElementById("interestrate").value;
    var tenure = document.getElementById("year").value;
    var r = intRate/1200;
    var x = Math.pow(1+r,tenure*12);
    var res = (amt * r * x)/(x-1);
    document.getElementById("intratee").innerHTML="" + (res.toFixed(2)*12*tenure - amt).toFixed(2);
}
function total(){
    var amt = document.getElementById("amount").value;
    var intRate = document.getElementById("interestrate").value;
    var tenure = document.getElementById("year").value;
    var r = intRate/1200;
    var x = Math.pow(1+r,tenure*12);
    var res = (amt * r * x)/(x-1);
    document.getElementById("tot").innerHTML="" + (res.toFixed(2)*12*tenure).toFixed(2);
}
