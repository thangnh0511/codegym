// var x ,y,z ;
// x = +prompt("nhập giá trị x ");
// y = +prompt("Nhập giá trị y ");

// z = x + y ; 
// document.getElementById('result').innerHTML = z ; 

// hàm prompt - lấy dữ liệu từ bàn phím 

// Phương trình bậc 1 

function pt_bacNhat() {
    var a1 , b1 ;
    a1 = document.getElementById('a1').value;
    b1 = document.getElementById('b1').value;
    temp = (-b1/a1)
    if (a1==0) {
        if (b1==0){
            document.getElementById('c1').innerHTML = "Vô số Nghiệm"; 
        } else {
            document.getElementById('c1').innerHTML = "Phương trình Vô Nghiệm";
        }
    } else {
        document.getElementById('c1').innerHTML = "Nghiem x = " + temp; 
    }
    console.log(temp);
}


// Phương trình bậc 2 

function pt_bacHai() {1
    var a, b, c, delta; 
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;

    delta = b*b - a*a*c ;

    if (a!=0) {
        if (delta == 0) {
            document.getElementById('delta').innerHTML= delta;
            document.getElementById('result').innerHTML = `x<sub>1</sub>=  x<sub>2</sub> = ` + (-b/(2*a)) ;
        } 
        else {
            if (delta > 0) {
                document.getElementById('delta').innerHTML= delta;
                document.getElementById('result').innerHTML = "x<sub>1</sub> = " + ((- b + Math.sqrt(delta))/(2*a)) + "<br>" + "x<sub>2</sub> = " + ((- b - Math.sqrt(delta))/(2*a)) ;
            } else {
                document.getElementById('delta').innerHTML= delta;
                document.getElementById('result').innerHTML = "Phương trình vô nghiệm !";
            }
        }
    } else {
        document.getElementById('delta').innerHTML= "Không có delta";
        document.getElementById('result').innerHTML ="Nghiệm x=" + (-c/b);
    }
}

