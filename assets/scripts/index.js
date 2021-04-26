import { participantsList } from './participants.js'

const cannonButton = document.querySelector(".cannon")

function functionPack() {
    getRandomName(participantsList)
    fireBoat()
    //printRandomName()
    //deleteName()
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

//let getRandomName = Math.floor(Math.random() * participantsList.length)

function printRandomName() {
    const geth2 = document.querySelector(".result")
    geth2.innerHTML = ""
    geth2.innerHTML = `${participantsList[getRandomName()]}`
}

function deleteName() {
    participantsList.splice(getRandomName(), 1)
}

function consolelog() {
    console.log(participantsList)
}

cannonButton.onclick = functionPack

