let text ="";
const fruits = ['Apple', 'Cherry', 'Orange'];
fruits.forEach(myFunction);
document.getElementById('forEach').innerHTML = text;
function myFunction(item, index) {
    text += index + ' - ' + item + "<br>";
}