const startButton = document.getElementById('start-btn');
const gameContainer = document.getElementById('game');
const winMessage = document.getElementById('win-message');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const animeImage = document.getElementById('anime-image');
const choiceButtons = document.querySelectorAll('.choice-btn');

let score = 0;
let timer = 20;
let currentQuestion = 0;
let correctAnswers = 0;
let timerInterval;

const questions = [
    {
        image: 'naruto.jpg',    
        answers: ['Naruto Uzumaki', 'Zoro Roronoa', 'Ash Ketchum'],
        correct: 0 // 'Naruto Uzumaki' is the correct answer, index 0
    },
    {
        image: 'luffy.jpg',  
        answers: ['Sasuke Uchiha', 'Ichigo Kurosaki', 'Monkey D. Luffy'],
        correct: 2 // 'Monkey D. Luffy' is the correct answer, index 2
    },
    {
        image: 'goku.jpg',  
        answers: ['Goku', 'Light Yagami', 'Killua'],
        correct: 0 // 'Goku' is the correct answer, index 0
    },
    {
        image: 'IzukuMidoriya.jpg',  
        answers: ['Izuku Midoriya', 'Eren Jaeger', 'Kurapika'],
        correct: 0 // 'Izuku Midoriya' is the correct answer, index 0
    },
    {
        image: 'EdwardElric.jpg',  
        answers: ['Lelouch vi Britannia', 'Edward Elric', 'Roy Mustang'],
        correct: 1 // 'Edward Elric' is the correct answer, index 1
    },
    {
        image: 'saitama.jpg',  
        answers: ['Shoto Todoroki', 'Vegeta', 'Saitama'],
        correct: 2 // 'Saitama' is the correct answer, index 2
    },
    {
        image: 'sanji.jpg',  // Replace with actual image paths
        answers: ['Sanji', 'Sanosuke Sagara', 'Kurama'],
        correct: 0 // 'Sanji' is the correct answer, index 0
    },
    {
        image: 'hinata.jpg',  
        answers: ['Nami', 'Hinata Hyuga', 'Kaori Miyazono'],
        correct: 1 // 'Hinata Hyuga' is the correct answer, index 1
    },
    {
        image: 'YusukeUrameshi.png', 
        answers: ['Yusuke Urameshi', 'Saito Hajime', 'Alphonse Elric'],
        correct: 0 // 'Yusuke Urameshi' is the correct answer, index 0
    },
    {
        image: 'HimuraKenshin.jpg', 
        answers: ['Mumen Rider', 'Kenshin Himura', 'Katsuki Bakugo'],
        correct: 1 // 'Kenshin Himura' is the correct answer, index 1
    }
];

startButton.addEventListener('click', startGame);

function startGame() {
    score = 0;
    correctAnswers = 0;
    currentQuestion = 0;
    timer = 20;
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time Left: ${timer}s`;

    gameContainer.style.display = 'block';
    startButton.style.display = 'none';
    winMessage.style.display = 'none';

    nextQuestion();
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timer--;
        timerDisplay.textContent = `Time Left: ${timer}s`;
        if (timer === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function nextQuestion() {
    if (currentQuestion >= questions.length) {
        endGame();
        return;
    }

    const question = questions[currentQuestion];
    animeImage.src = question.image;

    choiceButtons.forEach((button, index) => {
        button.textContent = question.answers[index];
    });
}

function checkAnswer(choice) {
    const question = questions[currentQuestion];
    if (choice === question.correct) {
        score++;
        correctAnswers++;
    }
    scoreDisplay.textContent = `Score: ${score}`;
    currentQuestion++;

    nextQuestion();
}

function endGame() {
    gameContainer.style.display = 'none';
    if (correctAnswers >= 8) {
        winMessage.style.display = 'block';
    } else {
        alert('Game Over! You scored ' + correctAnswers + ' out of 10.');
    }
}

