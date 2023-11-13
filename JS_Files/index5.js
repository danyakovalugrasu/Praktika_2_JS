const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
var check = true;
buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = "";
            check = true;
        } else if (item.id == "backspace") {
            let string = display.innerText.toString();
            if (display.innerText.slice(-1) != "." && check == false)
            {
                check = true;
            }
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && item.id == "equal") {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        } else if (item.id == "0" || item.id == "1" || item.id == "2" || item.id == "3" || item.id == "4" || item.id == "5" || item.id == "6" || item.id == "7" || item.id == "8" || item.id == "9") {
            display.innerText += item.id;
        }
        else if ((item.id == "+" || item.id == "-" || item.id == "*" || item.id == "/") && display.innerText != "") {
            check = true;
            if (display.innerText.slice(-1) != "+" && display.innerText.slice(-1) != "-" && display.innerText.slice(-1) != "*" && display.innerText.slice(-1) != "/")
            {
                display.innerText += item.id;
            }
            else
            {
                let string = display.innerText.toString();
                display.innerText = string.substr(0, string.length - 1);
                display.innerText += item.id;
            }
        }
        else if (item.id == "." && display.innerText != "" && display.innerText.slice(-1) != "." && display.innerText.slice(-1) != "+" && display.innerText.slice(-1) != "-" && display.innerText.slice(-1) != "*" && display.innerText.slice(-1) != "/" && check == true)
        {
                display.innerText += item.id;
                check = false;
        }
    };
});