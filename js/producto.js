//===========================var globales========================
let precioTotal = 0;


//============================objetos===============================

function Producto (nombre,stock,precio,img,liCaracteristicas){
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
    this.img = img;
    this.liCaracteristicas = liCaracteristicas;
}

let producto1 = new Producto ("TL-WR820N",10, 3550,"../img/820n2-300x300.jpg",["Velocidad de transmisión Inalámbrica de 300Mbps.","IPTV es compatible con los nuevos protocolos para optimizar la transmisión","Los protocolos de seguridad protegen su red doméstica con firewalls y encriptación inalámbrica."]);
let producto2 = new Producto ("ARCHER C20",10, 6999,"../img/archerc202-300x300.jpg",["Soporta el estándar 802.11ac.","Conexiones simultáneas de 2.4GHz y 5GHz","Señal omnidireccional estable."]);
let producto3 = new Producto ("ARCHER C60",10, 17600,"../img/archerc602-300x300.jpg", ["Consigue un Wi-Fi más rápido","El avanzado Wi-Fi AC desbloquea el rendimiento de tus dispositivos inalámbricos","Funcionalidades avanzadas de software como Control Parental y Red de Invitados"]);

let listaProductos = [producto1, producto2, producto3 ];
let listaProductosCStock = listaProductos.filter((producto) => producto.stock > 0) ;


let catalogo = document.getElementById("catalogo")

for(const producto of listaProductosCStock){
    let card = document.createElement ("div");
    card.className = "card-servicio";
    card.innerHTML = `<img src="${producto.img}"></img>
    <p class="titulo-card">${producto.nombre}</p>
    <ul class="lista-servicios">
        <li class="item-lista-internet">${producto.liCaracteristicas[0]}</li>
        <li class="item-lista-internet">${producto.liCaracteristicas[1]}</li>
        <li class="item-lista-internet">${producto.liCaracteristicas[2]}</li>
    </ul> 
    <p><b>$${producto.precio}</b></p> `;
    catalogo.append(card);
}
    
// ============ funcion carrito pagina productos ==========

let productoElegido = prompt ("Ingrese un numero ¿Que producto desea elegir? \n" + listaNombresProductos.join("\n") ).toUpperCase();
let productoCantidad = prompt ("¿Que cantidad de productos desea?");


function precio (cantidad,precio){
    precioTotal +=  (cantidad * precio);
}

function carrito (){
    
    if (productoElegido == "TL-WR820N" && productoCantidad <= producto1.stock ){
        precio(productoCantidad, producto1.precio); 
        alert("Valor total: $" + precioTotal);
        
    }
    else if (productoCantidad >= producto1.stock){
        alert("Tenemos " + producto1.stock + "u. de este producto");
    }
    else if (productoElegido == "ARCHER C20" && productoCantidad <= producto1.stock ){
        precio(productoCantidad, producto2.precio); 
        alert("Valor total: $" + precioTotal);
    }
    else if (productoCantidad >= producto2.stock){
        alert("Tenemos" + producto2.stock + "u. de este producto");
    }
    else if (productoElegido == "ARCHER C60" && productoCantidad <= producto1.stock ){
        precio(productoCantidad, producto3.precio); 
        alert("Valor total: $" + precioTotal);
    }
    else if (productoCantidad >= producto3.stock){
        alert("Tenemos" + producto3.stock + "u. de este producto");
    }

    else {alert("Error");
    }
} 
carrito ();

function filtrarPrecio(){
    let precioFiltrado = listaProductos.filter((listaProductos) => listaProductos.precio < 10000);
    console.log (precioFiltrado)
    }
    document.querySelector("button").onclick = filtrarPrecio ();









//===================funcion iva por si la necesito despues================

// function iva(){
//     let precioIva = (precioTotal * 1.21);
// }
