//===========================var globales========================
let precioTotal = 0;


//============================objetos===============================00
function Producto (nombre,stock,precio){
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
}

let producto1 = new Producto ("TL-WR820N",10, 3550);
let producto2 = new Producto ("ARCHER C20",10, 6999);
let producto3 = new Producto ("ARCHER C60",10, 17600);
let listaProductos = [producto1, producto2, producto3 ];

// 
let listaNombresProductos = [ ];
for (const productos of listaProductos ){
    listaNombresProductos.push(productos.nombre); 
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
