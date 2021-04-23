import { participantsList } from './participants.js'

const cannonButton = document.querySelector(".cannon")

function functionPack() {
    getRandomName()
    //printRandomName()
    //deleteName()
    consolelog()
}

function getRandomName() {
    let randomValue = Math.floor(Math.random() * participantsList.length)
    const geth2 = document.querySelector(".result")
    geth2.innerHTML = ""
    geth2.innerHTML = `${participantsList[randomValue]}`
    participantsList.splice(randomValue, 1)
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

