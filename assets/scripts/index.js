import { participantsList } from './participants.js'

const cannonButton = document.querySelector(".cannon")

function functionPack() {
    printRandomName()
    deleteName()
    consolelog()
}

/* function getRandomName() {
    return Math.floor(Math.random() * participantsList.length)
} */

const getRandomName = Math.floor(Math.random() * participantsList.length)

function printRandomName() {
    const geth2 = document.querySelector(".result")
    geth2.innerHTML = ""
    geth2.innerHTML = `${participantsList[getRandomName]}`
}

const deleteName = () => {
    participantsList.splice(getRandomName, 1)
}

cannonButton.onclick = functionPack
function consolelog() {
    console.log(participantsList)
}