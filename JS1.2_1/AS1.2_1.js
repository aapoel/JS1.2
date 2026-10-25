const c = Number(prompt("Enter temperature in Celsius:"));
const f = c * 9 / 5 + 32;
const k = c + 273.15;

document.getElementById("result").innerHTML =
  c + " °C = " + f + " °F = " + k + " K";