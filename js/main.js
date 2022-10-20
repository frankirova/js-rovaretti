// let menuFinal = prompt("1- Elegir abono/n2- ESC")
// let precioInstalacion = 9500;
// let abonoElegido = prompt ("Ingrese un numero\n1- Hasta 4MB\n2- Hasta 6MB\n3- Hasta 10MB");
// let pagoElegido = prompt ("Ingrese un numero\n1- Efectivo / Transferencia\n2- Tarjeta de credito"); 
let precioTotal = 0;


// ==============Obj abonos=================


function Abono (id,nombre, precio,liCaracteristicas){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.liCaracteristicas = liCaracteristicas;
}
    
let abono1 = new Abono (1, "6MB", 2520, ["Cargo de instalación $8300","No requiere servicios adicionales","Consultar disponibilidad en la zona"]);
let abono2 = new Abono (2, "10MB", 3290,["Cargo de instalación $8300","No requiere servicios adicionales","Consultar disponibilidad en la zona"]);
let abono3 = new Abono (3, "15MB", 3890,["Cargo de instalación $8300","No requiere servicios adicionales","Consultar disponibilidad en la zona"]);


// =============Arrays=================


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


// ================Elegir abono==================


let serviciosResidenciales = document.getElementById("servicios-residenciales");

function cardss(){
    for(const abono of listaAbonos){
        let card = document.createElement ("div");
        card.className = "card-servicio";
        card.innerHTML = `<p class="titulo-card">${abono.nombre}</p>
        <ul class="lista-servicios">
            <li class="item-lista-internet">${abono.liCaracteristicas[0]}</li>
            <li class="item-lista-internet">${abono.liCaracteristicas[1]}</li>
            <li class="item-lista-internet">${abono.liCaracteristicas[2]}</li>
        </ul> 
        <p><b>$${abono.precio}</b></p>
        <button type="button" id="${abono.id}" class="btn btn-success">Elegir abono</button>`;
        serviciosResidenciales.append (card)
    }
} 
cardss()




// ===============eventoform=====================


let btnSuccess1 = document.getElementById ("1");
 

btnSuccess1.addEventListener("click", mostrarFormulario);

let btnSuccess2 = document.getElementById ("2");
 

btnSuccess2.addEventListener("click", mostrarFormulario);

let btnSuccess3 = document.getElementById ("3");
 

btnSuccess3.addEventListener("click", mostrarFormulario);

// ==============formulario ==================

function mostrarFormulario (){
serviciosResidenciales.innerHTML = 
    `<div class="container">
        <div class="row">
            <div class="col-md-12 formu">
                <div class="well well-sm">
                    <form class="form-horizontal" method="post">
                        <fieldset>
                            <legend class="text-center header">Ingrese los siguientes datos para confirmar la instalacion:</legend>

                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i
                                        class="fa fa-user bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="fname" name="name" type="text" placeholder="Nombre"
                                        class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i
                                        class="fa fa-user bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="lname" name="name" type="text" placeholder="Apellido"
                                        class="form-control">
                                </div>
                            </div>

                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i
                                        class="fa fa-user bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="dni" name="phone" type="text" placeholder="DNI"
                                        class="form-control">
                                </div>
                            </div>

                            <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i
                                    class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="direccion" name="phone" type="text" placeholder="Direccion"
                                    class="form-control">
                            </div>
                        </div>

                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i
                                        class="fa fa-envelope-o bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="email" name="email" type="text" placeholder="Email "
                                        class="form-control">
                                </div>
                            </div>

                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i
                                        class="fa fa-phone-square bigicon"></i></span>
                                <div class="col-md-8">
                                    <input id="phone" name="phone" type="text" placeholder="Telefono"
                                        class="form-control">
                                </div>
                            </div>
                           
                
                            <div class="form-group">
                                <span class="col-md-1 col-md-offset-2 text-center"><i
                                        class="fa fa-pencil-square-o bigicon"></i></span>
                                <div class="col-md-8">
                                    <textarea class="form-control" id="message" name="message"
                                        placeholder="Referencias del domicilio."
                                        rows="7"></textarea>
                                </div>
                            </div>

                        

                            <div class="form-group">
                                <div class="col-md-12 text-center contenedor-btn">
                                    <button type="submit" id= "btnEnviar" class="btn btn-primary btn-lg">Enviar</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>`
}
function mostrarCards (){
    serviciosResidenciales.remove();
    serviciosResidenciales.append()
    
}
// =========back===============


let btnBack = document.getElementById ("btn-back") ;
btnBack.addEventListener ("click", mostrarCards);


// =================boton enviar================


let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener ('input', ()=>{
    let nombre = fname.value
})


// ================tomar datos=============


let nombre = document.getElementById ("fname").value;
let apellido = document.getElementById("lname").value;
let dni = document.getElementById("dni").value;
let domicilio = document.getElementById("direccion").value; let eMail = document.getElementById("email").value;
let telefono = document.getElementById("phone").value;
let ref = document.getElementById("message").value;

nombre.addEventListener('change', ()=>{console.log ("ea")})
    



































// ==============bucle===============


while(menuFinal !=2 ){
    let nombre = prompt("Ingrese su nombre completo");
    listaNombresClientes.push(nombre)


    let saludar = document.getElementById("saludar")
    function saludo(){
        saludar.innerText = "Bienvenido a RM " + nombre + "necesitamos los siguientes datos para coonfirmar su instalacion"
    }
    // saludo();


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
    // totalPago ();

    // alert ("Bienvenido a RM " + nombre + "necesitamos los siguientes datos para coonfirmar su instalacion");


    for (let i=1; i < 2500; i++){
        let nCliente = i;        
        alert("su numero de cliente es " + nCliente);
        break;
    }

    if (apellido,domicilio,nTelefono,eMail == ""){
        alert ("vuelva a ingresar los datos");
    }
// let menuFinal = prompt("1- Listo, graciass/n2- ESC")
}
// Como hago para recolectar esos datos y guardarlos en algun lado???
// Como hago para que todo esto se repita ???



// function calculadora(){

    
//     let n1 = parseInt (prompt ("ingrese el primer numero"));
//     let operacion = prompt ("ingrese el operador");
//     let n2 = parseInt(prompt ("ingrese el segundo numero"));
       
//     switch (operacion){
//         case "+": 
//             return n1 + n2 ;
//             break;

//         case "-" :
//             return n1 - n2 ;
//             break;

//         case "*" :
//             return n1 * n2 ;
//             break;

//         case "/" :
//             return n1 / n2 ;
//             break;

//     }
// }
// let boton = document.getElementById("botoncalcu")

// boton.addEventListener("click", calculadora)
