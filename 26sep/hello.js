document.getElementById("setbtn").addEventListener("click", dataSet);
document.getElementById("getbtn").addEventListener("click", dataGet);
document.getElementById("clrbtn").addEventListener("click", dataclr);

function dataSet()
{
    let firstNm=document.getElementById("fnm").value;
    let lastNm=document.getElementById("lnm").value;
    window.localStorage.setItem("firstName", firstNm);
    window.localStorage.setItem("lastName", lastNm);
    alert("Your data set in local Storage!");
}

function dataGet()
{
    let myfnm=window.localStorage.getItem("firstName");
    let mylnm=window.localStorage.getItem("lastName");
    document.getElementById("ans").innerHTML="I am "+myfnm+" "+mylnm;

}

function dataclr()
{
   window.localStorage.clear();
    alert("Clear local Storage");
}