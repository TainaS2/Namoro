$('.slider-principal').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});
let btnmenu=document.getElementById("abrir")
let menu=document.getElementById("menu")
let over=document.getElementById("lay")

btnmenu.addEventListener('click',()=>{
  menu.classList.add('abrir-menu')
})
menu.addEventListener('click',()=>{
  menu.classList.remove('abrir-menu')
})
over.addEventListener('click',()=>{
  menu.classList.remove('abrir-menu')
})