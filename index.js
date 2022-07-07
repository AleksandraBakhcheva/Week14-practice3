/* function nextPic() {
  document.querySelector('.first-pic').src="images/img2.jpeg"; 
}
function previousPic() {
  document.querySelector('.first-pic').src="images/img4.jpeg";
} */

// с использованием if, все равно не работает
/* function nextPic() {
  let image = document.querySelector('.first-pic');
  if (image.src.match("images/img1.jpeg")) {
    image.src="images/img2.jpeg";  
  }
  if (image.src.match("images/img2.jpeg")) {
    image.src="images/img3.jpeg"; 
  }
  if (image.src.match("images/img3.jpeg")) {
    image.src="images/img4.jpeg"; 
  }
  else {
    image.src = "images/img1.jpeg";
  }
} */

// с циклом, работает идеально
let slideIndex = 1;

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
}