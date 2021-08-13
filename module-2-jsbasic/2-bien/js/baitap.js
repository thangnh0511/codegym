
function caculate_money() {
    let money= document.getElementById("money").value;
    let rate = document.getElementById('rate').value; 
    let month = document.getElementById('month').value;
    let paid = money*rate*month;
    
    if(money >= 1 ) {
        document.getElementById('result').innerHTML = paid;
    } else {
        document.getElementById('result').innerHTML = "noe";
    }
}

