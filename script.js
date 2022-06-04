Telegram.WebApp.ready();
data_to_bot = ''
$('.item').click(function () {
    data_to_bot = $(this).text() + ' item!'
    console.log(data_to_bot)
});
Telegram.WebApp.MainButton.setText('Choose item').show().onClick(function () {
    const data = 'some item number';
    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
});
Telegram.WebApp.expand();
