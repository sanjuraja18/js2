
function digitalClock()
{
    const watchTime=document.getElementById('time')
    const myVal= new Date()
    //const watchTime=document.getElementById('time')
    const hour=String(now.getHours()).padStart(2,'0');
    const minute=String(now.getMinutes()).padStart(2,'0');
    const second=String(now.getSeconds()).padStart(2,'0');
    watchTime.innerHTML=`${hour}:${minute}:${second}`
    
}
setInterval(digitalClock, 1000);
digitalClock();

