var menu=document.querySelector(".menu-icon")

var sidenavebar=document.querySelector(".sidenavebar")


menu.addEventListener("click",function (params) {
    sidenavebar.classList.toggle("open")
    // alert("open")
})