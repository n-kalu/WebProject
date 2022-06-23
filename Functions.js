//********************************IMAGE SLIDER CODES*****************************************/


//Declare Main Variables
const ssGroupImgs = document.querySelector(".slideShow");
const ssGroup = document.querySelector(".ssGroupImgs");
const imgList = document.querySelectorAll(".ssGroupImgs img");
let picLenght = document.querySelector(".ssGroupImgs img").getBoundingClientRect().width;
let ssImgTracker = 1;

//Given that the slideshow images are position absolute in CSS, place the images next to each other horizontally.
for(let i = 0; i < imgList.length; i++){
    imgList[i].style = "left:"+(picLenght * i)+"px;";
}

// Make the second image the one displayed on page load.
ssGroup.style.transform = "translateX(" + (-picLenght * ssImgTracker)+"px";

//Hide Overflow
ssGroupImgs.style.overflow = "hidden";

//Select new image using left arrow.
function leftArrow(){
    if(ssImgTracker<=0){return;}
    ssGroup.style.transition = "transform 0.2s ease-in-out";
    ssImgTracker -= 1;
    ssGroup.style.transform = "translateX(" + (-picLenght * ssImgTracker)+"px";  
   
}

// Select new image using right arrow.
function rightArrow(){
    if(ssImgTracker>=ssGroupImgs.length - 1){return;}
    ssGroup.style.transition = "transform 0.2s ease-in-out";
    ssImgTracker += 1;
    ssGroup.style.transform = "translateX(" + (-picLenght * ssImgTracker)+"px";
   
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

//**************************************************************************************************/





