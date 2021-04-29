import { genesisDeadList, genesisList } from './participants.js'
 //import { genesisDeadList } from './participants.js'
let participantsList = genesisList()
let deadList = genesisDeadList()

let getUl = document.querySelector(".listName")
for (let index = 0; index < participantsList.length; index++) {
    getUl.innerHTML += `<li>${participantsList[index]}</li>`
}

const cannonButton = document.querySelector(".cannon")

cannonButton.onclick = functionPack

function functionPack() {
    getRandomName()
    soundCannon()
    printName()
    setTimeout(fireBoat, 1500)
    setTimeout(resetBoat, 8500)
    setTimeout(removeFromList, 1500)
    setTimeout(addToDeadList, 1500)
}

let getBoat = document.querySelector(".boat2")
function fireBoat() {
    getBoat.src = "./assets/img/fireboat.png"
    
}

function resetBoat() {
    getBoat.src = "./assets/img/boat.png"
    geth2.innerHTML = ""
}

function getRandomName() {
    let randomValue = Math.floor(Math.random() * participantsList.length)
    return randomValue
}

const geth2 = document.querySelector(".result")
function printName() {
    const randomName = getRandomName()
    geth2.innerHTML = ""
    let participantName = `${participantsList[randomName]}`

    setTimeout(() => { geth2.innerHTML = participantName }, 1500);

    return {
        name: randomName,
        participant: participantName
    }
}

function removeFromList() {
    participantsList.splice(printName.name, 1)
    getUl.innerHTML = ""

    for (let i = 0; i < participantsList.length; i++){
        getUl.innerHTML += `<li>${participantsList[i]}</li>`
    }
}

let getDeadUL = document.querySelector(".deadList")

function addToDeadList(){
    deadList.unshift(printName().participant)
    console.log(deadList)
    getDeadUL.innerHTML = ""
    for (let i = 0; i < deadList.length; i++){
        getDeadUL.innerHTML += `<li>${deadList[i]}</li>`
    }
}

function consolelog() {
    console.log(deadList)
}

let getResetButton = document.getElementById('reset')
getResetButton.onclick = functionReset

function functionReset() {
    participantsList = genesisList()
    deadList = genesisDeadList()
    getDeadUL = ""
    getUl.innerHTML = ""
    for (let i = 0; i < participantsList.length; i++){
        getUl.innerHTML += `<li>${participantsList[i]}</li>`
    }
    console.log(participantsList, deadList)
    geth2.innerHTML = ""
    resetBoat()
}

// Selecciona el input, le añade un Event Listener que recoja el valor del input 
// sólo cuando se presione Enter (13)
let getInput = document.querySelector(".textInput")
getInput.addEventListener('keydown', function getInputValue(event) {
    let key = event.keyCode || event.which
    if (key === 13){
        let inputValue = getInput.value
        addNameToList(inputValue)
    }
})

function addNameToList(inputValue) {
    participantsList.unshift(inputValue)
    console.log(participantsList)
    getUl.innerHTML = ""
    for (let i = 0; i < participantsList.length; i++){
        getUl.innerHTML += `<li>${participantsList[i]}</li>`
    }
    getInput.value = ""
}

function soundCannon() {
    var audio = document.getElementById("audio")
    if (audio.paused) {
        audio.play()
    }
}
