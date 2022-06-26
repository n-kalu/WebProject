//********************************BEGINNING OF SLIDESHOW CODES****************************************/
//Declare Main Variables
const ssGroupImgs = document.querySelector(".slideShow");
const ssGroup = document.querySelector(".ssGroupImgs");
const imgList = document.querySelectorAll(".ssGroupImgs img");
let picLenght = document.querySelector(".ssGroupImgs img").getBoundingClientRect().width;
let ssImgTracker = 1;
const sshowButton = document.querySelectorAll(".ssButtons a");
let ssButtonTracker = 0;

//Given that the slideshow images are position absolute in CSS, place the images next to each other horizontally.
for(let i = 0; i < imgList.length; i++){
    imgList[i].style = "left:"+(picLenght * i)+"px;";
}

// Make the second image the one displayed on page load.
ssGroup.style.transform = "translateX(" + (-picLenght * ssImgTracker)+"px";

// Make the first Slideshow button the selected one on page load.
for(let i = 0; i<sshowButton.length; i++){
    if(i == 0){
        sshowButton[i].classList.add("ssbSelected");
    }
    else{} 
}

//Hide Overflow
ssGroupImgs.style.overflow = "hidden";

//Slideshow Left and Buttons Function
function sShowLAndBtns(){
 clearInterval(sShowAuto);
 //Slideshow
 if(ssImgTracker<=0){return;}
    ssGroup.style.transition = "transform 0.5s ease-in-out";
    ssImgTracker -= 1;
    ssGroup.style.transform = "translateX(" + (-picLenght * ssImgTracker)+"px)";   
    
    // Slideshow Buttons
    if(ssButtonTracker <= 0){
        sshowButton[ssButtonTracker].classList.remove("ssbSelected");
        ssButtonTracker = imgList.length - 3;
        sshowButton[ssButtonTracker].classList.add("ssbSelected");
    }
    else{
        for(let i = 0; i<sshowButton.length; i++){
            if(i == ssButtonTracker){
                sshowButton[i].classList.remove("ssbSelected");
                ssButtonTracker -= 1;
                break;
            }
        }
    }
    sshowButton[ssButtonTracker].classList.add("ssbSelected");
    sShowAuto = setInterval(sShowRAndBtns, 10000);
}

//Slideshow Right and Buttons Function
function sShowRAndBtns(){
    clearInterval(sShowAuto);
     //Slideshow
     if(ssImgTracker>=imgList.length - 1){return;}
     ssGroup.style.transition = "transform 0.5s ease-in-out";
     ssImgTracker += 1;
     ssGroup.style.transform = "translateX(" + (-picLenght * ssImgTracker)+"px)";
 
     //Slideshow Buttons
     if(ssButtonTracker >= imgList.length - 3){
         sshowButton[ssButtonTracker].classList.remove("ssbSelected");
         ssButtonTracker = 0;
         sshowButton[ssButtonTracker].classList.add("ssbSelected");
     }
     else{
         for(let i = 0; i < sshowButton.length - 1; i++){
             if(i == ssButtonTracker){
                 sshowButton[i].classList.remove("ssbSelected");
                 ssButtonTracker += 1;
                 break;
             }
         }
     }
     sshowButton[ssButtonTracker].classList.add("ssbSelected");
     sShowAuto = setInterval(sShowRAndBtns, 10000);
}

//Automatic Slideshow Image change.
let sShowAuto = setInterval(sShowRAndBtns, 10000);

//Left Arrow.
function leftArrow(){
    sShowLAndBtns();
}

// Right Arrow.
function rightArrow(){
    sShowRAndBtns();
}

// Listen to the end of each transition and check the id of the image displayed. If it matches the id of a copy of the first or last image, then use translateX to go back to the orignal image. Note that transition is turned off here to make the switch seamless.
ssGroup.addEventListener("transitionend", endOfTransition);
    function endOfTransition(){
    if(imgList[ssImgTracker].id == "firstImg"){
            ssGroup.style.transition = "none";
            ssImgTracker = imgList.length - 2;
            ssGroup.style.transform = "translateX(" + (-picLenght * ssImgTracker)+"px"
    }

    if(imgList[ssImgTracker].id == "lastImg"){
        ssGroup.style.transition = "none";
        ssImgTracker = imgList.length - ssImgTracker;
        ssGroup.style.transform = "translateX(" + (-picLenght * ssImgTracker)+"px";
    }
}

//Track window resize
window.addEventListener("resize", resize);
function resize(){
    //Given that Slideshow Images position is set to Absolute in CSS, place the individual images side by side on the horizontal axis.
    for(let i = 0; i < imgList.length; i++){
        picLenght = document.querySelector(".ssGroupImgs img").getBoundingClientRect().width;
        imgList[i].style = "left:"+(picLenght * i)+"px; ";
    }

    //Ensure that only the selected image is visible on the screen  after resize by doing a translateX. Also disable Transition.
    ssGroup.style.transform = "translateX(" + (-picLenght * ssImgTracker)+"px";
    ssGroup.style.transition = "none";
}

//Change selected slideshow image by clicking the buttons
// Add event listener to the slideshow buttons
for(let i = 0; i < sshowButton.length; i++){
   sshowButton[i].addEventListener("click", selectButton(i));
}
function selectButton(i){
    return function(){
        clearInterval(sShowAuto);
        for(let j = 0; j < sshowButton.length; j++){
            if(j == i){
                sshowButton[j].classList.add("ssbSelected");
                //Update Image and Button tracksrs
                ssButtonTracker = i;
                ssImgTracker = i + 1;
                ssGroup.style.transition = "transform 0.5s ease-in-out";
                ssGroup.style.transform = "translateX(" + (-picLenght * ssImgTracker)+"px)";
            }
            if( j != i){
                sshowButton[j].classList.remove("ssbSelected");
            }
        }
        sShowAuto = setInterval(sShowRAndBtns, 10000);
    }
}
//***********************************END OF SLIDESHOW CODES*******************************************/

