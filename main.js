let input = document.getElementById("input");
let display = document.getElementById("answer");

let buttons = document.querySelectorAll("button");
let equals = document.querySelectorAll("#equals");
let clear = document.getElementById("clear");
let back = document.querySelectorAll("#backspace");

let answer = [];

buttons.forEach((btn) => {
  btn.onclick = function () {
    // alert(btn.innerHTML)
    if (!btn.id.match("erase")) {
      answer.push(btn.value);
      input.innerHTML = answer.join("");

      if (btn.classList.contains("keyBtn")) {
        display.innerHTML = eval(answer.join(""));
      }
    }

    if (btn.id.match("backspace")) {
      answer.pop();
      answer.pop();
      console.log(answer);
      input.innerHTML = answer.join("");
      display.innerHTML = eval(answer.join(""));
    }

    if (btn.id.match("equals")) {
      answer.pop();
      input.innerHTML = answer.join("");
      input.className = "answer";
      display.className = "input";
    }

    if (btn.id.match("clear")) {
      answer = [""];
      input.innerHTML = "";
      display.innerHTML = 0;
      input.className = "input";
      display.className = "answer";
    }

    if (typeof eval(answer.join("")) == "undefined") {
      display.innerHTML = 0;
    }
  };
});
