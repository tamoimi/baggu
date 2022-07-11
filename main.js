/* scroll_menu */
const header = document.querySelector('.scroll_header')

window.addEventListener('scroll', ()=> {
  if(window.scrollY>200){
    gsap.to(header, 0.3, {
      opacity: 1
    })
  }else {
    gsap.to(header, 0.3, {
      opacity: 0
    })
  }
})



/* btn */
const topBtn = document.querySelector('.toTop')

topBtn.addEventListener('click',()=>{
  gsap.to(window, 2, {
    scrollTo: 0
  })
})

const bottomBtn = document.querySelector('.toBottom')

bottomBtn.addEventListener('click',()=>{
  gsap.to(window, 2, {
    scrollTo: 8000
  })
})