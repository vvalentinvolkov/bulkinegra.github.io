"use strict";

// Форма
var num_re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
var USER_NUMBER = '';
var USER_NAME = '';
var TOKEN = '1948289363:AAHykYddeRc8d8HhLvq_OKuU9tPxqlJBqDA';
var CHAT_ID = '-552408271';
var user_number_check = false;
var user_name_check = false;

function send() {
  console.log('sendMsg');
  var response = fetch('https://api.telegram.org/bot' + TOKEN + '/sendMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      parse_mode: 'Markdown',
      text: 'Имя: ' + USER_NAME + '\n' + 'Телефон: ' + USER_NUMBER
    })
  });
  document.location.href = "thanks.html";
}

function sendMsgToTel() {
  if (user_number_check && validName) {
    send();
  } else if (!user_name_check) {
    alert('Введите имя');
  } else {
    alert('Не коректный номер телефона');
  }
}

function validNumber(value) {
  USER_NUMBER = value;
  user_number_check = num_re.test(USER_NUMBER);
}

function validName(value) {
  USER_NAME = value;
  user_name_check = USER_NAME != '';
} // Прокрутка с главной
// function handleArrayClick() {
//     var el = document.getElementById('blockScrollTo');
//     // el.scrollIntoView({block: "start", behavior: "smooth"});
//     scroll(0, 500)
// }
// Фиксация размера главной картинки


var main_img = document.getElementById('main_omg');
main_img.style.height = main_img.clientHeight.toString() + 'px';
console.log(main_img.clientHeight);