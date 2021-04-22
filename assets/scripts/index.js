import { participantsList } from './participants.js'

const cannonButton = document.querySelector(".cannon")

//cannonButton.addEventListener('click', )

function chooseName() {
    let nameChosen = participantsList[Math.floor(Math.random() * participantsList.length)]
    name = return nameChosen
}

chooseName()

console.log(name)