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

//Show only first image or selected image. Hide the rest.
ssGroupImgs.style.overflow = "hidden";

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

//Select new image using left arrow.
function leftArrow(){
    if(ssImgTracker<=0){return;}
    ssGroup.style.transition = "transform 0.2s ease-in-out";
    ssImgTracker -= 1;
    ssGroup.style.transform = "translateX(" + (-picLenght * ssImgTracker)+"px";    
}

// Select new image using right arrow.
function rightArrow(){
    if(ssImgTracker>=imgList.length - 1){return;}
    ssGroup.style.transition = "transform 0.2s ease-in-out";
    ssImgTracker += 1;
    ssGroup.style.transform = "translateX(" + (-picLenght * ssImgTracker)+"px";
}

























