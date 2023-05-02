const arrFirst = [
  {
    keycode: "Backquote",
    class: "button-basic Backquote",
    enContentFirst: "~",
    enContentSecond: "`",
    ruContentFirst: "Ё",
    ruContentSecond: "ё",
  },
  {
    keycode: "Digit1",
    class: "button-basic Digit1",
    enContentFirst: "!",
    enContentSecond: "1",
    ruContentFirst: "!",
    ruContentSecond: "1",
  },
  {
    keycode: "Digit2",
    class: "button-basic Digit2",
    enContentFirst: "@",
    enContentSecond: "2",
    ruContentFirst: '"',
    ruContentSecond: "2",
  },
  {
    keycode: "Digit3",
    class: "button-basic Digit3",
    enContentFirst: "#",
    enContentSecond: "3",
    ruContentFirst: "№",
    ruContentSecond: "3",
  },
  {
    keycode: "Digit4",
    class: "button-basic Digit4",
    enContentFirst: "$",
    enContentSecond: "4",
    ruContentFirst: ";",
    ruContentSecond: "4",
  },
  {
    keycode: "Digit5",
    class: "button-basic Digit5",
    enContentFirst: "%",
    enContentSecond: "5",
    ruContentFirst: "%",
    ruContentSecond: "5",
  },
  {
    keycode: "Digit6",
    class: "button-basic Digit6",
    enContentFirst: ":",
    enContentSecond: "6",
    ruContentFirst: "^",
    ruContentSecond: "6",
  },
  {
    keycode: "Digit7",
    class: "button-basic Digit7",
    enContentFirst: "&",
    enContentSecond: "7",
    ruContentFirst: "?",
    ruContentSecond: "7",
  },
  {
    keycode: "Digit8",
    class: "button-basic Digit8",
    enContentFirst: "*",
    enContentSecond: "8",
    ruContentFirst: "*",
    ruContentSecond: "8",
  },
  {
    keycode: "Digit9",
    class: "button-basic Digit9",
    enContentFirst: "(",
    enContentSecond: "9",
    ruContentFirst: "(",
    ruContentSecond: "9",
  },
  {
    keycode: "Digit0",
    class: "button-basic Digit0",
    enContentFirst: ")",
    enContentSecond: "0",
    ruContentFirst: ")",
    ruContentSecond: "0",
  },
  {
    keycode: "Minus",
    class: "button-basic Minus",
    enContentFirst: "_",
    enContentSecond: "-",
    ruContentFirst: "_",
    ruContentSecond: "-",
  },
  {
    keycode: "Equal",
    class: "button-basic Equal",
    enContentFirst: "+",
    enContentSecond: "=",
    ruContentFirst: "+",
    ruContentSecond: "=",
  },
  {
    keycode: "Backspace",
    class: "button-basic big Backspace",
    enContentFirst: "Backspace",
    enContentSecond: "",
    ruContentFirst: "Backspace",
    ruContentSecond: "",
  },
];

