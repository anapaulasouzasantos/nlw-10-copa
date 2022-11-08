function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./../assets/${player1}.svg" alt="bandeira ${player1}">

        <strong>${hour}</strong>

        <img src="./../assets/${player2}.svg" alt="bandeira ${player2}">
    </li>
    `
}

let delay = 0.4

function createCard(date, day, games) {
    delay += 0.4
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>

        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML =
    createCard('20/11', 'domingo', createGame('qatar', '13:00', 'ecuador')) +
    createCard('21/11', 'segunda', createGame('england', '10:00', 'iran') + createGame('senegal', '13:00', 'netherlands')) +
    createCard('24/11', 'quinta', createGame('switzerland', '07:00', 'cameroon') + createGame('uruguay', '10:00', 'south-korea') + createGame('portugal', '13:00', 'ghana') + createGame('brazil', '16:00', 'serbia')) +
    createCard('28/11', 'segunda', createGame('switzerland', '13:00', 'brazil')) +
    createCard('02/12', 'sexta', createGame('brazil', '16:00', 'cameroon'))
