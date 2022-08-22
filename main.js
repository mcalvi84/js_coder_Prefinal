// let entrada = prompt("Ingresar un nombre");
// //Repetimos hasta que se ingresa "ESC"
// while(entrada != "ESC" ){
// switch (entrada) {
//     case "ANA":
//             document.write("HOLA ANA");
//             break;
//         case "JUAN":
//             document.write("HOLA JUAN");
//             break;
//     default:
//         document.write("¿QUIÉN SOS?")
//         break;
// }
// entrada = prompt("Ingresar un nombre");
// }
const botonIniciar = document.querySelector("#botonIniciar");

let listadoProductos = []; // Array Productos
let itemConfirm = true; // Confirm creación
let itemDelete = true; // Confirm Borrado
let idItm = 0; // Inicializo contador
let itemBorrar = 0;

botonIniciar.addEventListener("click", () => {
  // console.log(botonadd);

  class capturar {
    constructor(idItm, producto, cantidad, precio) {
      this.idItem = idItm;
      this.producto = producto;
      this.cantidad = cantidad;
      this.precio = precio;
      console.log("capturar");
    }

    printConsole() {
      console.log(` #${this.idItem}`); //Faltaba una "e" aca
      console.log(
        `PRODUCTO: ${this.producto}\nCANTIDAD: ${this.cantidad}\nPRECIO: ${this.precio}\n-..................-\n`
      );
    }
  }
  //     var productoCapturado = document.getElementById("producto").innerHTML ="Prueba";
  //     console.log(productoCapturado);
  //    var cantidadCapturado = document.getElementById("cantidad").value;
  //    var precioCapturado = document.getElementById("precio").value;

  // var nuevoProducto = new Producto(productoCapturado,cantidadCapturado,precioCapturado );
  //  var nuevoProducto = new Producto( "pepsi", "200", "150");
  // console.log(nuevoProducto);

  const ingresarDatos = () => {
    let producto = prompt("Ingrese nombre del Producto.");
    producto === null
      ? (producto = "SIN NOMBRE")
      : (producto = producto.toUpperCase());

    let cantidad = prompt("Ingrese cantidad de Productos.");
    cantidad === null
      ? (cantidad = "SIN CANTIDAD")
      : (cantidad = cantidad.toUpperCase());

    let precio = prompt("Ingrese precio del Producto.");
    precio === null ? (precio = "SIN PRECIO") : (precio = precio.toUpperCase());

    return { producto, cantidad, precio };
  };

  do {
    const { producto, cantidad, precio } = ingresarDatos();

    if (producto === "") {
      console.warn("Error: Item no valido - Debe asignar un Nombre al item.");
    } else {
      idItm++;
      let ItemProd = new capturar(idItm, producto, cantidad, precio);
      listadoProductos.push(ItemProd);
      ItemProd.printConsole();
    }

    itemConfirm = confirm("Desea ingresar un nuevo item?");
  } while (itemConfirm);
  console.log("LISTADO DE PRODUCTOS INGRESADOS");
  console.table(listadoProductos);
});
