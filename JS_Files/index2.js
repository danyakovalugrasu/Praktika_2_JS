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
    result = "";
    for (var i = 1; i <= 5; i++)
    {
        matrix_result[i] = [];
        for (var j = 1; j <= 6; j++)
        {
            matrix_result[i][j] = i * j;
            result += matrix_result[i][j];
            result += " ";
        }
        result += "\n";
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
    for (var i = 1; i <= 5; i++)
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







function truefalse(arr)
{
    for (var i = 1; i <= 5; i++)
    {
        if (arr[i] % 2 != 0)
        {
            return false;
        }
    }
    return true;
}