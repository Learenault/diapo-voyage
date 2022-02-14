const slides = {
  1: document.querySelectorAll('[data-slide="1"]'),
  2: document.querySelectorAll('[data-slide="2"]'),
  3: document.querySelectorAll('[data-slide="3"]'),
}

let prevSlide = 0
let currentSlide = 1
const ANIMATION_TIME = 500

updateSlide =() => {
  slides[currentSlide].forEach(element => {
    element.classList.add('active')
  });
  slides[prevSlide].forEach(element => {
    element.classList.add('leave')
  });

  setTimeout(() => {
    slides[prevSlide].forEach(element => {
      element.classList.remove('active')
      element.classList.remove('leave')
    });
}, ANIMATION_TIME)
}

plus = () => {
if(currentSlide === 2){
  document.getElementById('plus').disabled = true;
}
document.getElementById('moins').disabled = false;
prevSlide = currentSlide;
currentSlide++;
updateSlide();
}

moins = () => {
  if(currentSlide === 1){
    document.getElementById('moins').disabled = true;
    
  }
  document.getElementById('plus').disabled = false;
  prevSlide = currentSlide;
  currentSlide--;
  updateSlide();
  }
