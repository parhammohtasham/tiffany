"use strict"

///time
const timeEl = document.querySelector('time');
function updateTime() {
  timeEl.textContent = new Date().toLocaleTimeString();
}

///slider
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
  

///login

const loginContainerEl = document.querySelector('.login-container');
const loginFormEl = document.querySelector('.login-box form');
const passInpEl = document.querySelector('.password');
const userInpEl = document.querySelector('.username');
loginFormEl.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = userInpEl.value.trim();
  const password = passInpEl.value.trim();

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }
  try {
    const res = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem('token', data.token);
      alert('Login successful');
      loginContainerEl.classList.remove('show');
    } else {
      throw new Error('Invalid login');
    }

  } catch (error) {
    alert(' Username or password is incorrect');
  }
});