const arrSecond = [
  {
    // atrName: "Tab",
    class: "button-basic medium Tab",
    keycode: "Tab",
    enContentFirst: "Tab",
    enContentSecond: "",
    ruContentFirst: "Tab",
    ruContentSecond: "",
  },
  {
    // atrName: "key-q",
    class: "button-basic KeyQ",
    keycode: "KeyQ",
    enContentFirst: "Q",
    enContentSecond: "q",
    ruContentFirst: "Й",
    ruContentSecond: "й",
  },
  {
    class: "button-basic KeyW",
    keycode: "KeyW",
    enContentFirst: "W",
    enContentSecond: "w",
    ruContentFirst: "Ц",
    ruContentSecond: "ц",
  },
  {
    class: "button-basic KeyE",
    keycode: "KeyE",
    enContentFirst: "E",
    enContentSecond: "e",
    ruContentFirst: "У",
    ruContentSecond: "у",
  },
  {
    class: "button-basic KeyR",
    keycode: "KeyR",
    enContentFirst: "R",
    enContentSecond: "r",
    ruContentFirst: "К",
    ruContentSecond: "к",
  },
  {
    class: "button-basic KeyT",
    keycode: "KeyT",
    enContentFirst: "T",
    enContentSecond: "t",
    ruContentFirst: "Е",
    ruContentSecond: "е",
  },
  {
    class: "button-basic KeyY",
    keycode: "KeyY",
    enContentFirst: "Y",
    enContentSecond: "y",
    ruContentFirst: "Н",
    ruContentSecond: "н",
  },
  {
    class: "button-basic KeyU",
    keycode: "KeyU",
    enContentFirst: "U",
    enContentSecond: "u",
    ruContentFirst: "Г",
    ruContentSecond: "г",
  },
  {
    class: "button-basic KeyI",
    keycode: "KeyI",
    enContentFirst: "I",
    enContentSecond: "i",
    ruContentFirst: "Ш",
    ruContentSecond: "ш",
  },
  {
    class: "button-basic KeyO",
    keycode: "KeyO",
    enContentFirst: "O",
    enContentSecond: "o",
    ruContentFirst: "Щ",
    ruContentSecond: "щ",
  },
  {
    class: "button-basic KeyP",
    keycode: "KeyP",
    enContentFirst: "P",
    enContentSecond: "p",
    ruContentFirst: "З",
    ruContentSecond: "з",
  },
  {
    class: "button-basic BracketLeft",
    keycode: "BracketLeft",
    enContentFirst: "{",
    enContentSecond: "[",
    ruContentFirst: "Х",
    ruContentSecond: "х",
  },
  {
    class: "button-basic BracketRight",
    keycode: "BracketRight",
    enContentFirst: "}",
    enContentSecond: "]",
    ruContentFirst: "Ъ",
    ruContentSecond: "ъ",
  },
  {
    class: "button-basic Backslash",
    keycode: "Backslash",
    enContentFirst: "|",
    enContentSecond: "&#92",
    ruContentFirst: "/",
    ruContentSecond: "&#92",
  },
  {
    class: "button-basic medium Delete",
    keycode: "Delete",
    enContentFirst: "Del",
    enContentSecond: "",
    ruContentFirst: "Del",
    ruContentSecond: "",
  },
];

const arrThird = [
  {
    class: "button-basic medium CapsLock",
    keycode: "CapsLock",
    enContentFirst: "Caps Lock",
    enContentSecond: "",
    ruContentFirst: "Caps Lock",
    ruContentSecond: "",
  },
  {
    class: "button-basic KeyA",
    keycode: "KeyA",
    enContentFirst: "A",
    enContentSecond: "a",
    ruContentFirst: "Ф",
    ruContentSecond: "ф",
  },
  {
    class: "button-basic KeyS",
    keycode: "KeyS",
    enContentFirst: "S",
    enContentSecond: "s",
    ruContentFirst: "Ы",
    ruContentSecond: "ы",
  },
  {
    class: "button-basic KeyD",
    keycode: "KeyD",
    enContentFirst: "D",
    enContentSecond: "d",
    ruContentFirst: "В",
    ruContentSecond: "в",
  },
  {
    class: "button-basic KeyF",
    keycode: "KeyF",
    enContentFirst: "F",
    enContentSecond: "f",
    ruContentFirst: "А",
    ruContentSecond: "а",
  },
  {
    class: "button-basic KeyG",
    keycode: "KeyG",
    enContentFirst: "G",
    enContentSecond: "g",
    ruContentFirst: "П",
    ruContentSecond: "п",
  },
  {
    class: "button-basic KeyH",
    keycode: "KeyH",
    enContentFirst: "H",
    enContentSecond: "h",
    ruContentFirst: "Р",
    ruContentSecond: "р",
  },
  {
    class: "button-basic KeyJ",
    keycode: "KeyJ",
    enContentFirst: "J",
    enContentSecond: "j",
    ruContentFirst: "О",
    ruContentSecond: "о",
  },
  {
    class: "button-basic KeyK",
    keycode: "KeyK",
    enContentFirst: "K",
    enContentSecond: "k",
    ruContentFirst: "Л",
    ruContentSecond: "л",
  },
  {
    class: "button-basic KeyL",
    keycode: "KeyL",
    enContentFirst: "L",
    enContentSecond: "l",
    ruContentFirst: "Д",
    ruContentSecond: "д",
  },
  {
    class: "button-basic Semicolon",
    keycode: "Semicolon",
    enContentFirst: ":",
    enContentSecond: ";",
    ruContentFirst: "Ж",
    ruContentSecond: "ж",
  },
  {
    class: "button-basic Quote",
    keycode: "Quote",
    enContentFirst: '"',
    enContentSecond: "'",
    ruContentFirst: "Э",
    ruContentSecond: "э",
  },
  {
    class: "button-basic big Enter",
    keycode: "Enter",
    enContentFirst: "Enter",
    enContentSecond: "",
    ruContentFirst: "Enter",
    ruContentSecond: "",
  },
];

