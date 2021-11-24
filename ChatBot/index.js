function onClick() {
  var value = document.getElementById("input").value;
  console.log(value);

  if (value == "alert") {
    alert("경고창");
  }
}

document.getElementById("button").addEventListener("click", onClick);
