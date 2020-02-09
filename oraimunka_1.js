function myFunction(){
var text = document.getElementById("popoo").value;
var chars;
var words = 0;

for (chars in text){
  if (text[chars] == " "){
    words++;
  }
}

document.getElementById("output1").innerHTML = words;
}
