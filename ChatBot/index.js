document.getElementById("button").addEventListener("click", onClick);

var followState = 0;

function onClick() {
  var value = document.getElementById("input").value;

  console.log(value);

  if (value == "바보") {
    alert("뭐야 아닌데요");
  } else if (value == "누구세요") {
    document.getElementsByClassName("say")[0].innerHTML = "김선달입니다.";
  } else if (value == "불꺼") {
    document.getElementsByClassName("say")[0].innerHTML = "딸깍!";
    var background = document.getElementsByTagName("body");
    background[0].style.backgroundColor = "#000000";
  } else if (value == "불켜") {
    document.getElementsByClassName("say")[0].innerHTML = "변덕스럽네;";
    var background = document.getElementsByTagName("body");
    background[0].style.backgroundColor = "#daddfc";
  } else if (value == "날따라해봐요") {
    followState = 1;
    follow();
  } else {
    document.getElementsByClassName("say")[0].innerHTML =
      "저는 멍청해서 할줄아는 말이 별로 없어요";
  }
}

function follow() {
  if (followState == 1) {
    document.getElementsByClassName("say")[0].innerHTML = "이렇게~";
    var value = document.getElementById("input").value;

    if (value == "멈춰!") {
      document.getElementsByClassName("say")[0].innerHTML = "ㅇㅋ";
      followState = 0;
      document.getElementById("button").addEventListener("click", onClick);
    } else {
      document.getElementsByClassName("say")[0].innerHTML = value;
      document.getElementById("button").addEventListener("click", follow);
    }
  }
}
