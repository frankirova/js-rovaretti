let menuFinal = prompt("1- Elegir abono/n2- ESC")
while(menuFinal !=2 ){
    let nombre = prompt("Ingrese su nombre completo");
    function saludo(){
        alert("Hola " + nombre);
    }
    saludo();

    let precioInstalacion = 9500;
    let precio6mb = 2520;
    let precio10mb = 3290;
    let precio15mb = 3890;
    let abonoElegido = prompt ("Ingrese un numero\n1- Hasta 4MB\n2- Hasta 6MB\n3- Hasta 10MB");
    let pagoElegido = prompt ("Ingrese un numero\n1- Efectivo / Transferencia\n2- Tarjeta de credito"); 
    let precioTotal = 0;
    

    function totalPago (){
    
        if (abonoElegido == 1 && pagoElegido == 1 ){
            precioTotal = precioInstalacion + precio6mb;
            alert("Valor total: $" + precioTotal);
            
        }
        else if (abonoElegido == 1 && pagoElegido == 2 ){
            precioTotal = ((precioInstalacion*0.20+precioInstalacion) + precio6mb) ;
            alert ("Valor total: $" + precioTotal) ;
        }
        else if (abonoElegido == 2 && pagoElegido == 1){
            precioTotal = precioInstalacion + precio10mb;
            alert("Valor total: $" + precioTotal);
        }
        else if (abonoElegido == 2 && pagoElegido == 2 ){
            precioTotal = ((precioInstalacion*0.20+precioInstalacion) + precio10mb) ;
            alert ("Valor total: $" + precioTotal) ;
        }

        else if (abonoElegido == 3 && pagoElegido == 1){
            precioTotal = precioInstalacion + precio15mb;
            alert("Valor total: $" + precioTotal);
        }
        else if (abonoElegido == 3 && pagoElegido == 2 ){
            precioTotal = ((precioInstalacion*0.20+precioInstalacion) + precio15mb) ;
            alert ("Valor total: $" + precioTotal) ;
        }


        else {alert("Error");
        }
    }
    totalPago ();

    alert ("Bienvenido a RM " + nombre + "necesitamos los siguientes datos para coonfirmar su instalacion");
    function formulario(){
        
        let apellido = prompt("Inrgese su apellido");
        let domicilio = prompt("Ingrese su domicilio");
        let nTelefono = prompt("Ingrese su numero de telefono");
        let eMail = prompt("Ingrese su E-Mail");
    }    
    formulario();
        
    
    

    for (let i=1; i < 2500; i++){
        let nCliente = i;        
        alert("su numero de cliente es " + nCliente);
        break;
    }

    if (apellido,domicilio,nTelefono,eMail == ""){
        alert ("vuelva a ingresar los datos");
    }
let menuFinal = prompt("1- Listo, graciass/n2- ESC")
}
// Como hago para recolectar esos datos y guardarlos en algun lado???
// Como hago para que todo esto se repita ???


function calculadora(n1, n2, operacion){
       
    switch (operacion){
        case "+": 
            return n1 + n2 ;
            break;

        case "-" :
            return n1 - n2 ;
            break;

        case "*" :
            return n1 * n2 ;
            break;

        case "/" :
            return n1 / n2 ;
            break;

    }
}

document.getElementById("botoncalcu").onclick = calculadora(n1, n2, operacion);

let n1 = parseInt (prompt ("ingrese el primer numero"));
let operacion = prompt ("ingrese el operador");
let n2 = parseInt(prompt ("ingrese el segundo numero"));
alert(calculadora(n1, n2, operacion));




