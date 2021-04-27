import { participantsList2 } from './participants.js'
const genesisList = participantsList2()
let participantsList = participantsList2()

/*suma()
function suma() {
    let letras = 'abc'
    let numeros = 4 + 10
    return letras + ' Hola me llamo David ' + numeros
}
console.log(suma())

document.querySelector(".header-title").innerHTML = suma()*/

let getUl = document.querySelector(".listName")
for (let index = 0; index < participantsList.length; index++) {
    getUl.innerHTML += `<li>${participantsList[index]}</li>`
}

const cannonButton = document.querySelector(".cannon")

function functionPack() {
    getRandomName(participantsList)
    fireBoat()
    deleteName(participantsList)
    consolelog()
}

function fireBoat() {
    let getBoat = document.querySelector(".boat2")
    getBoat.src = "./assets/img/fireboat.png"
}

function getRandomName(lista) {
    let randomValue = Math.floor(Math.random() * lista.length)
    return randomValue
}

function deleteName(lista) {
    const geth2 = document.querySelector(".result")
    const randomValue = getRandomName(lista)
    geth2.innerHTML = ""
    geth2.innerHTML = `${lista[randomValue]}`
    lista.splice(randomValue, 1)
    getUl.innerHTML = ""
    for (let i = 0; i < lista.length; i++){
        getUl.innerHTML += `<li>${lista[i]}</li>`
    }
}

function consolelog() {
    console.log(participantsList)
}

cannonButton.onclick = functionPack


let getResetButton = document.getElementById('reset')
getResetButton.onclick = functionReset

function functionReset() {
    participantsList = genesisList
    getUl.innerHTML = ""
    for (let i = 0; i < participantsList.length; i++){
        getUl.innerHTML += `<li>${participantsList[i]}</li>`
    }
}

