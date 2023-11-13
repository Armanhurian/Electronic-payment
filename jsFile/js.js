
$(function () {
    $('#creditCardDigit').keyup(function (e) {
        var ctrlKey = 67, vKey = 86;
        if (e.keyCode != ctrlKey && e.keyCode != vKey) {
            $('#creditCardDigit').val(persianToEnglish($(this).val()));
        }
    });
});
function persianToEnglish(input) {
    var inputstring = input;
    var persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
    var english = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    for (var i = 0; i < 10; i++) {
        var regex = new RegExp(english[i], 'g');
        inputstring = inputstring.toString().replace(regex, persian[i]);
    }
    return inputstring;
}
$(function () {
    $('#cvv2Digit').keyup(function (e) {
        var ctrlKey = 67, vKey = 86;
        if (e.keyCode != ctrlKey && e.keyCode != vKey) {
            $('#cvv2Digit').val(persianToEnglish($(this).val()));
        }
    });
});
function persianToEnglish(input) {
    var inputstring = input;
    var persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
    var english = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    for (var i = 0; i < 10; i++) {
        var regex = new RegExp(english[i], 'g');
        inputstring = inputstring.toString().replace(regex, persian[i]);
    }
    return inputstring;
}
$(function () {
    $('#expireMonthDigit').keyup(function (e) {
        var ctrlKey = 67, vKey = 86;
        if (e.keyCode != ctrlKey && e.keyCode != vKey) {
            $('#expireMonthDigit').val(persianToEnglish($(this).val()));
        }
    });
});
function persianToEnglish(input) {
    var inputstring = input;
    var persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
    var english = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    for (var i = 0; i < 10; i++) {
        var regex = new RegExp(english[i], 'g');
        inputstring = inputstring.toString().replace(regex, persian[i]);
    }
    return inputstring;
}
$(function () {
    $('#expireYearDigit').keyup(function (e) {
        var ctrlKey = 67, vKey = 86;
        if (e.keyCode != ctrlKey && e.keyCode != vKey) {
            $('#expireYearDigit').val(persianToEnglish($(this).val()));
        }
    });
});
function persianToEnglish(input) {
    var inputstring = input;
    var persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
    var english = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    for (var i = 0; i < 10; i++) {
        var regex = new RegExp(english[i], 'g');
        inputstring = inputstring.toString().replace(regex, persian[i]);
    }
    return inputstring;
}
$(function () {
    $('#captchaDigit').keyup(function (e) {
        var ctrlKey = 67, vKey = 86;
        if (e.keyCode != ctrlKey && e.keyCode != vKey) {
            $('#captchaDigit').val(persianToEnglish($(this).val()));
        }
    });
});
function persianToEnglish(input) {
    var inputstring = input;
    var persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
    var english = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    for (var i = 0; i < 10; i++) {
        var regex = new RegExp(english[i], 'g');
        inputstring = inputstring.toString().replace(regex, persian[i]);
    }
    return inputstring;
}
$(function () {
    $('#secretCodeDigit').keyup(function (e) {
        var ctrlKey = 67, vKey = 86;
        if (e.keyCode != ctrlKey && e.keyCode != vKey) {
            $('#secretCodeDigit').val(persianToEnglish($(this).val()));
        }
    });
});
function persianToEnglish(input) {
    var inputstring = input;
    var persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
    var english = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    for (var i = 0; i < 10; i++) {
        var regex = new RegExp(english[i], 'g');
        inputstring = inputstring.toString().replace(regex, persian[i]);
    }
    return inputstring;
}
$(function () {
    $('#emailDigit').keyup(function (e) {
        var ctrlKey = 67, vKey = 86;
        if (e.keyCode != ctrlKey && e.keyCode != vKey) {
            $('#emailDigit').val(persianToEnglish($(this).val()));
        }
    });
});
function persianToEnglish(input) {
    var inputstring = input;
    var persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
    var english = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    for (var i = 0; i < 10; i++) {
        var regex = new RegExp(english[i], 'g');
        inputstring = inputstring.toString().replace(regex, persian[i]);
    }
    return inputstring;
}
$(function () {
    $('#mobileDigit').keyup(function (e) {
        var ctrlKey = 67, vKey = 86;
        if (e.keyCode != ctrlKey && e.keyCode != vKey) {
            $('#mobileDigit').val(persianToEnglish($(this).val()));
        }
    });
});
function persianToEnglish(input) {
    var inputstring = input;
    var persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
    var english = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    for (var i = 0; i < 10; i++) {
        var regex = new RegExp(english[i], 'g');
        inputstring = inputstring.toString().replace(regex, persian[i]);
    }
    return inputstring;
}