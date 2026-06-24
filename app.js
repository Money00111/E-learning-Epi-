let progress = 0;


setInterval(()=>{

if(progress<75){

progress++;

document.getElementById(

"bar"

).style.width=

progress+"%";


document.getElementById(

"percent"

).innerText=

progress+"%";

}


},100);



function openPage(page){

localStorage.setItem(

"page",

page

);


alert(

page+

" page"

);

  }
