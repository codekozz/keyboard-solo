const randomWord = document.querySelector('.word');
const correctCount = document.querySelector('.correct-count');
const wrongCount = document.querySelector('.wrong-count');
const wordMistakes = document.querySelector('.word-mistakes');

let corrC = 0;
let wrongC = 0;
let wordMist = 0;

const setOfWords = ["fast", "less", "half", "classroom", "clothes", "mud", "beer"];

let splitWord = ''
generFunc();

function generFunc() {
    randomWord.textContent = '';
    let randomGener = setOfWords[Math.floor(Math.random() * setOfWords.length)];
    splitWord = randomGener.split('');

    for (let i = 0; i < splitWord.length; i++) {
        const letter = document.createElement('span');
        letter.textContent = splitWord[i];
        randomWord.append(letter);
    }
    return splitWord;
}

let u = 0;

const timer = document.querySelector('#timer');
let seconds = parseInt(timer.textContent[3] + timer.textContent[4]);
let minutes = parseInt(timer.textContent[0] + timer.textContent[1]);

let timerId;
setInterval(timerOn, 1000);

function timerOn() {
    seconds++;

    if (seconds > 9) {
        timer.textContent = `0${minutes}:${seconds}`; /*на расчет не больше 9 минут*/
    } else {
        timer.textContent = `0${minutes}:0${seconds}`;
    }

    if (seconds > 14) {

        clearInterval(timerId);
        corrC = 0;
        wrongC = 0;
        wordMist = 0;
        minutes = 0;
        seconds = 0;
        alert('Время вышло!')
        wordMistakes.textContent = wordMist;
        wrongCount.textContent = wrongC;
        correctCount.textContent = corrC;
        u = 0;
        generFunc();
    }
}

document.addEventListener('keydown', (event) => {
    const letterNew = randomWord.querySelectorAll('span');

    if (splitWord[u] === event.key) {

        letterNew[u].classList.remove('w');
        letterNew[u].classList.add('c');
        u++;
        if (u == splitWord.length) {
            u = 0;
            if (wordMist === 0) {
                corrC++;
                correctCount.textContent = corrC;
            } else {
                wrongC++;
                wrongCount.textContent = wrongC;
            }
            wordMist = 0;
            wordMistakes.textContent = wordMist;
            setTimeout(generFunc, 300);
        }
    } else {
        letterNew[u].classList.remove('c');
        letterNew[u].classList.add('w');
        wordMist++;
        wordMistakes.textContent = wordMist;
    }

})