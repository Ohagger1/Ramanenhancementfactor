function convert() {
  const input = document.getElementById("input").value;
  const output = input * 100;
  document.getElementById("output").innerHTML = `${input} meters = ${output} centimeters`;
}
