document.getElementById("btn1").addEventListener("click", myStart)
document.getElementById("btn2").addEventListener("click", myStop)
document.getElementById("btn3").addEventListener("click", Clear)

let myVal;
let myInt;

function myCount()
{
   myVal=Number(document.getElementById("ans").innerHTML);
   myVal++;
   document.getElementById("ans").innerHTML=myVal; 
}
function myStart()
{
    myInt=setInterval(myCount, 1000)
}
function myStop()
{
    myStart=clearInterval(myInt);
}
function Clear()
{
    document.getElementById("ans").innerHTML="0";
}