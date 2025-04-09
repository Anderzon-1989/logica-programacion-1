let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let num3 = Number(prompt("Ingresa el tercer número:"));

// Verificar que los valores sean válidos
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  console.log("Uno o más valores ingresados no son válidos.");
  document.getElementById("resultado").innerText = "Uno o más valores ingresados no son válidos.";
} else {
  // Verificar si los tres números son iguales
  if (num1 === num2 && num2 === num3) {
    console.log("Todos los números son iguales:", num1, num2, num3);
    document.getElementById("resultado").innerText = `Todos los números son iguales: ${num1}, ${num2}, ${num3}`;
  } else {
    // Guardar los números en un arreglo
    let numeros = [num1, num2, num3];

    // Ordenar de mayor a menor
    let descendente = [...numeros].sort((a, b) => b - a);
    // Ordenar de menor a mayor
    let ascendente = [...numeros].sort((a, b) => a - b);

    // Obtener el mayor, medio y menor
    let mayor = descendente[0];
    let medio = descendente[1];
    let menor = descendente[2];

    // Mostrar resultados en consola
    console.log("De mayor a menor:", descendente.join(", "));
    console.log("De menor a mayor:", ascendente.join(", "));
    console.log(`Mayor: ${mayor}, Medio: ${medio}, Menor: ${menor}`);

    // Mostrar resultados en el DOM
    document.getElementById("resultado").innerHTML = `
      <p><strong>De mayor a menor:</strong> ${descendente.join(", ")}</p>
      <p><strong>De menor a mayor:</strong> ${ascendente.join(", ")}</p>
      <p><strong>Mayor:</strong> ${mayor}</p>
      <p><strong>Del medio:</strong> ${medio}</p>
      <p><strong>Menor:</strong> ${menor}</p>
    `;
  }
}
