//Reverse String
const rSInput=document.getElementById("reverse-string-input");
const rSButton=document.getElementById("reverse-string-btn");
const rsAns=document.getElementById("reverse-string-ans")
rSButton.addEventListener("click",()=>reverseString(rSInput.value))

function reverseString(str) {
    let arr=[...str];
    str=[];
    arr.forEach(char=>str.unshift(char));
    str= str.toString();
    str= str.replace(/,/g, "");
    rsAns.textContent=str; 
  }
///Celcius to Kelvin
const celciusInput = document.getElementById("celcius-input");
const convertButton = document.getElementById("convert-farhenheit");
const ans=document.getElementById("ans");
// k.addEventListener("onchange",()=>console.log(k.value));
convertButton.addEventListener("click", function(){
    let fahrenheit;
    let celcius= celciusInput.value;
    fahrenheit= celcius*9/5+32;
    ans.textContent=fahrenheit+"K"
});


