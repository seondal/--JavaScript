var state = 0;
var register_question;
var register_answer;

document.getElementById("button").addEventListener("click", click);

function click() {
  console.log(state);
  if (state == 1) {
    follow();
  } else if (state == 0) {
    talk();
  } else if (state == 2) {
    dontknow();
  } else if (state == 3) {
    learn();
  }
}

function talk() {
  var answered = false;
  var value = document.getElementById("input").value;

  console.log(value);

  for (let i = 0; i < json.length; i++) {
    if (value == json[i].question) {
      //만약 입력값이 json에 있는 question 데이터와 일치하면
      document.getElementsByClassName("say")[0].innerHTML = json[i].answer; //챗봇의 대답을 json의 answer로 출력
      answered = true;
    }
  }

  if (value == "바보") {
    alert("뭐야 아닌데요");
  } else if (value == "불좀꺼줄래") {
    var background = document.getElementsByTagName("body");
    background[0].style.backgroundColor = "#000000";
  } else if (value == "불좀켜줄래") {
    var background = document.getElementsByTagName("body");
    background[0].style.backgroundColor = "#daddfc";
  } else if (value == "날따라해봐요") {
    state = 1;
  } else {
    if (!answered) {
      register_question = value;
      document.getElementsByClassName("say")[0].innerHTML =
        "무슨말인지 잘 모르겠어요.....";
      setTimeout(
        () =>
          (document.getElementsByClassName("say")[0].innerHTML =
            "' " +
            register_question +
            " '" +
            " 라는 말을 가르쳐줄래요? (네/아니오)"),
        2000
      );
      state = 2;
    }
  }
}

//state1
function follow() {
  var value = document.getElementById("input").value;

  if (value == "멈춰!") {
    document.getElementsByClassName("say")[0].innerHTML = "ㅇㅋ";
    state = 0;
  } else {
    document.getElementsByClassName("say")[0].innerHTML = value + "~";
  }
}

//state2
function dontknow() {
  // setTimeout(() => {
  //   document.getElementsByClassName("say")[0].innerHTML = "제가 알아듣는 말은";
  //   for (let i = 0; i < json.length; ) {
  //     setTimeout(() => {
  //       document.getElementsByClassName("say")[0].innerHTML =
  //         "' " + json[i].question + " '";
  //       i++;
  //     }, 1000);
  //   }
  // }, 2000);

  // setTimeout(
  //   () =>
  //     (document.getElementsByClassName("say")[0].innerHTML = "등이 있습니다"),
  //   4000
  // );

  var value = document.getElementById("input").value;

  if (value == "네") {
    document.getElementsByClassName("say")[0].innerHTML =
      "' " + register_question + " '" + " 라는 말에 대한 대답을 가르쳐주세요";
    state = 3;
  } else if (value == "아니오") {
    document.getElementsByClassName("say")[0].innerHTML = "ㅇㅋ";
    state = 0;
  } else {
    alert("네 / 아니오 로 대답해주세요!");
  }
}

//state3
function learn() {
  register_answer = document.getElementById("input").value;
  json.push({ question: `${register_question}`, answer: `${register_answer}` }); //json이라는 데이터에 값을 추가하는 push함수
  document.getElementsByClassName("say")[0].innerHTML =
    "가르쳐주신 말을 배웠습니다!";
  state = 0;
}

var json = [
  {
    question: "누구세요",
    answer: "김선달입니다.",
  },
  {
    question: "안녕",
    answer: "ㅎㅇㅎㅇ",
  },
  {
    question: "불좀켜줄래",
    answer: "변덕스럽네",
  },
  {
    question: "불좀꺼줄래",
    answer: "딸칵!",
  },
  {
    question: "날따라해봐요",
    answer: "이렇게~",
  },
];
