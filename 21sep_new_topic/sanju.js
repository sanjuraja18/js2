document.getElementById("btn1").addEventListener("click", myfun);

function myfun(){
    let p=Number(document.getElementById("ph").value);
    let m=Number(document.getElementById("ma").value);
    let e=Number(document.getElementById("en").value);
    let c=Number(document.getElementById("co").value);
    let h=Number(document.getElementById("hi").value);

    let total = p+m+e+c+h;
    let per=total*100/500;
    document.getElementById("ans1").innerHTML="total number :"+total;
    document.getElementById("ans2").innerHTML="Percentage :"+per+"%";
}