function greetingAfterInput() {
  var hour = document.getElementById("hour").value;
  var username = document.getElementById("name").value;

  if (hour < 11) {
    document.getElementById("hi").value = "Jó reggelt, " + username + "!";
  } else if (hour < 14) {
    document.getElementById("hi").value = "Szép napot!";
  } else if (hour < 19) {
    document.getElementById("hi").value = "Kellemes délutánt!";
  } else if (hour < 24) {
    document.getElementById("hi").value = "Jó éjt " + username + "!";
  }
  console.log(document.getElementById("hi").value);
}

function greetingBasedOnSystemTime() {
  var username = document.getElementById("name").value;
  var currentdate = new Date();
  var hours = currentdate.getHours()

  if (hours < 11) {
    document.getElementById("greeting").value = "Jó reggelt, " + username + "!";
  } else if (hours < 14) {
    document.getElementById("greeting").value = "Szép napot!";
  } else if (hours < 19) {
    document.getElementById("greeting").value = "Kellemes délutánt!";
  } else if (hours < 24) {
    document.getElementById("greeting").value = "Jó éjt " + username + "!";
  }
  console.log(document.getElementById("greeting").value);
}

function timeValidation() {
  var hour = document.getElementById("hour").value;
  var minute = document.getElementById("min").value;

  if (hour > 23) {
    document.getElementById("hour").value = 23
  } else if (hour < 10) {
    document.getElementById("hour").value = "0" + hour
  }
}
