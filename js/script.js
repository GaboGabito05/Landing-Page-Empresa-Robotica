document.getElementById("icon-menu").addEventListener("click", mostrarMenu);

function mostrarMenu(){
    document.querySelector(".menu").classList.toggle("mostrar-menu");
}

window.onscroll = function () {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon-1");
    var elemento2 = document.getElementById("icon-2");
    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}