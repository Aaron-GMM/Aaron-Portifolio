const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToSection);
});

function scrollToSection(event) {
  event.preventDefault();
  
  const targetId = this.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  }
}

//Animação

var string = "AARON DEV"; 
var array = string.split("");
var timer;

function frameLooper () {
  if (array.length > 0) {
    document.getElementById("text").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
      }
  loopTimer = setTimeout('frameLooper()',190); /* change 190 for speed */

}
frameLooper();


const target = document.querySelectorAll('[data-anime]');

function animeScroll() {
    const windowHeight = window.innerHeight;

    target.forEach(function (element){
        if((element.getBoundingClientRect().top + 50) < windowHeight){
            element.classList.add("animate");
        }else{
            element.classList.remove("animate")
        }
    });
}

window.addEventListener('scroll', animeScroll);
window.addEventListener("load", animeScroll);