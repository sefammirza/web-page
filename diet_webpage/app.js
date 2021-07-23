/* scroll */
ScrollReveal().reveal('.title-1',{
    delay:500
});
ScrollReveal().reveal('.p-1',{
    delay:1000
});

ScrollReveal().reveal('.btn-1',{
    delay:1500
});
ScrollReveal().reveal('.ani-fade-up',{
    opacity:0,
    easing:'ease-in'
});
ScrollReveal().reveal('.items', { 
    distance: '50px' });
ScrollReveal().reveal('.smooth', { 
    easing: 'ease-in' });
    ScrollReveal().reveal('.flip', {
    rotate: {
        x: 20,
        z: 20
    }
});



const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
let activeSlide = 0

leftBtn.addEventListener('click', () =>{
    activeSlide--
    if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setActiveSlide()
})
rightBtn.addEventListener('click',()=>{
    activeSlide++
    if(activeSlide>slides.length -1){
        activeSlide = 0
    }
    setActiveSlide();
})
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))
  slides[activeSlide].classList.add('active')
}


const repeat = function(activeClass){
         let active = document.getElementsByClassName('active');
         let i = 1;

         const repeater = () => {
             setTimeout(function(){
                 [...active].forEach((activeSlide) => {
                     activeSlide.classList.remove('active');
                 });
                 slides[i].classList.add('active');
/*                  if(activeSlide = 'active'){
                    ScrollReveal().reveal('.title-1',{
                        delay:500
                    });
                    ScrollReveal().reveal('.p-1',{
                        delay:1000
                    });
                    
                    ScrollReveal().reveal('.btn-1',{
                        delay:1500
                    });
                    ScrollReveal().reveal('.ani-fade-up',{
                        opacity:0,
                        easing:'ease-in'
                    });  
                 } */
                 i++;

                 if(slides.length == i){
                     i = 0;
                 }
                 if ( i >= slides.length){
                     return;
                 }
                 repeater();
             }, 5000);
         }
         repeater();
     }
     repeat();