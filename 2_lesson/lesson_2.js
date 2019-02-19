// Первое задание


var a = 1, b = 1, c, d;

c = ++a;
alert(c); /*префиксный инкремент, увеличит на единицу и затем вернет значение после увеличения
            в переменную читается как c = a + 1 */

d = b++;
alert(d); /* так как инкремент постфиксный, то js в переменную d положит значение переменной b и только при
             следующей операции увеличит переменную d на единицу. */

c = 2 + ++a;
alert(c); /* в переменной уже лежит значение 2, к нему мы прибаляеам двойку и с помощью префиксного инкремента
             увеличиваем на единицу, т. к.  инкремент префиксный, то  в переменную записывается значение после
             выполнения инкремента */

d = 2 + b++;
alert(d); /* в переменной d уже лежит значения 2 (b = b++), плюсуем 2 и записываем в переменную 4,
             увеличение переменной d на единицу произойдет в следующем выражении. */

alert(a); // переменная два раза увеличивалась на единицу
alert(b); // переменная два раза увеличивалась на единицу


//Второе задание


var a = 2;
var x = 1 + (a *= 2); /* a = 4; x = 5;  В первую очередь выполнится оператор группировка(), затем в нем оператор
                       присваивания с умножением переменной a *=, затем сложение и после присваивание значения переменной x. */


//Третье задание

var a = parseInt(-5);
var b = parseInt(3);

if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else if (a < 0 && b >= 0 || a >= 0 && b < 0) {
    alert(a + b);
}

//Четвертое задание

var a = +prompt('Введите число от 1 до 15');
switch (a) {
    case 1:
        alert('Ваше число 1');
        break;
    case 2:
        alert('Ваше число 2');
        break;
    case 3:
        alert('Ваше число 3');
        break;
    case 4:
        alert('Ваше число 4');
        break;
    case 5:
        alert('Ваше число 5');
        break;
    case 6:
        alert('Ваше число 6');
        break;
    case 7:
        alert('Ваше число 7');
        break;
    case 8:
        alert('Ваше число 8');
        break;
    case 9:
        alert('Ваше число 9');
        break;
    case 10:
        alert('Ваше число 10');
        break;
    case 11:
        alert('Ваше число 11');
        break;
    case 12:
        alert('Ваше число 12');
        break;
    case 13:
        alert('Ваше число 13');
        break;
    case 14:
        alert('Ваше число 14');
        break;
    case 15:
        alert('Ваше число 15');
        break;
}

//Пятое задание


var oneNumber = parseFloat(prompt('Введите первое число'));
var twoNumber = parseFloat(prompt('Введите второе число'));
var operation = prompt('Какое арифметическое действие нужно произвести с числами? \n +  -  /  *');


function getSum(a, b) {
    return a + b;
}


function getDeduction(a, b) {
    let minus = a - b;
    return minus;
}


function getDivide(a, b) {
    let divide = a / b;
    return divide;
}


function getMultiply(a, b) {
    let multiply = a * b;
    return multiply;
}


// Шестое задание

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            let sum = getSum(arg1, arg2);
            return sum;
        case '-':
            let minus = getDeduction(arg1, arg2);
            return minus;
        case '/':
            let divide = getDivide(arg1, arg2);
            return divide;
        case '*':
            let multiply = getMultiply(arg1, arg2)
            return multiply;
        default:
            return 'введите один из четырех операторов: +  -  /  *';
    }

}

var total = mathOperation(oneNumber, twoNumber, operation);
alert(total);


//Седьмое задание

alert(null > 0); // false
alert(null == 0); // false

alert(null >= 0); // true

/*Дело в том, что алгоритмы проверки равенства == и сравнения >= > < <= работают по-разному.

  Сравнение честно приводит к числу, получается ноль. А при проверке равенства значения null и undefined обрабатываются особым образом: они равны друг другу, но не равны чему-то ещё. */


//Восьмое задание

function power(val, pow) {
    if (pow != 1) {
        return val * power(val, pow - 1);

    }else {
        return val;
    }
}
alert (power(5,6));


