ham=document.querySelector(".ham-menu")
rgtNav=document.querySelector(".rgt-nav")
Nav=document.querySelector(".nav")
ham.addEventListener('click',()=>{
    rgtNav.classList.toggle("invisible")
    Nav.classList.toggle("nav-new")
})