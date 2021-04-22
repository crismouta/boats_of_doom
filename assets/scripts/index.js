import { participantsList } from './participants.js'

const cannonButton = document.querySelector(".cannon")
cannonButton.onclick = printName


// Cuando hago click al cañón:
// Selecciona un nombre aleatorio del array
function selectFromArray(participantsList) {
    let nameChosen = participantsList[Math.floor(Math.random() * participantsList.length)]
    return nameChosen
}

// Borrar el nombre del array
function deleteFromArray(participantsList, elemento) {

    return list
}

// Escribirlo en el h2
function printName() {
    let geth2 = document.querySelector(".result")
    
    geth2.innerHTML = ""
    geth2.innerHTML = nameChosen
}

// Reset


function getInputValue() {
    let inputValue = document.getElementById("foodInput").value
    foodList.push({name: inputValue})
    console.log(foodList)
    renderList()
}

//console.log(nameChosen)