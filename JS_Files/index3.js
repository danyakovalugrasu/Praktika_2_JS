// 1
document.querySelector("#button_part1").onclick = function () {
    var result_1 = document.getElementById("result1")
    let users = [
        {name: "Иван", age: 30},
        {name: "Пётр", age: 14},
        {name: "Гена", age: 56},
        {name: "Алёна", age: 18}
    ];
    let res = getNameAge(users);
    for (let i = 0; i < users.length; i++)
    {
        result_1.innerHTML += res[i] + "<br>";
    }
}

// 2
document.querySelector("#button_part2").onclick = function () {
    var result_2 = document.getElementById("tableCreate")
    let cats_1 = [
        {name: "Tomas", color: "Black", sex: "M", age: 1},
        {name: "Rodion", color: "Green", sex: "M", age: 4},
        {name: "Tomas", color: "Blue", sex: "F", age: 3},
        {name: "Tomas", color: "Orange", sex: "F", age: 6},
    ]
    result_2.appendChild(tableBuild(cats_1));
}

// 3
document.querySelector("#button_part3").onclick = function () {
    var result_3 = document.getElementById("result3");
    let number = [1, 2, 3, 4, 5, 6];

    result_3.innerText = umnozhNumber(number);
}

// 4
document.querySelector("#button_part4").onclick = function () {
    var result_4 = document.getElementById("result4");
    let number_2 = [1, 2, 3, 4, 5, 6];

    result_4.innerText = sumNumber(number_2);
}

// 5

document.querySelector("#button_part5").onclick = function () {
    var result_5 = document.getElementById("result5");
    var start = parseInt(document.getElementById("input_start").value);
    var finish = parseInt(document.getElementById("input_finish").value);
    var step = parseInt(document.getElementById("input_step").value);
    if (isNaN(start)|| isNaN(finish))
    {
        alert("Заполните поля!");
    }
    else if (!step || step == 0)
    {
        document.getElementById("input_step").value = 1;
        step = parseInt(document.getElementById("input_step").value);
        alert ("Поле с шагом не было заполнено или значение поля равно нулю. Присовено значение: 1. Нажмите на кнопку снова.");
    }
    else
    {
        if (parseInt(start) > parseInt(finish))
        {
            document.getElementById("input_start").value = finish;
            document.getElementById("input_finish").value = start;
            start = parseInt(document.getElementById("input_start").value);
            finish = parseInt(document.getElementById("input_finish").value);
            result_5.innerHTML = goRange(start, finish, step) + ". Сумма всех элементов: " + sum(goRange(start, finish, step));
        }
        else if (start < finish)
        {
            result_5.innerHTML = goRange(start, finish, step) + ". Сумма всех элементов: " + sum(goRange(start, finish, step));
        }
        else
        {
            result_5.innerHTML = start;
        }
    }
}

// 6
document.querySelector("#button_name").onclick = function () {
    document.getElementById("input_name").disabled = false;
    document.getElementById("input_color").disabled = true;
    document.getElementById("input_sex").disabled = true;
    document.getElementById("input_age").disabled = true;

    document.getElementById("input_name").value = "";
    document.getElementById("input_color").value = "";
    document.getElementById("input_sex").value = "";
    document.getElementById("input_age").value = "";

    document.getElementById("button_part6").disabled = false;
}
document.querySelector("#button_color").onclick = function () {
    document.getElementById("input_name").disabled = true;
    document.getElementById("input_color").disabled = false;
    document.getElementById("input_sex").disabled = true;
    document.getElementById("input_age").disabled = true;

    document.getElementById("input_name").value = "";
    document.getElementById("input_color").value = "";
    document.getElementById("input_sex").value = "";
    document.getElementById("input_age").value = "";

    document.getElementById("button_part6").disabled = false;
}
document.querySelector("#button_sex").onclick = function () {
    document.getElementById("input_name").disabled = true;
    document.getElementById("input_color").disabled = true;
    document.getElementById("input_sex").disabled = false;
    document.getElementById("input_age").disabled = true;

    document.getElementById("input_name").value = "";
    document.getElementById("input_color").value = "";
    document.getElementById("input_sex").value = "";
    document.getElementById("input_age").value = "";

    document.getElementById("button_part6").disabled = false;
}
document.querySelector("#button_age").onclick = function () {
    document.getElementById("input_name").disabled = true;
    document.getElementById("input_color").disabled = true;
    document.getElementById("input_sex").disabled = true;
    document.getElementById("input_age").disabled = false;

    document.getElementById("input_name").value = "";
    document.getElementById("input_color").value = "";
    document.getElementById("input_sex").value = "";
    document.getElementById("input_age").value = "";

    document.getElementById("button_part6").disabled = false;
}

