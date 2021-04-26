import { participantsList } from './participants.js'

for (let item = 0; item < participantsList.length; item++) {
    let getUl = document.querySelector(".listName")
    getUl.innerHTML += `<li>${participantsList[item]}</li>`
}

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
    for (let item = 0; item < lista.length; item++) {
        let getUl = document.querySelector(".listName")
        getUl.innerHTML = ""
        getUl.innerHTML += `<li>${lista[item]}</li>`
        
    }
}

function consolelog() {
    console.log(participantsList)
}

cannonButton.onclick = functionPack


let getResetButton = document.getElementById('reset')
getResetButton.onclick = functionReset

function functionReset() {
    participantsList = ["Cris"]
    participantsList = ["David S", "Diego", "Cris", "Snezhanna", "Abdulha", "David H", 
    "Alexandra", "Andrés", "Andrea C", "Andrea S", "Gabriela", "Gabi", "Amr", "Anya", "Armando", 
    "Berta", "Franco", "Jael", "Joan", "Jose Miguel", "Leah", "Martín", "Solomon", "Sergio", 
    "Thierno"]
}

