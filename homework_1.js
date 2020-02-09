function myFunction() {
  x = document.getElementById("numb1").value;
  y = document.getElementById("numb2").value;

  if (isNaN(x) || isNaN(y)) {
    document.getElementById("res").value = "ERROR";
  } else {
    document.getElementById("res").value = eval(x) + eval(y);
  }
}
