const usuarios = [
    {id:1, nickname: "admin", email:"eladmin77@gmail.com", password:"admin123"}
]

function registrarUsuario(){
    const nicknameReg=document.getElementById("nick-registrar").value;
    const emailReg=document.getElementById("email-registrar").value;
    const contraseReg=document.getElementById("contrase-registrar").value;
    const contraseRegVer=document.getElementById("contrase-registrar-ver").value;
    if(nicknameReg=="" || emailReg=="" || contraseReg=="" || contraseRegVer==""){
        console.log("Por favor, complete todos los campos")
        document.getElementById("error-reg").innerText="Por favor, complete todos los campos"
    }
    else{ 
        if(contraseReg==contraseRegVer){
            document.getElementById("contrase-registrar").style.border="1px solid white"
            document.getElementById("contrase-registrar-ver").style.border="1px solid white";
            var existe=usuarios.find(usuario => usuario.nickname===nicknameReg)
            if(existe){
                console.log("El usuario ya existe")
                document.getElementById("nick-registrar").style.border="1px solid red"
                document.getElementById("error-reg").innerText="El usuario ya existe"
            }else{
                document.getElementById("nick-registrar").style.border="1px solid white";
                console.log("Usuario registrado correctamente")
                alert("Usuario registrado correctamente")
                document.getElementById("contrase-registrar").value="";
                document.getElementById("contrase-registrar-ver").value="";
                document.getElementById("nick-registrar").value="";
                document.getElementById("email-registrar").value="";
                usuarios.push({id:usuarios.length+1, nickname:nicknameReg, email:emailReg, password:contraseReg})
                console.log(usuarios)
            }
        }else{console.log("Las contraseñas no coinciden")
            document.getElementById("contrase-registrar").style.border="1px solid red"
            document.getElementById("contrase-registrar-ver").style.border="1px solid red";
            document.getElementById("error-reg").innerText="Las contraseñas no coinciden"
        }
    }
}

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