const arrFourth = [
  {
    class: "button-basic medium ShiftLeft",
    keycode: "ShiftLeft",
    enContentFirst: "Shift",
    enContentSecond: "",
    ruContentFirst: "Shift",
    ruContentSecond: "",
  },
  {
    class: "button-basic IntlBackslash",
    keycode: "IntlBackslash",
    enContentFirst: "|",
    enContentSecond: "&#92",
    ruContentFirst: "/",
    ruContentSecond: "&#92",
  },
  {
    class: "button-basic KeyZ",
    keycode: "KeyZ",
    enContentFirst: "Z",
    enContentSecond: "z",
    ruContentFirst: "Я",
    ruContentSecond: "я",
  },
  {
    class: "button-basic KeyX",
    keycode: "KeyX",
    enContentFirst: "X",
    enContentSecond: "x",
    ruContentFirst: "Ч",
    ruContentSecond: "ч",
  },
  {
    class: "button-basic KeyC",
    keycode: "KeyC",
    enContentFirst: "C",
    enContentSecond: "c",
    ruContentFirst: "С",
    ruContentSecond: "с",
  },
  {
    class: "button-basic KeyV",
    keycode: "KeyV",
    enContentFirst: "V",
    enContentSecond: "v",
    ruContentFirst: "М",
    ruContentSecond: "м",
  },
  {
    class: "button-basic KeyB",
    keycode: "KeyB",
    enContentFirst: "B",
    enContentSecond: "b",
    ruContentFirst: "И",
    ruContentSecond: "и",
  },
  {
    class: "button-basic KeyN",
    keycode: "KeyN",
    enContentFirst: "N",
    enContentSecond: "n",
    ruContentFirst: "Т",
    ruContentSecond: "т",
  },
  {
    class: "button-basic KeyM",
    keycode: "KeyM",
    enContentFirst: "M",
    enContentSecond: "m",
    ruContentFirst: "Ь",
    ruContentSecond: "ь",
  },
  {
    class: "button-basic Comma",
    keycode: "Comma",
    enContentFirst: "<",
    enContentSecond: ",",
    ruContentFirst: "Б",
    ruContentSecond: "б",
  },
  {
    class: "button-basic Period",
    keycode: "Period",
    enContentFirst: ">",
    enContentSecond: ".",
    ruContentFirst: "Ю",
    ruContentSecond: "ю",
  },
  {
    class: "button-basic Slash",
    keycode: "Slash",
    enContentFirst: "?",
    enContentSecond: "/",
    ruContentFirst: ",",
    ruContentSecond: ".",
  },
  {
    class: "button-basic ArrowUp",
    keycode: "ArrowUp",
    enContentFirst: "<span class = 'arrow-top english'></span>",
    enContentSecond: "",
    ruContentFirst: "<span class = 'arrow-top russian'></span>",
    ruContentSecond: "",
  },
  {
    class: "button-basic right-shift ShiftRight",
    keycode: "ShiftRight",
    enContentFirst: "Shift",
    enContentSecond: "",
    ruContentFirst: "Shift",
    ruContentSecond: "",
  },
];

