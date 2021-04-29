import { genesisDeadList, genesisList } from './participants.js';
let participantsList = genesisList();
let deadList = genesisDeadList();

const cannonButton = document.querySelector(".cannon");
const geth2 = document.querySelector(".result");


cannonButton.onclick = functionPack;

function functionPack() {
    cannonSound();
    getRandomName();
    setTimeout(printName, 1500);
    setTimeout(removeFromAliveList, 1500);
}

// Sonido del cañón
function cannonSound() {
    let audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    }  
}

// Elegir un valor aleatorio del array al dar click al cañón
function getRandomName() {
    let randomName = participantsList[Math.floor(Math.random() * participantsList.length)];
    return randomName;
}

// Imprimir el nombre en el H2 al darle al boton del cañón
function printName() {
    const useRandomName = getRandomName();
    console.log(useRandomName);
    geth2.innerHTML = useRandomName;
    return useRandomName;
    /* setTimeout(() => {
        geth2.innerHTML = `${lista[randomValue]}`
        lista.splice(randomValue, 1)
        getUl.innerHTML = ""
        for (let i = 0; i < lista.length; i++){
        getUl.innerHTML += `<li>${lista[i]}</li>`
    }}, 1500); */
}

// Eliminar el nombre de la lista de vivos y del array
function removeFromAliveList() {
    participantsList.splice(printName(), 1);
    console.log(participantsList);
}

// Añadir el nombre a la lista de muertos y al array

// Hacer que el barco arda durante un tiempo cuando el nombre sea elegido

// Añadir a la lista de vivos el nombre introducido en el input

// Resetear la lista de participantes al darle al boton de Reset, y vaciar la lista de muertos
