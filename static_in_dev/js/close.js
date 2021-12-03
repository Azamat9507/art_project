// toggle uchun


const navbar = document.querySelector(".nav-bar");
const body = document.querySelector("body");
let toggle = navbar.querySelector(".toggle");
console.log(toggle);

toggle.addEventListener("click",()=>{
    let btn = toggle.querySelector(".toggle-btn");
    let nav = navbar.querySelector(".mobile");
    btn.classList.toggle("close");
    if(!btn.classList.contains("close")){
        body.style.overflowY="auto";
        nav.style.width="0";
        
        
    } else {
        body.style.overflowY="hidden";
        nav.style.width="100%";
        nav.style.height="100vh";
    }
})





// Modal Menyu uchun


const contact = document.querySelector("section.contact-m");
const closembtn = contact.querySelector(".toggle")

function contactm(){
    body.style.overflowY="hidden";

    contact.classList.toggle("open");
    contact.addEventListener("click",(event)=>{
        if(event.target.classList.contains("row")){
        body.style.overflowY="auto";
        contact.classList.remove("open");
        }
    });
    closembtn.addEventListener("click",(event)=>{
        if(event.target.classList.contains("row")){
        body.style.overflowY="auto";
        contact.classList.remove("open");
        }
    })
}
function contactclose(){
    contact.classList.toggle("open");
    body.style.overflowY="auto";
    
    
}



// body scroll b o'lganda navbar background qora bo'ladi

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
















// video gallery

var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function stopVideo(){

    videoPlayer.style.display = "none";
    myVideo.src = "";

}

function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display = "block";
}


