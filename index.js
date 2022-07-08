/* function nextPic() {
  document.querySelector('.first-pic').src="images/img2.jpeg"; 
}
function previousPic() {
  document.querySelector('.first-pic').src="images/img4.jpeg";
} */

// с использованием условий if
let firstPic = "images/img1.jpeg";
let secondPic = "images/img2.jpeg";
let thirdPic = "images/img3.jpeg";
let fourthPic = "images/img4.jpeg";

function nextPic() {
  let image = document.querySelector('.first-pic');
  if (image.src.match(firstPic)) {
    image.src = secondPic;  
  }
  else if (image.src.match(secondPic)) {
    image.src = thirdPic; 
  }
  else if (image.src.match(thirdPic)) {
    image.src = fourthPic; 
  }
  else {
    image.src = firstPic;
  }
}
function previousPic() {
  let image = document.querySelector('.first-pic');
  if (image.src.match(firstPic)) {
    image.src=fourthPic;  
  }
  else if (image.src.match(fourthPic)) {
    image.src=thirdPic; 
  }
  else if (image.src.match(thirdPic)) {
    image.src=secondPic; 
  }
  else {
    image.src =firstPic;
  }
}
// с циклом
/* let slideIndex = 1;

function plusSlides(n) { 
  showSlides(slideIndex += n); 
}
function showSlides(n) { 
  let i;
  let slides = document.querySelectorAll(".dogs-slides");
  console.log(slides);
  if (n > slides.length) {slideIndex = 1}     
  if (n < 1) {slideIndex = slides.length} 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block";   
} */