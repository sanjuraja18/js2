document.getElementById("btn1").addEventListener("click", myfun);

function myfun(){
    let m=Number(document.getElementById("math").value);
    let p=Number(document.getElementById("phy").value);
    let c=Number(document.getElementById("comp").value);
    let h=Number(document.getElementById("hindi").value);
    let s=Number(document.getElementById("scin").value);

    let total=m+p+c+h+s;
    let per=total*100/500;

    document.getElementById("ans1").innerHTML="Total maks : "+total;
    document.getElementById("ans2").innerHTML="Precentage : "+per+"%";
}