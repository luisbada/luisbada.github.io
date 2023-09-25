document.getElementById("boton").addEventListener("click",function(){
    document.getElementById("error").style.display = "none";
    document.getElementById("enviado").style.display = "none";
    let nombre = document.getElementById("nombre").value; 
    let correo = document.getElementById("correo").value; 
    let mensaje = document.getElementById("mensaje").value; 
    validar(nombre,correo,mensaje)

    
       
})

function validar(a,b,c){
    if (a===null||a===""||b===null||b===""||c===null||c===""){
        return document.getElementById("error").style.display = "block"
    } 
        else { return document.getElementById("enviado").style.display = "block";

    
    }
}


