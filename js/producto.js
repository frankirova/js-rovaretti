//===========================var globales========================
let precioTotal = 0;


//============================objetos===============================00
function Producto (nombre,stock,precio){
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
}
let producto1 = new Producto ("TL-WR820N",10, 3550);
let producto2 = new Producto ("Archer C20",10, 6.999);
let producto3 = new Producto ("Archer C60",10, 17.600);


// ============ funcion carrito pagina productos ==========

let productoElegido = prompt ("Ingrese un numero ¿Que producto desea elegir?\n1- TL-WR820N\n2- Archer C20\n3- Archer C60");
let productoCantidad = prompt ("¿Que cantidad de productos desea?");


function precio (){
    precioTotal +=  (productoCantidad * producto1.precio);
}

function carrito (){
    
    if (productoElegido == 1 && productoCantidad <= producto1.stock ){
        precio(); 
        alert("Valor total: $" + precioTotal);
        
    }
    else if (productoCantidad >= producto1.stock){
        alert ("Tenemos " + producto1.stock + "u. de este producto");
    }
    else if (productoElegido == 2 && productoCantidad <= producto1.stock ){
        precio();
        alert("Valor total: $" + precioTotal);
    }
    else if (productoCantidad >= producto1.stock){
        alert ("Tenemos" + producto1.stock + "u. de este producto");
    }
    else if (productoElegido == 3 && productoCantidad <= producto1.stock ){
        precio();
        alert("Valor total: $" + precioTotal);
    }
    else if (productoCantidad >= producto1.stock){
        alert ("Tenemos" + producto1.stock + "u. de este producto");
    }

    else {alert("Error");
    }
}
carrito ();










//===================funcion iva por si la necesito despues================

// function iva(){
//     let precioIva = (precioTotal * 1.21);
// }
