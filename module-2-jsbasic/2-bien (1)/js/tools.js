

function rateCalulate() {
    var money = +document.getElementById('money').value;
    totalMoney = money + money*0.065;

    document.getElementById('result').innerHTML = totalMoney
}


function showMessage() {
    let message ="Viet nam";
    if (5 == 5) {
        let message = "Ha Noi";
    }
    console.log(message);
}

showMessage();


function tempTransform() {
    let cTemp = document.getElementById('c-temp').value;
    fTemp=Math.round((cTemp*1.8) + 32);

    document.getElementById('result').innerHTML = fTemp;
}