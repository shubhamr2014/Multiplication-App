const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

const qE1 = document.getElementById("question")

qE1.innerText = "What is " + num1 + " x " + num2 + " ? "

const correctAns = num1 * num2

let score = JSON.parse(localStorage.getItem("score"))

if (!score) {
    score = 0
}

const formE1 = document.getElementById("form")
const inputE1 = document.getElementById("input")
const socreE1 = document.getElementById("score")

socreE1.innerText = "Score: " + score

formE1.addEventListener("submit", () => {
    const userAns = +inputE1.value
    if (userAns === correctAns) {
        score++
        updateLocalStorage()
    }
    else {
        score--
        updateLocalStorage()
    }
})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}