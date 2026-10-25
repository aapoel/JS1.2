const n = Number(prompt("Enter a positive integer:"));
let table = "<table>";

for (let row = 1; row <= n; row++) {
  table += "<tr>";
  for (let col = 1; col <= n; col++) {
    table += "<td>" + row * col + "</td>";
  }
  table += "</tr>";
}

table += "</table>";
document.getElementById("result").innerHTML = table;