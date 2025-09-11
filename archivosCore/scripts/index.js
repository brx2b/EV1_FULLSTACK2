const usuarios = [
    {id:1, nickname: "admin", email:"eladmin77@gmail.com", password:"admin123"}
]

function verificarUsuario(){

const nicknameIng=document.getElementById("nick-iniciar").value
const contraseIng=document.getElementById("contrase-iniciar").value

usuarios.forEach(usuario => {

    if(nicknameIng===usuario.nickname && contraseIng===usuario.password){
        console.log("Se ha iniciado sesion correctamente")
        alert("Se ha iniciado sesion correctamente")
        document.getElementById("nick-iniciar").value="";
        document.getElementById("contrase-iniciar").value="";
        window.location.href="tienda.html"
    }else{
        console.log("El usuario o la contraseña son incorrectos")
        document.getElementById("nick-iniciar").style.border="2px solid red"
        document.getElementById("contrase-iniciar").style.border="2px solid red";
        document.getElementById("error-name").innerText="El usuario o la contraseña son incorrectos"
    }

})

}