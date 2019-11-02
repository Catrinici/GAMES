window.addEventListener('load', init);


// Global variables

//Avaiable Levels
const levels = {
        easy: 5,
        medium: 3,
        hard: 2
    }
    //To change Level
const currenLevel = levels.medium;

let time = currenLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// words array
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

// Initialize game
function init() {
    //Show number of seconds in UI
    seconds.innerHTML = currenLevel;
    // Load word from array
    showWord(words);
    // STart matching on word input
    wordInput.addEventListener('input', startMatch);
    //Call countdown every second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50)
}

//Start Match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currenLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    // If score -1, display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {

        scoreDisplay.innerHTML = score;
    }
}

// Match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }

}

//Pick & show random word
function showWord(words) {
    //Generate a random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //Output a random word
    currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown() {
    //Make sure time is not runout
    if (time > 0) {
        //Decrement
        time--;
    } else if (time === 0) {
        //Game over
        isPlaying = false;
    }
    //Show time
    timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = "Game Over";
        score = -1;
    }
}