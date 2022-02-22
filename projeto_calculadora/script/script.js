function calcular() {
  let n1 = Number(document.getElementById("n1").value);
  let selector = document.getElementById("selector").value;
  let n2 = Number(document.getElementById("n2").value);
  let operacao = ""
  let calculo = ""

  switch (selector) {
    case "+":
      calculo = n1 + n2;
      operacao = "soma"
      break;
    case "-":
      calculo = n1 - n2;
      operacao = "subtração"
      break;
    case "*":
      calculo = n1 * n2;
      operacao = "multiplicação"
      break;
    case "/":
      calculo = (n1 / n2)
      if(Number.isNaN(calculo)){
        calculo = "0"
      }
      operacao = "divisão"
      break;
    case "^":
      calculo = n1 ** n2;
      operacao = "potenciação"
      break;
      case "%":
      calculo = n1*(n2/100);
      operacao = "porcentagem"
      break;
}
document.getElementById("resultado").innerHTML = `O resultado da ${operacao} entre ${n1} e ${n2} é ${calculo}.`
}
