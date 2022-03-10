// ANIMAZIONI


// animazione titolo homepage
anime.timeline({loop: false})
  .add({
    targets: '.title .zebby',
    scale: [20,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.zebby',
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


// animazione news
var id = null;
var numero = 0;
var elem = document.getElementById("news1");   
var elem2 = document.getElementById("news2");
var elem3 = document.getElementById("news3");
var elem4 = document.getElementById("news4");   
function myMove1() {
  console.log("partita1");
  
  var pos = -900;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
      numero = numero + 1;
    } else if (pos > -300){
      pos= pos + 10; 
      elem.style.left = pos + 'px'; 
      elem2.style.right = pos + 'px';
    } 
    else {
      pos= pos + 20; 
      elem.style.opacity = 1;
      elem2.style.opacity = 1;
      elem.style.left = pos + 'px'; 
      elem2.style.right = pos + 'px'; 
    }
  }

}

function myMove2() {
  console.log("partita2");
  
  var pos = -900;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else if (pos > -300){
      pos= pos + 10; 
      elem3.style.left = pos + 'px'; 
      elem4.style.right = pos + 'px'; 
    } else {
      pos= pos + 20; 
      elem3.style.opacity = 1;
      elem4.style.opacity = 1;
      elem3.style.left = pos + 'px'; 
      elem4.style.right = pos + 'px'; 
  }
}
}

var windowHeight = window.innerHeight;
var element = document.getElementById("news1");

// window.onscroll = function checkPosition() {

//   console.log(numero);
//   console.log(windowHeight);
//   console.log(positionFromTop);
//   var positionFromTop = element.getBoundingClientRect();
//   if (positionFromTop.y < windowHeight) {

//     if (elem.style.opacity = 0 && numero == 0) {
//       myMove1();
//       console.log(numero);
//       console.log(windowHeight);
//       console.log(positionFromTop);
//     } else if (elem.style.opacity = 1 && numero == 1) {
//   numero = numero + 1;
//       myMove2();
//       console.log(numero);
//       console.log(windowHeight);
//       console.log(positionFromTop);
//     }
//   }
// }

