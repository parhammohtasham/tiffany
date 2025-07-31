const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-btn");

// show menu
navToggle.addEventListener("click" , function(){
    navMenu.classList.toggle("show-sidebar");
});

//slider
 const nextBtnEl = document.querySelector('.next');
  const prevBtnEl = document.querySelector('.prev');
  const imgEls = document.querySelectorAll('.banner img');
  let activeIndex=0;
  
  nextBtnEl.addEventListener('click',()=>{
    imgEls[activeIndex].classList.remove('show')
    activeIndex++
    if(activeIndex==imgEls.length){
        activeIndex=0
    }
    imgEls[activeIndex].classList.add('show')
  })
    prevBtnEl.addEventListener('click',()=>{
    imgEls[activeIndex].classList.remove('show')
    activeIndex--
    if(activeIndex<0){
        activeIndex=imgEls.length-1
    }
    imgEls[activeIndex].classList.add('show')
  })
  