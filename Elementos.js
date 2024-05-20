const btnusuario = document.getElementById("btn-usuario");
const modalusuario = document.getElementById("modal-usuario");
const btncerrarusuario = document.getElementById("btn-cerrar-usuario");


btnusuario.addEventListener('click', ()=>{
    modalusuario.classList.add('show');
    document.body.classList.add('modal-open'); 
});


btncerrarusuario.addEventListener('click', ()=>{
    modalusuario.classList.remove('show');
    document.body.classList.remove('modal-open');
})