const arrFifth = [
  {
    class: "button-basic medium ControlLeft",
    keycode: "ControlLeft",
    enContentFirst: "Ctrl",
    enContentSecond: "",
    ruContentFirst: "Ctrl",
    ruContentSecond: "",
  },
  {
    class: "button-basic MetaLeft",
    keycode: "MetaLeft",
    enContentFirst: "Win",
    enContentSecond: "",
    ruContentFirst: "Win",
    ruContentSecond: "",
  },
  {
    class: "button-basic AltLeft",
    keycode: "AltLeft",
    enContentFirst: "Alt",
    enContentSecond: "",
    ruContentFirst: "Alt",
    ruContentSecond: "",
  },
  {
    class: "button-basic space Space ",
    keycode: "Space",
    enContentFirst: "&nbsp",
    enContentSecond: "&nbsp",
    ruContentFirst: "&nbsp",
    ruContentSecond: "&nbsp",
  },
  {
    class: "button-basic AltRight",
    keycode: "AltRight",
    enContentFirst: "Alt",
    enContentSecond: "",
    ruContentFirst: "Alt",
    ruContentSecond: "",
  },
  {
    class: "button-basic medium ControlRight",
    keycode: "ControlRight",
    enContentFirst: "Ctrl",
    enContentSecond: "",
    ruContentFirst: "Ctrl",
    ruContentSecond: "",
  },
  {
    class: "button-basic ArrowLeft",
    keycode: "ArrowLeft",
    enContentFirst: "<span class = 'arrow-left english'></span>",
    enContentSecond: "",
    ruContentFirst: "<span class = 'arrow-left russian'></span>",
    ruContentSecond: "",
  },
  {
    class: "button-basic ArrowDown",
    keycode: "ArrowDown",
    enContentFirst: "<span class = 'arrow-down english'></span>",
    enContentSecond: "",
    ruContentFirst: "<span class = 'arrow-down russian'></span>",
    ruContentSecond: "",
  },
  {
    class: "button-basic ArrowRight",
    keycode: "ArrowRight",
    enContentFirst: "<span class = 'arrow-right english'></span>",
    enContentSecond: "",
    ruContentFirst: "<span class = 'arrow-right russian'></span>",
    ruContentSecond: "",
  },
];

function createPage() {
  const body = document.querySelector(".body");
  const container = document.createElement("main");
  const textarea = document.createElement("textarea");
  const keyboard = document.createElement("section");
  const info = document.createElement("div");
  const contentInfo = `<p>Windows OS</p>
    <p>To switch between keyboard layouts press Shift + Alt</p>`;
  info.innerHTML = contentInfo;

  container.className = "container";
  textarea.className = "textarea";
  keyboard.className = "keyboard";
  info.className = "info";
  textarea.rows = "10";
  textarea.cols = "80";

  body.appendChild(container);
  container.appendChild(textarea);
  container.appendChild(keyboard);
  keyboard.appendChild(createButton(arrFirst));
  keyboard.appendChild(createButton(arrSecond));
  keyboard.appendChild(createButton(arrThird));
  keyboard.appendChild(createButton(arrFourth));
  keyboard.appendChild(createButton(arrFifth));
  container.appendChild(info);

  return body;
}
createPage();

function createButton(arr) {
  const row = document.createElement("div");
  row.className = "row";
  for (let i = 0; i < arr.length; i++) {
    const button = document.createElement("button");
    button.className = arr[i].class;

    const content = `<p class="english">${arr[i].enContentFirst}</p>
      <p class="english">${arr[i].enContentSecond}</p>
      <p class="russian">${arr[i].ruContentFirst}</p>
      <p class="russian">${arr[i].ruContentSecond}</p>`;
    button.innerHTML = content;
    row.appendChild(button);
  }

  return row;
}

const keyboard = document.querySelector(".keyboard");
const textarea = document.querySelector(".textarea");

function keyboardButtonActive(arr) {
  document.addEventListener("keydown", () => {
    let classItem = "";
    for (let i = 0; i < arr.length; i++) {
      if (event.code === arr[i].keycode) {
        classItem = `${classItem}${"."}${arr[i].keycode}`;
        const pressedButton = document.querySelector(classItem);
        pressedButton.classList.add("pressed");
      }
    }
  });
  document.addEventListener("keyup", () => {
    let classItem = "";
    for (let i = 0; i < arr.length; i++) {
      if (event.code === arr[i].keycode) {
        classItem = `${classItem}${"."}${arr[i].keycode}`;
        const pressedButton = document.querySelector(classItem);
        pressedButton.classList.remove("pressed");
      }
    }
  });
}

keyboardButtonActive(arrFirst);
keyboardButtonActive(arrSecond);
keyboardButtonActive(arrThird);
keyboardButtonActive(arrFourth);
keyboardButtonActive(arrFifth);

let result = "";
const buttonCaps = document.querySelector(".CapsLock");
const capsLockKey = () => {
  if (event.code === "CapsLock") {
    buttonCaps.classList.toggle("focus");
  }
};

const capsLockClick = () => {
  buttonCaps.classList.toggle("focus");
};

const en = (event) => {
  const buttonCapsFocus = document.querySelector(".CapsLock.focus");
  if (buttonCapsFocus) {
    const button = event.target.closest(".button-basic");
    result = `${result}${button.childNodes[2].innerText.toUpperCase()}`;
    textarea.innerText = `${textarea.innerText}${result}`;
  } else {
    const button = event.target.closest(".button-basic");
    result = `${result}${button.childNodes[2].innerText}`;
    textarea.innerText = `${textarea.innerText}${result}`;
  }
};

