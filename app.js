/*/DOM- document -->html deerh buh code
console.log(document);
// document.getElementsByTagName()->tag nereer handah
var h1 = document.getElementsByTagName('h1')[0];
console.log(h1)
var h12 = document.getElementsByTagName('h1')[1];
// .innerText = "solih text bichne"-> tag dotorh text solino.
h1.innerText="Sain bnu";
// .style.styleName = "style utga" --> tag-d style uguh
h1.style.color="brown";
h12.style.color="red";
console.log(h12)
var p = document.getElementsByTagName('p')[0];
console.log(p);
function click2(){
    p.innerText="Click button daragdlaa.";
}
p.style.color="yellow";*/

var ageInput =document.getElementsByTagName('input')[0];
var birthYear = document.getElementsByTagName('h4')[0];
var currentYear = 2023, myYear;
console.log(ageInput);
console.log(birthYear);


function age(){
    myYear = currentYear- ageInput.value;
    console.log(ageInput.value);
    birthYear.innerText = "Таны төрсөн он: "+myYear;
}
if(ageInput.value>150){
    alert("buruu bn");
}