var cats = [
    {name: "Tomas", color: "Black", sex: "M", age: 1},
    {name: "Rodion", color: "Green", sex: "M", age: 4},
    {name: "Tomas", color: "Blue", sex: "F", age: 3},
    {name: "Roman", color: "Orange", sex: "F", age: 6},
    {name: "Rodion", color: "Green", sex: "M", age: 4},
    {name: "Roman", color: "Green", sex: "M", age: 4},
    {name: "Aleksey", color: "Black", sex: "F", age: 6},
    {name: "Aleksey", color: "Green", sex: "M", age: 5},
];
let stroka = "";
for (let i = 0; i < cats.length; i++)
{
    stroka += "Name: " + cats[i].name + ". Color: " + cats[i].color + ". Sex: " + cats[i].sex + ". Age: " + cats[i].age;
    stroka += "<br>";
}
document.getElementById("result6").innerHTML = stroka;

document.querySelector("#button_part6").onclick = function () {
    let result_6 = document.getElementById("result6");
    var name_ = document.getElementById("input_name").value;
    var color_ = document.getElementById("input_color").value;
    var sex_ = document.getElementById("input_sex").value;
    var age_ = document.getElementById("input_age").value;
    if (!name_ && !color_ && !sex_ && !age_)
    {
        alert("Заполните поле!");
    }
    else if (document.getElementById("input_name").disabled == false)
    {
        let arr = filterCats(cats, "name", name_)
        let str = "";
        for (let i = 0; i < arr.length; i++)
        {
            str += "Name: " + arr[i].name + ". Color: " + arr[i].color + ". Sex: " + arr[i].sex + ". Age: " + arr[i].age;
            str += "<br>";
        }
        result_6.innerHTML = str;
    }
    else if (document.getElementById("input_color").disabled == false)
    {
        let arr = filterCats(cats, "color", color_)
        let str = "";
        for (let i = 0; i < arr.length; i++)
        {
            str += "Name: " + arr[i].name + ". Color: " + arr[i].color + ". Sex: " + arr[i].sex + ". Age: " + arr[i].age;
            str += "<br>";
        }
        result_6.innerHTML = str;
    }
    else if (document.getElementById("input_sex").disabled == false)
    {
        let arr = filterCats(cats, "sex", sex_)
        let str = "";
        for (let i = 0; i < arr.length; i++)
        {
            str += "Name: " + arr[i].name + ". Color: " + arr[i].color + ". Sex: " + arr[i].sex + ". Age: " + arr[i].age;
            str += "<br>";
        }
        result_6.innerHTML = str;
    }
    else
    {
        let arr = filterCats(cats, "age", age_)
        let str = "";
        for (let i = 0; i < arr.length; i++)
        {
            str += "Name: " + arr[i].name + ". Color: " + arr[i].color + ". Sex: " + arr[i].sex + ". Age: " + arr[i].age;
            str += "<br>";
        }
        result_6.innerHTML = str;
    }
}

function filterCats(cats, object, enter)
{

    let arr = [];
    for (let objects of cats) {
        let temp = objects[object];
        console.log(enter);
        if (temp == enter)
        {
            arr.push(objects);
            console.log(arr);
        }
    }
    return arr;
}

function sum(arr)
{
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    return sum;
}

function goRange(start, finish, step)
{
    let temp = 1;
    let arr = [];
    if (step > 0)
    {
        arr[0] = parseInt(start);
        while (start <= finish && start + step <= finish)
        {
            arr[temp] = parseInt(start) + parseInt(step);
            start = parseInt(start) + parseInt(step);
            temp++;
        }
        return arr;
    }
    else if (step < 0)
    {
        step *= -1;
        arr[0] = parseInt(finish);
        while (finish >= start && finish - step >= start)
        {
            arr[temp] = parseInt(finish) - parseInt(step);
            finish = parseInt(finish) - parseInt(step);
            console.log(arr)
            temp++;
        }
        return arr;
    }
}

function sumNumber(number_2, i = 0, temp = 0)
{
    if (i == number_2.length)
    {
        return [];
    }
    let start_sum = number_2[i] + temp;
    let nextNumber = sumNumber(number_2, i + 1, start_sum);
    return [start_sum, ...nextNumber];

}

function umnozhNumber(number, i = 0)
{
    if (i == number.length)
    {
        return 1;
    }

    return number[i] * umnozhNumber(number, i + 1);
}

function tableBuild(cats)
{
    let str = "<thead><tr>";

    for (let element of Object.keys(cats[0]))
    {
        str = str + ("<th>" + element + "</th>");
    }
    str += "</tr></thead><tbody>";

    for (let i = 0; i < cats.length; i++)
    {
        str += "<tr>";
        str = str + ("<td>" + cats[i].name + "</td>");
        str = str + ("<td>" + cats[i].color + "</td>");
        str = str + ("<td>" + cats[i].sex + "</td>");
        str = str + ("<td>" + cats[i].age + "</td>");
        str += "</tr>";
    }

    str += "</tbody>";
    let table = document.createElement("table");
    table.innerHTML = str;
    return table;
}


function getNameAge(users)
{
    let users_temp = [];
    let str = "";
    for (let i = 0; i < users.length; i++)
    {
        str = "Имя: " + users[i].name + ", " + "возраст: " + users[i].age;
        users_temp[i] = str;
    }
    return users_temp;
}