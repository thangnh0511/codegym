// var x ,y,z ;
// x = +prompt("nhập giá trị x ");
// y = +prompt("Nhập giá trị y ");

// z = x + y ; 
// document.getElementById('result').innerHTML = z ; 

// hàm prompt - lấy dữ liệu từ bàn phím 

// Phương trình bậc 1 

function pt_bacNhat() {
    var a , b ;
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    
    if (a==0) {
        if (b==0){
            document.getElementById('c').innerHTML = "Vô số Nghiệm"; 
        } else {
            document.getElementById('c').innerHTML = "Phương trình Vô Nghiệm";
        }
    } else {
        document.getElementById('c').innerHTML = "Nghiem x = " (-b/a); 
    }
}


// Phương trình bậc 2 

function pt_bacHai() {

}