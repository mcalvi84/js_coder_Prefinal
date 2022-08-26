var selectedRow = null;
//Mostrar Alertas
function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

//Borrar Datos

document.querySelector("#producto_lista").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showAlert("Producto Borrado con Exito", "danger");
  }
});

//Añadir Datos
//Declaro counter
let counter = 0;
document.querySelector("#producto_form").addEventListener("submit", (e) => {
  e.preventDefault();

  //agarrar los valores

  const producto = document.querySelector("#producto").value;
  const cantidad = document.querySelector("#cantidad").value;
  const precio = document.querySelector("#precio").value;

  //validar
  if (producto == "" || cantidad == "" || precio == "") {
    alert("Por favor complete todos los campos", "danger");
  } else {
    if (selectedRow == null) {
      const list = document.querySelector("#producto_lista");
      const row = document.createElement("tr");
      counter++; //Cada vez que entra, le suma 1 al counter y lo renderiza. de esta manera tenemos ID

      //Agrego Counter al Row
      row.innerHTML = `
         <td>${counter}</td>
         <td>${producto}</td>
         <td>${cantidad}</td>
         <td>${precio}</td>
         <td>
         <a href="" class="btn btn-warning btn-sm edit">Editar</a>
         <a href="" class="btn btn-danger btn-sm delete">Borrar</a>
        `;
      list.appendChild(row);
      selectedRow = null;
      alert("Producto añadido Exitosamente", "succes");

      //Blanqueo valores
      document.getElementById("producto").value = "";
      document.getElementById("cantidad").value = "";
      document.getElementById("precio").value = "";
    }
  }
});
