function Moeda() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDollarNumerico = parseFloat(valor);

  var valorEmRealNumerico = valorEmDollarNumerico * 5;
  var valorEmBitcoinNumerico = valorEmDollarNumerico * 0.000022;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmRealNumerico + ".";
  elementoValorConvertido.innerHTML = valorConvertido;

  var elementoValorConvertido2 = document.getElementById("valorConvertido2");
  var valorConvertido2 =
    "O resultado em Bitcoin é ฿ " + valorEmBitcoinNumerico + ".";
  elementoValorConvertido2.innerHTML = valorConvertido2;
}

function CelsiusFarenheit() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorFinal = (9 / 5) * valorNumerico + 32;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Farenheit é " + valorFinal + "°F.";
  elementoValorConvertido.innerHTML = valorConvertido;
}

function FarenheitCelsius() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorFinal = (5 / 9) * (valorNumerico - 32);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Celsius é " + valorFinal + "°C.";
  elementoValorConvertido.innerHTML = valorConvertido;
}

function FarenheitKelvin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorFinal = (5 / 9) * (valorNumerico - 32) + 273;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Kelvin é " + valorFinal + "K.";
  elementoValorConvertido.innerHTML = valorConvertido;
}

function KelvinFarenheit() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorFinal = (9 / 5) * (valorNumerico - 273) + 32;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Farenheit é " + valorFinal + "°F.";
  elementoValorConvertido.innerHTML = valorConvertido;
}

function KelvinCelsius() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorFinal = valorNumerico - 273;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Celsius é " + valorFinal + "°C.";
  elementoValorConvertido.innerHTML = valorConvertido;
}

function CelsiusKelvin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorFinal = valorNumerico + 273;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Kelvin é " + valorFinal + "K.";
  elementoValorConvertido.innerHTML = valorConvertido;
}

function KmAnosLuz() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorFinal = valorNumerico / 9460000000000;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em anos luz é " + valorFinal + ".";
  elementoValorConvertido.innerHTML = valorConvertido;
}

function AnosLuzKm() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorFinal = valorNumerico * 9460000000000;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em quilômetros é " + valorFinal + " Km.";
  elementoValorConvertido.innerHTML = valorConvertido;
}
