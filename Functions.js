// Global Variables
var sshow = document.getElementsByClassName("ssImgContent");
var ssTracker = 0;

// Initialize Slideshow.
for(let i = 0; i<sshow.length; i++){
    if(i == 0){
    }
    else{
        sshow[i].classList.add("hideit");
    } 
}

//Change current slideshow picture using right arrow.
function rightArrow(){
    if(ssTracker >= 5){
        sshow[ssTracker].classList.add("hideit");
        ssTracker = 0;
        sshow[ssTracker].classList.remove("hideit");
    }
    else{
        for(let i = 0; i<sshow.length; i++){
            if(i == ssTracker){
                sshow[i].classList.add("hideit");
                ssTracker += 1;
                break;
            }
        }
    }
    sshow[ssTracker].classList.remove("hideit");
}

//Change current slideshow picture using left arrow.
function leftArrow(){
    if(ssTracker <= 0){
        sshow[ssTracker].classList.add("hideit");
        ssTracker = 5;
        sshow[ssTracker].classList.remove("hideit");
    }
    else{
        for(let i = 0; i<sshow.length; i++){
            if(i == ssTracker){
                sshow[i].classList.add("hideit");
                ssTracker -= 1;
                break;
            }
        }
    }
    sshow[ssTracker].classList.remove("hideit"); 
}





//Testing
let but = document.getElementById("testing");

but.addEventListener("click", myfunction);

function myfunction(){
    alert("hello my people");
}



   
