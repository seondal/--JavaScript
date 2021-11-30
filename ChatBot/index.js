var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Hello World!")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Strings can be removed")
  .pauseFor(2500)
  .deleteChars(7)
  .typeString("<strong>altered!</strong>")
  .pauseFor(2500)
  .start();

var followState = 0;

document.getElementById("button").addEventListener("click", click);

function click() {
  if (followState == 1) {
    follow();
  } else if (followState == 0) {
    talk();
  }
}

function talk() {
  var value = document.getElementById("input").value;

  console.log(value);

  if (value == "바보") {
    alert("뭐야 아닌데요");
  } else if (value == "누구세요") {
    document.getElementsByClassName("say")[0].innerHTML = "김선달입니다.";
  } else if (value == "불좀꺼줄래") {
    document.getElementsByClassName("say")[0].innerHTML = "딸깍!";
    var background = document.getElementsByTagName("body");
    background[0].style.backgroundColor = "#000000";
  } else if (value == "불좀켜줄래") {
    document.getElementsByClassName("say")[0].innerHTML = "변덕스럽네;";
    var background = document.getElementsByTagName("body");
    background[0].style.backgroundColor = "#daddfc";
  } else if (value == "날따라해봐요") {
    document.getElementsByClassName("say")[0].innerHTML = "이렇게~";
    followState = 1;
  } else {
    document.getElementsByClassName("say")[0].innerHTML =
      "무슨말인지 잘 모르겠어요..";
  }
}

function follow() {
  var value = document.getElementById("input").value;

  if (value == "멈춰!") {
    document.getElementsByClassName("say")[0].innerHTML = "ㅇㅋ";
    followState = 0;
  } else {
    document.getElementsByClassName("say")[0].innerHTML = value;
  }
}
