function calcular() {
  let formulario = document.getElementById("formulario");
  let kilos = formulario.kilo.value;
  let metros = formulario.metro.value;
  let centimetros = formulario.centimetro.value;
  let imc = kilos / ((Number(metros * 100) + Number(centimetros)) / 100) ** 2;
  document.querySelector(".bloqueado").value = imc.toFixed(2); //diminuir as casas decimais
  if (document.querySelector(".bloqueado").value >= 1) {
    // nesta linha defino o valor minimo para a funcao aparecer
    document.querySelector(".resultado").style.display = "block";
  }
  //alerta do imc
  if (imc <= 18.5) {
    document.querySelector(".valor_imc_classificacao").value =
      "Abaixo do peso.";
    document.querySelector(".valor_imc_classificacao").style.background =
      "#90AECA";
  } else if (imc >= 18.6 && imc <= 24.9) {
    document.querySelector(".valor_imc_classificacao").value = "Peso ideal";
    document.querySelector(".valor_imc_classificacao").style.background =
      "#99CC00";
  } else if (imc >= 25 && imc <= 29.9) {
    document.querySelector(".valor_imc_classificacao").value =
      "Levemente acima do peso.";
    document.querySelector(".valor_imc_classificacao").style.background =
      "#FFD701";
  } else if (imc >= 30 && imc <= 34.9) {
    document.querySelector(".valor_imc_classificacao").value =
      "Obesidade grau 1.";
    document.querySelector(".valor_imc_classificacao").style.background =
      "#FF8902";
  } else if (imc >= 35 && imc <= 39.9) {
    document.querySelector(".valor_imc_classificacao").value =
      "Obesidade Severa.";
    document.querySelector(".valor_imc_classificacao").style.background =
      "#FF4C02";
  } else if (imc >= 40) {
    document.querySelector(".valor_imc_classificacao").value =
      "Obesidade Mórbida.";
    document.querySelector(".valor_imc_classificacao").style.background = "red";
  }
}
