// 1
document.querySelector("#button_part1").onclick = function () {
    var result1 = document.getElementById("result1");
    var result = "";
    for (var i = 1; i < 9; i++)
    {
        for (var j = 1; j < i + 1; j++)
        {
            if (i == j || j == 1)
            {
                result += "#";
            }
            else
            {
                result += "0";
            }
        }
        result += "\n";
    }
    result += "#########";
    result1.innerText = result;
}

// 2
document.querySelector("#button_part2").onclick = function () {
    var result2 = document.getElementById("result2");
    const matrix_result = [];
    var temp = false;
    result = "";
    for (var i = 1; i <= 10; i++)
    {
        matrix_result[i] = [];
        for (var j = 1; j <= 10; j++)
        {
            matrix_result[i][j] = i * j;
            result += matrix_result[i][j];
            result += " ";
            if (j == 6)
            {
                temp = true;
                break;
            }
        }
        result += "\n";
        if (i == 5 && temp == true)
        {
            break
        }
        else
        {
            temp = false;
        }
    }
    result2.innerText = result;
    alert("Работа завершена")
}

// 3
document.querySelector("#button_part3").onclick = function () {
    var arr = [];
    var result3 = document.getElementById("result3");
    var result3_2 = document.getElementById("result3_2");
    result = "";
    for (var i = 1; i <= 3; i++)
    {
        arr[i] = Math.floor(Math.random() * 100);
        result += arr[i];
        result += " ";
    }
    result3.innerText = "Сгенерированный массив: " + result;
    if (truefalse(arr))
    {
        result3_2.innerText = "True";
    }
    else
    {
        result3_2.innerText = "False";
    }
}

// 4
document.querySelector("#button_part4").onclick = function () {
    let count_car = document.getElementById("input_count_car").value;
    temp = 0;
    var result4 = document.getElementById("result4");
    if (!count_car)
    {
        alert("Заполните все поля!");
    }
    else if (count_car <= 0)
    {
        alert("Введите значение, которое больше нуля.")
    }
    else
    {
        for (var i = 1; i <= count_car; i++)
        {
            temp += 1 / i;
        }
        result4.innerText = "Вы сможете провести груз на " + 100 * temp + " киллометров."
    }
}

// 5
document.querySelector("#button_part5").onclick = function () {
    var result5 = document.getElementById("result5");
    let n = document.getElementById("input_n").value;
    temp = 0;
    var count = 0;
    if (!n)
    {
        alert("Заполните все поля!");
    }
    else if (n <= 0)
    {
        alert("Введите значение, которое больше нуля.")
    }
    else
    {
        for (var i = 0; i <= n; i++)
        {
            temp = i.toString();
            for (var temp_2 of temp)
            {
                if (temp_2 == "2")
                {
                    count++;
                }
            }
        }
        result5.innerText = "В данном диапозоне встречается " + count + " двоек."
    }
}

