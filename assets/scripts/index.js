import { genesisList } from './participants.js'
let participantsList = genesisList()

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

cannonButton.onclick = functionPack

function functionPack() {
    getRandomName(participantsList)
    fireBoat()
    deleteName(participantsList)
    consolelog()
    soundCannon()
}

function fireBoat() {
    let getBoat = document.querySelector(".boat2")
    getBoat.src = "./assets/img/fireboat.png"
}

function getRandomName(lista) {
    let randomValue = Math.floor(Math.random() * lista.length)
    return randomValue
}

const geth2 = document.querySelector(".result")
function deleteName(lista) {
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



let getResetButton = document.getElementById('reset')
getResetButton.onclick = functionReset

function functionReset() {
    participantsList = genesisList()
    getUl.innerHTML = ""
    for (let i = 0; i < genesisList.length; i++){
        getUl.innerHTML += `<li>${genesisList[i]}</li>`
    }
    console.log(participantsList)
    geth2.innerHTML = ""
}


// Selecciona el input, le añade un Event Listener que recoja el valor del input 
// sólo cuando se presione Enter (13)
let getInput = document.querySelector(".textInput")
getInput.addEventListener('keydown', function getInputValue(event) {
    let key = event.keyCode || event.which
    if (key === 13){
        let inputValue = getInput.value
        /* addNameToList()
        return inputValue */
        participantsList.push(inputValue)
        console.log(participantsList)
        getUl.innerHTML = ""
        for (let i = 0; i < participantsList.length; i++){
            getUl.innerHTML += `<li>${participantsList[i]}</li>`
        }
    }
})

/* function addNameToList() {
    console.log(getInputValue())
    participantsList.push(inputValue)
} */

function soundCannon() {
    var audio = document.getElementById("audio")
    if (audio.paused) audio.play()
    else audio.pause()
}
