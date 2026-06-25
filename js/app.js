let progress = 0;

setInterval(()=>{

if(progress < 80){
progress++;
document.getElementById("bar").style.width = progress + "%";
document.getElementById("percent").innerText = progress + "%";
}

},100);


function openPage(page){

localStorage.setItem("subject", page);

window.location.href = "lessons.html";

}
