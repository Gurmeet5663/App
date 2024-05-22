let el = document.getElementById("input")
//  el.value=7
let buttons = document.querySelectorAll("button")
let string = ""
// console.log(string.length)
let arr = Array.from(buttons)
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        // let value=document.getElementsByTagName("input").value

        if (string.length == 0 && e.target.innerHTML == "%") {
            el.value = null

        }
        else if (string.length == 0 && e.target.innerHTML == "/") {
            el.value = null

        }
        else if (string.length == 0 && e.target.innerHTML == "*") {
            el.value = null

        }
        else if (string.length == 0 && e.target.innerHTML == "-") {
            el.value = null

        }
        else if (string.length == 0 && e.target.innerHTML == "+") {
            el.value = null

        }
        else if (string.length == 0 && e.target.innerHTML == "=") {
            el.value = null

        }
        else if (string.length == 0 && e.target.innerHTML == "00") {
            el.value = 0

        }

        else if (string.length == 0 && e.target.innerHTML == "0") {
            el.value = 0

        }
        else if (string.length == 0 && e.target.innerHTML == ".") {
            string = "0."
            el.value = string

        }
        else if (string.length == 2 && e.target.innerHTML == ".") {
            // string="0."
            el.value = string

        }
        else if (string[string.length-1] == "/" && e.target.innerHTML == "00") {
            string+=0
            el.value = string

        }
        else if (string[string.length-1] == "*" && e.target.innerHTML == "00") {
            string+=0
            el.value = string

        }
        else if (string[string.length-1] == "-" && e.target.innerHTML == "00") {
            string+=0
            el.value = string
        }
        else if (string[string.length-1] == "+" && e.target.innerHTML == "00") {
            string+=0
            el.value = string
        }
        else if (e.target.innerHTML == "=") {
            string = eval(string)
            el.value = string
        }
        else if (e.target.innerHTML == "AC") {
            string = ""
            el.value = string
        }
        else if (e.target.innerHTML == "DEL") {
            let x = string.length
            x -= 1
            string = string.slice(0, x)
            el.value = string
        }
        else {
            string += e.target.innerHTML
            el.value = string
        }
        // console.log(string.length)
    })
})
var i = 0;
var txt = 'THIS IS A CALCULATER CREATED BY GURMEET SINGH!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("autotype").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
