

let lastScorllTop = 0;
window.addEventListener('scroll',()=>{
let st = document.documentElement.scrollTop;
if (lastScorllTop < st ){
  document.querySelector('nav').style.display= 'none' 


}
else{
    document.querySelector('nav').style.display= 'block';
    document.querySelector('nav').style.background = 'var(--color-primary)';

  
}
   lastScorllTop=( st<=0? 0 : st);
})



// show / hide faq answer




const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
       faq.classList.toggle('open') ;
    //    change the icon
})
})

//  show hide nav menu

const menu= document.querySelector('.nav__menu');
const closeBtn = document.querySelector('#close-menu-btn');
const menuBtn = document.querySelector('#open-menu-btn');

menuBtn.addEventListener('click',()=>{
 menu.style.display = 'flex';
 menuBtn.style.display ='none';
 closeBtn.style.display = 'block';
})

closeBtn.addEventListener('click',()=>{
    menu.style.display = 'none';
    menuBtn.style.display ='block';
    closeBtn.style.display = 'none';
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        600: {
slidesPerView:2
        },
      1000:  {
slidesPerView:3
        }
    }
   
  });
  