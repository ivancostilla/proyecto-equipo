const ventanaModal = document.querySelector(".contenedor-modal__circle");
// esta funcion de js, hace que se asigne la clase open al darle click y se quita la clase close, 
//y luego al darle de nuevo se asigna la clase close y se quita la clase open 
ventanaModal.addEventListener("click", () => {
    ventanaModal.classList.toggle('contenedor-modal__open');
    ventanaModal.classList.toggle('contenedor-modal__close');
});