// 6
document.querySelector("#button_part6").onclick = function () {
    var hearts = document.getElementById("input_heart").value;
    var begingame = document.getElementById("begin_game");
    var score_game = document.getElementById("score");
    var count_heart = document.getElementById("count_heart");
    var resulttext = document.getElementById("result_text");
    var result_game = document.getElementById("result_game");
    var input_result = document.getElementById("input_result");
    var button_start = document.getElementById("button_part6");
    var math = document.getElementById("math");
    var button_submit = document.getElementById("submit_result");
    var znaki = ["+", "-", "*", "/"];
    var score = 0;
    var timer = true;

    var number_1;
    var number_2;
    var znak;

    if (!hearts)
    {
        alert("Заполните все поля!");
    }
    else if (hearts <= 0)
    {
        alert("Введите значение, которое больше нуля.");
    }
    else
    {
        input_result.disabled = false;
        button_start.disabled = true;
        button_submit.disabled = false;
        start_game();
        function start_game() {
            if (hearts > 0 && timer == true) {
                begingame.innerText = "Игра запущена"
                score_game.innerText = "Очки: " + score;
                count_heart.innerText = "Количество жизней: " + hearts;
                resulttext.innerText = "Введите ответ: "
                timer = false;
                if (score >= 0 && score <= 3)
                {
                    number_1 = random_chislo(30);
                    number_2 = random_chislo(30);
                    znak = znaki[random_chislo(2)];
                    math.innerText = number_1 + " " + znak + " " + number_2 + " = " + "?";
                    document.querySelector("#submit_result").onclick = function () {
                        var input_result_1 = document.getElementById("input_result").value;
                        if (input_result_1 == get_result(number_1, znak, number_2))
                        {
                            result_game.innerText = "Ответ верный. Продолжаем..."
                            score += 1;
                            timer = true;
                            start_game();
                            document.getElementById("input_result").value = "";
                        }
                        else
                        {
                            result_game.innerText = "Ответ не верный. Жизнь потеряна."
                            hearts -= 1;
                            timer = true;
                            start_game();
                            document.getElementById("input_result").value = "";
                        }
                    }
                }
                else if (score > 3 && score <= 7)
                {
                    number_1 = random_chislo(40);
                    number_2 = random_chislo(40);
                    znak = znaki[random_chislo(2)];
                    math.innerText = number_1 + " " + znak + " " + number_2 + " = " + "?";
                    document.querySelector("#submit_result").onclick = function () {
                        var input_result_1 = document.getElementById("input_result").value;
                        if (input_result_1 == get_result(number_1, znak, number_2))
                        {
                            result_game.innerText = "Ответ верный. Продолжаем..."
                            score += 1;
                            timer = true;
                            start_game();
                            document.getElementById("input_result").value = "";
                        }
                        else
                        {
                            result_game.innerText = "Ответ не верный. Жизнь потеряна."
                            hearts -= 1;
                            timer = true;
                            start_game();
                            document.getElementById("input_result").value = "";
                        }
                    }
                }
                else if (score > 7 && score <= 11)
                {
                    number_1 = random_chislo(50);
                    number_2 = random_chislo(50);
                    znak = znaki[random_chislo(3)];
                    math.innerText = number_1 + " " + znak + " " + number_2 + " = " + "?";
                    document.querySelector("#submit_result").onclick = function () {
                        var input_result_1 = document.getElementById("input_result").value;
                        if (input_result_1 == get_result(number_1, znak, number_2))
                        {
                            result_game.innerText = "Ответ верный. Продолжаем..."
                            score += 1;
                            timer = true;
                            start_game();
                            document.getElementById("input_result").value = "";
                        }
                        else
                        {
                            result_game.innerText = "Ответ не верный. Жизнь потеряна."
                            hearts -= 1;
                            timer = true;
                            start_game();
                            document.getElementById("input_result").value = "";
                        }
                    }
                }
                else if (score > 11 && score <= 15)
                {
                    number_1 = random_chislo(70);
                    number_2 = random_chislo(70);
                    znak = znaki[random_chislo(3)];
                    math.innerText = number_1 + " " + znak + " " + number_2 + " = " + "?";
                    document.querySelector("#submit_result").onclick = function () {
                        var input_result_1 = document.getElementById("input_result").value;
                        if (input_result_1 == get_result(number_1, znak, number_2))
                        {
                            result_game.innerText = "Ответ верный. Продолжаем..."
                            score += 1;
                            timer = true;
                            start_game();
                            document.getElementById("input_result").value = "";
                        }
                        else
                        {
                            result_game.innerText = "Ответ не верный. Жизнь потеряна."
                            hearts -= 1;
                            timer = true;
                            start_game();
                            document.getElementById("input_result").value = "";
                        }
                    }
                }
                else
                {
                    number_1 = random_chislo(100);
                    number_2 = random_chislo(100);
                    znak = znaki[random_chislo(4)];
                    if (znak == "/")
                    {
                        while (number_1 % number_2 != 0 && number_2 != 0)
                        {
                            number_1 = random_chislo(100);
                            number_2 = random_chislo(100);
                        }
                    }
                    start_game();
                    math.innerText = number_1 + " " + znak + " " + number_2 + " = " + "?";
                    document.querySelector("#submit_result").onclick = function () {
                        var input_result_1 = document.getElementById("input_result").value;
                        if (input_result_1 == get_result(number_1, znak, number_2))
                        {
                            result_game.innerText = "Ответ верный. Продолжаем..."
                            score += 1;
                            timer = true;
                            start_game();
                            document.getElementById("input_result").value = "";
                        }
                        else
                        {
                            result_game.innerText = "Ответ не верный. Жизнь потеряна."
                            hearts -= 1;
                            timer = true;
                            start_game();
                            document.getElementById("input_result").value = "";
                        }
                    }
                }
            }
            else if (hearts <= 0)
            {
                result_game.innerText = "Ответ не верный. Вы проиграли."
                begingame.innerText = "Игра окончена."
                score_game.innerText = "Вы набрали: " + score + " очков.";
                count_heart.innerText = "";
                resulttext.innerText = "";
                math.innerText = "";
                button_start.disabled = false;
                button_submit.disabled = true;
                input_result.disabled = true;
            }
        }
    }
}




function get_result(n1, zn, n2)
{
    if (zn == "+")
    {
        return n1 + n2;
    }
    else if (zn == "-")
    {
        return n1 - n2;
    }
    else if (zn == "*")
    {
        return n1 * n2;
    }
    else (zn == "/")
    {
        return n1 / n2;
    }
}
function random_chislo(chislo)
{
    return Math.floor(Math.random() * chislo);
}

function truefalse(arr)
{
    for (var i = 1; i <= 3; i++)
    {
        if (arr[i] % 2 != 0)
        {
            return false;
        }
    }
    return true;
}