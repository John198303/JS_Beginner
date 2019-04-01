function validate() {
    var name = document.getElementById('name');
    var nameRegExp = /^[a-zA-Z]|[а-яА-Я]$/;
    var nameTest = nameRegExp.test(name.value);


    if (nameTest === false) {
        name.style.border = '2px solid red';
        document.getElementById('wrong_name').innerHTML = 'Допустимы только буквы';
        return false;
    }

    var tel = document.getElementById('telephone');
    var telRegExp = /^\+\d\(\d{3}\)\d{3}-\d{4}$/;
    var telTest = telRegExp.test(tel.value);

    if (telTest === false) {
        tel.style.border = '2px solid red';
        document.getElementById('wrong_phone').innerHTML = 'Недопустимый формат ввода данных';
        return false;

    }

    var mail = document.getElementById('email');
    var mailRegExp = /^\w+\.?-?\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
    var mailTest = mailRegExp.test(mail.value);

    if (mailTest === false) {
        mail.style.border = '2px solid red';
        document.getElementById('wrong_mail').innerHTML = 'Недопустимый формат ввода данных';
        return false;

    }

    var textEnter = document.getElementById('comments');
    var textRegExp = /^\w+$/;
    var textTest = textRegExp.test(textEnter.value);

    if (textTest === false) {
        textEnter.style.border = '2px solid red';
        document.getElementById('wrong_comments').innerHTML = 'Недопустимый формат ввода данных';
        return false;
    }
}

let drop = $('#drop');

drop.empty();

drop.append('<option selected="true" disabled>Выберите город</option>');
drop.prop('selectedIndex', 1);

const url = 'city.txt';


$.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
        drop.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name));
    })
});







