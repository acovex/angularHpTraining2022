const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntaUser(pregunta) {
  return new Promise((resolve, reject) => {
    try {
      readline.resume();
      readline.question(pregunta, (respuesta) => {
        resolve(+respuesta);
      });
    } catch (err) {
      reject(err);
    }
  });
}

function showMaxValue(num1, num2) {
  const sameValue = num1 === num2;
  if (sameValue) {
    return ` 'Los valores '${num1} `;
  }
  const max = num1 > num2 ? num1 : num2;
  console.log(`El número mayor es ${max}`);
}

async function ejercicio1() {
  console.log("Ejercicio 1");
  let number1 = await preguntaUser("Elige el primer número: ");
  let number2 = await preguntaUser("Elige el segundo número: ");
  if (typeof number1 === "number" && typeof number2 === "number") {
    showMaxValue(number1, number2);
  } else {
    console.log("Uno o varios de los dos valores elegidos no son numeros");
  }
  readline.close();
  console.log("-----------------------------------------");
}

module.exports = {
  ejercicio1,
};
