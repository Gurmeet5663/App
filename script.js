let el = document.getElementById("input")
//  el.value=7
let buttons = document.querySelectorAll("button")
let string = ""
// let num= parseInt(String)
// console.log(typeof num)
// console.log(string.length)
let arr = Array.from(buttons)
arr.forEach(function(button){
    button.addEventListener("click", (e) => {
        // let value=document.getElementsByTagName("input").value
       var y=string.length
       var z=e.target.innerHTML
        if (y == 0 && z == "%") {
            el.value = null

        }
        else if (y == 0 && z == "/") {
            el.value = null

        }
        else if (y == 0 && z == "*") {
            el.value = null

        }
        else if (y == 0 && z == "-") {
            el.value = null

        }
        else if (y == 0 && z == "+") {
            el.value = null

        }
        else if (string.length == 0 && z == "=") {
            el.value = null

        }
        else if (y == 0 && z == "00") {
            el.value = 0

        }
   
        else if (string.length == 0 && z == "0") {
            el.value = 0

        }
        else if (y == 0 && z == ".") {
            string = "0."
            el.value = string

        }
        else if (y == 2 && z == ".") {
            // string="0."
            el.value = string

        }
        else if (string[y-1] == "/" && z == "00") {
            string+=0
            el.value = string

        }
        else if (string[y-1] == "*" && z == "00") {
            string+=0
            el.value = string

        }
        else if (string[y-1] == "-" && z == "00") {
            string+=0
            el.value = string
        }
        else if (string[y-1] == "+" && z == "00") {
            string+=0
            el.value = string
        }
        // else if ((string[string.length-1] == "%"||[string.length-1] == "/"||[string.length-1] == "*"||[string.length-1] == "-"||[string.length-1] == "+"||[string.length-1] == ".") && (e.target.innerHTML == "+")) {
        //     string+=
        //     el.value = string
        // }
        else if (z == "=") {
            string = eval(string)
            el.value = string
        }
        else if (z == "AC") {
            string = ""
            el.value = string
        }
        else if (z == "DEL") {
            let x = y
            x -= 1
            string = string.slice(0, x)
            el.value = string
        }
        else {
            string += z
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