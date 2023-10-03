//Часть 1.
document.querySelector("#button_part1").onclick = function () {
    let first_name = document.getElementById("input_first_name").value
    let second_name = document.getElementById("input_second_name").value
    let third_name = document.getElementById("input_third_name").value
    let age = document.getElementById("input_age").value

    if (!age || !first_name || !second_name || !third_name)
    {
        alert("Заполните все поля!");
    }

    else if (age < 0)
    {
        alert("Возраст не может быть отрицательным!");
    }

    else
    {
        if (age < 7)
        {
            alert("Привет, " + first_name);
        }
        else if (age >= 7 && age <= 18)
        {
            alert("Здравствуй, " + second_name);
        }
        else if (age > 18)
        {
            alert("Здравствуйте, " + first_name + " " + third_name);
        }
    }
}

//Часть 2.
document.querySelector("#button_part2").onclick = function () {
    let delimoe = document.getElementById("input_delimoe").value
    let delitel = document.getElementById("input_delitel").value

    if (!delimoe || !delitel)
    {
        alert("Заполните все поля!");
    }

    else
    {
        if (delitel != 0) {
            let result = delimoe % delitel
            alert("Остаток от деления числа " + delimoe + " на " + delitel + " равен: " + result);
        }
        else {
            alert("Делитель не может равняться нулю.")
        }
    }
}

//Часть 3.
function checkDay(number_day)
{
    number_day = document.getElementById("input_number_day").value
    if (!number_day)
    {
        alert("Заполните все поля!");
    }
    else if (number_day < 1 || number_day > 7)
    {
        alert("Дня недели с таким порядковым номером не существует!")
    }
    else
    {
        if (number_day == 1)
        {
            alert("Первый по счёту день недели: Понедельник");
        }
        else if (number_day == 2)
        {
            alert("Второй по счёту день недели: Вторник");
        }
        else if (number_day == 3)
        {
            alert("Третий по счёту день недели: Среда");
        }
        else if (number_day == 4)
        {
            alert("Четвёртый по счёту день недели: Четверг");
        }
        else if (number_day == 5)
        {
            alert("Пятый по счёту день недели: Пятница");
        }
        else if (number_day == 6)
        {
            alert("Шестой по счёту день недели: Суббота");
        }
        else
        {
            alert("Седьмой по счёту день недели: Воскресенье");
        }
    }
}

//Часть 4.
document.querySelector("#button_part4").onclick = function () {
    let shirina_vag = document.getElementById("input_shirina_vag").value
    let dlina_vag = document.getElementById("input_dlina_vag").value
    let vysota_vag = document.getElementById("input_vysota_vag").value
    let count_delivery = document.getElementById("input_count_delivery").value

    if (!shirina_vag || !dlina_vag || !vysota_vag || !count_delivery)
    {
        alert("Заполните все поля!")
    }
    else if (shirina_vag <= 0 || dlina_vag <= 0 || vysota_vag <= 0 || count_delivery <= 0)
    {
        alert("Введите значения, которые больше 0.")
    }
    else
    {
        if (result(dlina_vag, shirina_vag, vysota_vag) == 0)
        {
            alert("Коробка не поместится в вагон.");
        }
        else
        {
            alert("Для такого количества заказов потребуется: " + Math.ceil(count_delivery / result(dlina_vag, shirina_vag, vysota_vag)) + " вагона(-ов).");
        }
    }
}

function result(vag_dl, vag_sh, vag_vy)
{
    let result_count;
    result_count = Math.max(count(vag_dl, vag_sh, vag_vy, 30, 40,50), count(vag_dl, vag_sh, vag_vy, 30, 50,40), count(vag_dl, vag_sh, vag_vy, 40, 30,50), count(vag_dl, vag_sh, vag_vy, 40, 50,30), count(vag_dl, vag_sh, vag_vy, 50, 40,30), count(vag_dl, vag_sh, vag_vy, 50, 30,40));
    return result_count;
}

function count(vag_dl, vag_sh, vag_vy, box_dl, box_sh, box_vy)
{
    let count_dl = count_box(vag_dl, box_dl);
    let count_sh = count_box(vag_sh, box_sh);
    let count_vy = count_box(vag_vy, box_vy);
    return count_dl * count_sh * count_vy;
}



function count_box(vag, box)
{
    let result;
    for (result = 0; vag > 0; result++)
    {
        if (result == 0)
        {
            if (vag >= box)
            {
                vag -= box;
            }
            else
            {
                break;
            }
        }
        else
        {
            if (vag >= box + 5)
            {
                vag -= box + 5;
            }
            else
            {
                break;
            }
        }
    }
    return result;
}

