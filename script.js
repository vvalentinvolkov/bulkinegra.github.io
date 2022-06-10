let session_start = 0
$( document ).ready(function() {
    session_start = new Date().getTime()
});
Telegram.WebApp.ready();
    Telegram.WebApp.MainButton.setText('Get contact').show().onClick(function () {
        let session_end = new Date().getTime()
        Telegram.WebApp.sendData(JSON.stringify({'session_time': session_end-session_start}));
        Telegram.WebApp.close();
    });
// Usual js
