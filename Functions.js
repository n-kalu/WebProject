// Global Variables
var sshow = document.getElementsByClassName("ssImgContent");
var ssTracker = 0;

// Initialize Slideshow
for(let i = 0; i<sshow.length; i++){
    if(i == 0){
    }
    else{
        sshow[i].classList.add("hideit");
    } 
}


function rightArrow(){
    if(ssTracker >= 4){
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




   
