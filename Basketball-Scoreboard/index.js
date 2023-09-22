let homeBoxEl = document.getElementById("homeBox")
let guestBoxEl = document.getElementById("guestBox")
let homeScore = 0
let guestScore = 0


function updateScore (team, value) {
    if(team ==='home'){
        homeScore += value;
        homeBoxEl.textContent = homeScore;
    } else if(team === 'guest'){
        guestScore += value;
        guestBoxEl.textContent = guestScore;
    }
}