function onClick() {
  console.log("버튼클릭");
  setTimeout(() => calling(), 2000);
}

function calling() {
  var name = document.getElementsByTagName("h1");
  var phone = document.getElementsByTagName("button");

  name[0].innerHTML = "선달";
  phone[0].innerHTML = "@dev_seondal";
}

document.getElementById("call").addEventListener("click", onClick);
