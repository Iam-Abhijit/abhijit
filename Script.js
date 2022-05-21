var body = document.querySelector("body")
var navBar = document.querySelector("nav");



window.addEventListener("scroll", () => {
    // this.scrollY<20?null:navBar.style.background="var(--navtranColor)"
    // this.scrollY<20?navBar.style.background="var(--navGradentColor)":null;
});

var menuIcon = document.querySelector("#menu");
var closeIcon = document.querySelector("#closeMenu");
var navListOpt = document.querySelectorAll("nav ul li");

menuIcon.addEventListener("click", () => {
    var navList = document.querySelector("nav ul");
    navList.style.transform = "translateY(0)";
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";


})

closeIcon.addEventListener("click", () => {
    var navList = document.querySelector("nav ul");
    navList.style.transform = "translateY(-500px)";
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
})


window.addEventListener("resize", (a) => {
    
    var navWidth=a.target.innerWidth;

       navWidth < 600 ?
        navListOpt.forEach(el => {
            el.addEventListener("click", () => {
                var navList = document.querySelector("nav ul");
                navList.style.transform = "translateY(-500px)";
                menuIcon.style.display = "block";
                closeIcon.style.display = "none";
            })

        }) : navWidth > 600 ?
        navListOpt.forEach(el => {
            el.addEventListener("click", () => {
                var navList = document.querySelector("nav ul");
                navList.style.transform = "translateY(0)";
                menuIcon.style.display = "none";
                closeIcon.style.display = "none";
            })

        }):null

})





