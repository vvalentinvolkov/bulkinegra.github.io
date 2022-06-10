let session_start = 0
$( document ).ready(function() {
    session_start = new Date().getTime()
});
let tg = Telegram.WebApp
tg.ready();
tg.expand(); //расширяем на все окно
tg.MainButton.text = "Задать вопрос"; //изменяем текст кнопки
tg.MainButton.textColor = "#ffffff"; //изменяем цвет текста кнопки
tg.MainButton.color = "#e88542"; //изменяем цвет бэкграунда кнопки

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    let session_end = new Date().getTime()
    tg.sendData(JSON.stringify({'session_time': session_end-session_start}));
});
// Usual js
