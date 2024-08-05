// Constructor de objeto Empleado
function Empleado(nombre, salario, departamento) {
  this.nombre = nombre;
  this.salario = salario;
  this.departamento = departamento;

  // Método para calcular el salario después de un aumento
  this.aumentarSalario = function (salarioAdd) {
    this.salario += salarioAdd;
    console.log(`Salario actualizado: ${this.salario}`);
  };

  // Método para cambiar el departamento
  this.cambiarDepartamento = function (nuevoDepartamento) {
    this.departamento = nuevoDepartamento;
    console.log(`Departamento actualizado: ${this.departamento}`);
  };

  // Método para obtener detalles del empleado
  this.obtenerDetalles = function () {
    return `Nombre: ${this.nombre}, Salario: ${this.salario}, Departamento: ${this.departamento}`;
  };
}

// Crear un nuevo empleado
const empleado = new Empleado("Juan Pérez", 50000, "Ventas");
// Mostrar detalles iniciales
console.log("Detalles iniciales del empleado:");
console.log(empleado.obtenerDetalles());

function actualizarDetalles() {
  const detalles = empleado.obtenerDetalles();
  document.getElementById("resultado").innerText = detalles;
}

// Inicializar la interfaz con los detalles del empleado
window.onload = function () {
  actualizarDetalles();
};

function aumentarSalario() {
  const aumento = parseFloat(document.getElementById("aumento").value);
  if (!isNaN(aumento)) {
    empleado.aumentarSalario(aumento);
    document.getElementById("aumento").value = "";
    actualizarDetalles();
  } else {
    alert("Ingrese un valor válido para el aumento.");
  }
}

function cambiarDepartamento() {
  const nuevoDepartamento = document.getElementById("nuevoDepartamento").value;
  if (nuevoDepartamento) {
    empleado.cambiarDepartamento(nuevoDepartamento);
    document.getElementById("nuevoDepartamento").value = "";
    actualizarDetalles();
  } else {
    alert("Ingrese un nuevo departamento.");
  }
}
