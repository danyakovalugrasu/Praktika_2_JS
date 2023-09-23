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
        let result = delimoe % delitel
        alert("Остаток от деления числа " + delimoe + " на " + delitel + " равен: " + result);
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

    const shirina_box = 30
    const dlina_box = 50
    const vysota_box = 40
    const v_delivery = (shirina_box + 10) * (dlina_box + 10) * (vysota_box + 10)

    if (!shirina_vag || !dlina_vag || !vysota_vag || !count_delivery)
    {
        alert("Заполните все поля!")
    }

    else if (shirina_vag <= 0 || dlina_vag <= 0 || vysota_vag <= 0 || count_delivery <= 0)
    {
        alert("Введите значения, которые больше 0.")
    }

    else {
        let v_vag = shirina_vag * dlina_vag * vysota_vag

        let max_count_delivery = Math.floor(v_vag / v_delivery)
        let count_vag = Math.ceil(count_delivery / max_count_delivery)

        alert("Для отправки всех заказов вам понадобится вагонов: " + count_vag)
    }
}