const ru = (event) => {
  const buttonCapsFocus = document.querySelector(".CapsLock.focus");
  if (buttonCapsFocus) {
    const button = event.target.closest(".button-basic");
    result = `${result}${button.childNodes[6].innerText.toUpperCase()}`;
    textarea.innerText = `${textarea.innerText}${result}`;
  } else {
    const button = event.target.closest(".button-basic");
    result = `${result}${button.childNodes[6].innerText}`;
    textarea.innerText = `${textarea.innerText}${result}`;
  }
};

const enKey = () => {
  const resultArr = [
    ...arrFirst,
    ...arrSecond,
    ...arrThird,
    ...arrFourth,
    ...arrFifth,
  ];
  const buttonCapsFocus = document.querySelector(".CapsLock.focus");
  if (buttonCapsFocus) {
    let classItem = "";
    for (let i = 0; i < resultArr.length; i++) {
      if (event.code === resultArr[i].keycode) {
        classItem = `${classItem}${"."}${resultArr[i].keycode}`;
        const button = document.querySelector(classItem);
        result = `${result}${button.childNodes[2].innerText.toUpperCase()}`;
        textarea.innerText = `${textarea.innerText}${result}`;
      }
    }
  } else {
    let classItem = "";
    for (let i = 0; i < resultArr.length; i++) {
      if (event.code === resultArr[i].keycode) {
        classItem = `${classItem}${"."}${resultArr[i].keycode}`;
        const button = document.querySelector(classItem);
        result = `${result}${button.childNodes[2].innerText}`;
        textarea.innerText = `${textarea.innerText}${result}`;
      }
    }
  }
};

const ruKey = () => {
  const resultArr = [
    ...arrFirst,
    ...arrSecond,
    ...arrThird,
    ...arrFourth,
    ...arrFifth,
  ];
  const buttonCapsFocus = document.querySelector(".CapsLock.focus");
  if (buttonCapsFocus) {
    let classItem = "";
    for (let i = 0; i < resultArr.length; i++) {
      if (event.code === resultArr[i].keycode) {
        classItem = `${classItem}${"."}${resultArr[i].keycode}`;
        const button = document.querySelector(classItem);
        result = `${result}${button.childNodes[6].innerText.toUpperCase()}`;
        textarea.innerText = `${textarea.innerText}${result}`;
      }
    }
  } else {
    let classItem = "";
    for (let i = 0; i < resultArr.length; i++) {
      if (event.code === resultArr[i].keycode) {
        classItem = `${classItem}${"."}${resultArr[i].keycode}`;
        const button = document.querySelector(classItem);
        result = `${result}${button.childNodes[6].innerText}`;
        textarea.innerText = `${textarea.innerText}${result}`;
      }
    }
  }
};

const english = document.querySelectorAll(".english");
const russian = document.querySelectorAll(".russian");

function switchLanguage() {
  english.forEach((el) => el.classList.toggle("english-inactive"));
  russian.forEach((el) => el.classList.toggle("russian-active"));
  const englishInactive = document.querySelector(".english-inactive");

  if (!englishInactive) {
    document.addEventListener("keyup", capsLockKey);
    buttonCaps.addEventListener("click", capsLockClick);
    keyboard.removeEventListener("click", ru);
    keyboard.addEventListener("click", en);
    document.removeEventListener("keydown", ruKey);
    document.addEventListener("keydown", enKey);
  } else {
    document.addEventListener("keyup", capsLockKey);
    buttonCaps.addEventListener("click", capsLockClick);
    keyboard.removeEventListener("click", en);
    keyboard.addEventListener("click", ru);
    document.removeEventListener("keydown", enKey);
    document.addEventListener("keydown", ruKey);
  }
}

function runOnKeys(func, ...args) {
  let arrChars = [];

  document.addEventListener("keydown", function (event) {
    if (event.repeat) return;
    arrChars.push(event.code);
  });

  document.addEventListener("keyup", function () {
    if (arrChars.length == 0) return;

    let runFunc = true;
    for (let arg of args) {
      if (!arrChars.includes(arg)) {
        runFunc = false;
        break;
      }
    }
    if (runFunc) switchLanguage();

    arrChars.length = 0;
  });
}

runOnKeys(switchLanguage(), "ShiftLeft", "AltLeft");
