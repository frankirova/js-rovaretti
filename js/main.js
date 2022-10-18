let menuFinal = prompt("1- Elegir abono/n2- ESC")
let precioInstalacion = 9500;
let abonoElegido = prompt ("Ingrese un numero\n1- Hasta 4MB\n2- Hasta 6MB\n3- Hasta 10MB");
let pagoElegido = prompt ("Ingrese un numero\n1- Efectivo / Transferencia\n2- Tarjeta de credito"); 
let precioTotal = 0;

function Abono (id,nombre, precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
}
    
let abono1 = new Abono (1, "6MB", 2520);
let abono2 = new Abono (2, "10MB", 3290);
let abono3 = new Abono (3, "15MB", 3890);

let listaAbonos = [abono1,abono2,abono3 ];

let listaNombresAbonos = [ ];
for (const abono of listaAbonos){
    listaNombresAbonos.push(abono.nombre)
} 
let listaPreciosAbonos = [ ];
for (const abono of listaAbonos){
    listaPreciosAbonos.push(abono.precio)
} 
let listaNombresClientes = [ ]

while(menuFinal !=2 ){
    let nombre = prompt("Ingrese su nombre completo");
    listaNombresClientes.push(nombre)

    function saludo(){
        alert("Hola " + nombre);
    }
    saludo();


    function totalPago (){
    
        if (abonoElegido == 1 && pagoElegido == 1 ){
            precioTotal = precioInstalacion + abono1.precio;
            alert("Valor total: $" + precioTotal);
            
        }
        else if (abonoElegido == 1 && pagoElegido == 2 ){
            precioTotal = ((precioInstalacion*0.20+precioInstalacion) + abono1.precio) ;
            alert ("Valor total: $" + precioTotal) ;
        }
        else if (abonoElegido == 2 && pagoElegido == 1){
            precioTotal = precioInstalacion + abono2.precio;
            alert("Valor total: $" + precioTotal);
        }
        else if (abonoElegido == 2 && pagoElegido == 2 ){
            precioTotal = ((precioInstalacion*0.20+precioInstalacion) + abono2.precio) ;
            alert ("Valor total: $" + precioTotal) ;
        }

        else if (abonoElegido == 3 && pagoElegido == 1){
            precioTotal = precioInstalacion + abono3.precio;
            alert("Valor total: $" + precioTotal);
        }
        else if (abonoElegido == 3 && pagoElegido == 2 ){
            precioTotal = ((precioInstalacion*0.20+precioInstalacion) + abono3.precio) ;
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



function calculadora(){

    
    let n1 = parseInt (prompt ("ingrese el primer numero"));
    let operacion = prompt ("ingrese el operador");
    let n2 = parseInt(prompt ("ingrese el segundo numero"));
       
    switch (operacion){
        case "+": 
            return n1 + n2 ;
            

        case "-" :
            return n1 - n2 ;
            

        case "*" :
            return n1 * n2 ;
            

        case "/" :
            return n1 / n2 ;
            

    }
}
let boton = document.getElementById("botoncalcu")

boton.addEventListener("click", calculadora)
