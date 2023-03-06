$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 150){
            $('.box-menu').addClass("scrollMenu")
        }else{
            $('.box-menu').removeClass("scrollMenu")
        }
    });

    //Active menu

    const boxMenu = document.getElementById("box-menu");
    const menuChild = document.getElementById("menu-child");

    menuChild.addEventListener("click", () => {
        boxMenu.classList.toggle("active");
        menuChild.classList.toggle("active");
    });
});

//slider-dis

var counter = 1;
setInterval(function(){
    document.getElementById('btn' + counter).checked = true;
    counter++;
    if(counter > 3) {
        counter = 1;
    }
},2000);

