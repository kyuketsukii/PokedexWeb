
document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-900px";
    background_menu.style.display = "none";
}




function changeMenuBackground() {
    const menu = document.getElementById("menu");
  
    if (window.scrollY > 0) {
      menu.classList.add("scrolling");
    } else {
      menu.classList.remove("scrolling"); 
    }
  }
  
  window.addEventListener("scroll", changeMenuBackground);

  changeMenuBackground();

 //------------------------------VIDEO -------------------------

  document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("miVideo");
    
    video.volume = 0.1; // Establece el volumen al 40% (0.4 * 100%)
  
  });

 //------------------------------ LIST SLIDER -------------------------
 document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
    const items = slider.getElementsByTagName("li");
    const listslider = document.querySelector(".listslider").getElementsByTagName("a");
    let currentItem = 0;
  
    function mostrarSlide(item) {
      for (let i = 0; i < items.length; i++) {
        items[i].style.opacity = 0;
        items[i].style.zIndex = -1;
      }
  
      items[item].style.opacity = 1;
      items[item].style.zIndex = 0;
  
      for (let i = 0; i < listslider.length; i++) {
        listslider[i].classList.remove("item-select-slid");
      }
  
      listslider[item].classList.add("item-select-slid");
      currentItem = item;
    }
  
    function siguienteSlide() {
      currentItem = (currentItem + 1) % items.length;
      mostrarSlide(currentItem);
    }
  
    function anteriorSlide() {
      currentItem = (currentItem - 1 + items.length) % items.length;
      mostrarSlide(currentItem);
    }
  
    for (let i = 0; i < listslider.length; i++) {
      listslider[i].addEventListener("click", function () {
        mostrarSlide(i);
      });
    }
  
    document.querySelector(".arrowNext").addEventListener("click", siguienteSlide);
    document.querySelector(".arrowPrev").addEventListener("click", anteriorSlide);
  
    mostrarSlide(currentItem);
  

    setInterval(siguienteSlide, 4000); // Cambia de imagen cada 4 segundos
  });



const tiempoDeCarga = 3000;


document.addEventListener("DOMContentLoaded", function () {
 
  setTimeout(function () {
    // Oculta el preloader
    document.getElementById("preloader").style.display = "none";
  }, tiempoDeCarga);
});