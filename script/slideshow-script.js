// variables
var slides = document.querySelectorAll("#slide-show figure");
var buttonsSlides = document.querySelectorAll("#slide-show button");

// slideshow 
function nextSlide() {
    for(let i = 0; i < slides.length; i++) {
        if(slides[i].className != "hidden") {
            slides[i].className = "hidden";
            buttonsSlides[i].className = "hidden";

            if(i < slides.length - 1) {
                slides[i + 1].className = "actual";
                buttonsSlides[i +1].className = "actual";
            }
            else {
                slides[0].className = "actual";
                buttonsSlides[0].className = "actual";
            }

            break;
        }
    }
}

// every seven seconds a slide is changed with the next one
setInterval(nextSlide, 7000);