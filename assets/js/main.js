let age1 = document.getElementById("age1")
let age2 = document.getElementById("age2")
let differenz = document.getElementById("differenz")

function berechne() {
    console.log(age1.value - age2.value)
    console.log("hi")
    differenz.innerHTML = (age1.value - age2.value)
}