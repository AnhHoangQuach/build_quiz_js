const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentStore = localStorage.getItem('mostRecentScore');

const MAX_HIGH_SCORES = 5;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = mostRecentStore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});
saveHighScore = e => {
    console.log("clicked the save button");
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    }

    highScores.push(score);

    highScores.sort((a,b) =>  b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("index.html");
};