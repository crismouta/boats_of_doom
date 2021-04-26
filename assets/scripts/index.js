import { participantsList } from './participants.js'

const cannonButton = document.querySelector(".cannon")

function functionPack() {
    getRandomName(participantsList)
    fireBoat()
    consolelog()
}

function fireBoat() {
    let getBoat = document.querySelector(".boat2")
    getBoat.src = "./assets/img/fireboat.png"
}

function getRandomName(lista) {
    let randomValue = Math.floor(Math.random() * lista.length)
    const geth2 = document.querySelector(".result")
    geth2.innerHTML = ""
    geth2.innerHTML = `${lista[randomValue]}`
    lista.splice(randomValue, 1)
}

function consolelog() {
    console.log(participantsList)
}

cannonButton.onclick = functionPack

for (let index = 0; index < participantsList.length; index++) {
    let getUl = document.querySelector(".listName")
    getUl.innerHTML += `<li>${participantsList[index]}</li>`
}

let getResetButton = document.getElementById()

