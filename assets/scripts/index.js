import { genesisDeadList, genesisList } from './participants.js'

let participantsList = genesisList()
let deadList = genesisDeadList()

const cannonButton = document.querySelector(".cannon")
const geth2 = document.querySelector(".result")
const getAliveUL = document.querySelector(".listName")
const getDeadUL = document.querySelector(".deadList")
const getBoat = document.querySelector(".boat2")
const getTextInput = document.querySelector(".textInput")
const getResetButton = document.getElementById('reset')

cannonButton.onclick = runFunctions
getResetButton.onclick = resetLists

for (let i = 0; i < participantsList.length; i++) {
    getAliveUL.innerHTML += `<li>${participantsList[i]}</li>`
}

function runFunctions() {
    cannonSound()
    setTimeout(getRandomValue, 1500)
    setTimeout(fireBoat, 1500)
    setTimeout(resetBoat, 8500)
}

// Sonido del cañón
function cannonSound() {
    let audio = document.getElementById("audio")

    if (audio.paused) {
        audio.play()
    }  
}

// Elegir un valor aleatorio del array al dar click al cañón
const getRandomValue = () => {
    let randomName = Math.floor(Math.random() * participantsList.length)

    printName(randomName)
    removeFromAliveList(randomName)
}

// Imprimir el nombre en el H2 al darle al boton del cañón
function printName(randomName) {
    let chosenParticipant = participantsList[randomName]
    geth2.innerHTML = chosenParticipant
    console.log(randomName)

    addToDeadList(chosenParticipant)
}

// Eliminar el nombre de la lista de vivos y del array
function removeFromAliveList(randomName) {
    participantsList.splice(randomName, 1)
    console.log(participantsList)
    getAliveUL.innerHTML = ""

    for (let i = 0; i < participantsList.length; i++) {
        getAliveUL.innerHTML += `<li>${participantsList[i]}</li>`
    }
}

// Añadir el nombre a la lista de muertos y al array
function addToDeadList(chosenParticipant) {
    deadList.unshift(chosenParticipant)
    console.log(deadList)
    getDeadUL.innerHTML = ""

    for (let i = 0; i < deadList.length; i++) {
        getDeadUL.innerHTML += `<li>${deadList[i]}</li>`
    }
}

// Hacer que el barco arda durante un tiempo cuando el nombre sea elegido
function fireBoat() {
    getBoat.src = "./assets/img/fireboat.png"
}

function resetBoat() {
    getBoat.src = "./assets/img/boat.png"
    geth2.innerHTML = ""
}

// Añadir a la lista de vivos el nombre introducido en el input
getTextInput.addEventListener('keydown', function getInputValue(event) {
    let key = event.keyCode || event.which

    if (key === 13){
        let inputValue = getTextInput.value
        addNameToList(inputValue)
    }
})
function addNameToList(inputValue) {
    participantsList.unshift(inputValue)
    console.log(participantsList)
    getAliveUL.innerHTML = ""

    for (let i = 0; i < participantsList.length; i++){
            getAliveUL.innerHTML += `<li>${participantsList[i]}</li>`
    }

    getTextInput.value = ""
}

// Resetear la lista de participantes al darle al boton de Reset, y vaciar la lista de muertos
function resetLists() {
    participantsList = genesisList()
    deadList = genesisDeadList()

    getAliveUL.innerHTML = ""
    getDeadUL.innerHTML = ""
    geth2.innerHTML = ""

    for (let i = 0; i < participantsList.length; i++){
        getAliveUL.innerHTML += `<li>${participantsList[i]}</li>`
    }

    console.log(participantsList, deadList)
    resetBoat()
}