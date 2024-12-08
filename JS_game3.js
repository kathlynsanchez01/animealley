// Initialize the game variables
let targetNumber = Math.floor(Math.random() * 100) + 1;

let maxAttempts = 5;
let attemptsLeft = maxAttempts;
let guessesMade = 0;

// Get references to HTML elements
const userGuessInput = document.getElementById('userGuess');
const submitButton = document.getElementById('submitBtn');
const attemptsLeftElement = document.getElementById('attemptsLeft');
const guessesMadeElement = document.getElementById('guessesMade');
const resultElement = document.getElementById('result');
const retryButton = document.getElementById('retryButton');
const winMessage = document.getElementById('win-message');

// Enable the input and button at the start of the game
window.addEventListener('DOMContentLoaded', (event) => {
    // Enable input and button
    userGuessInput.disabled = false;
    submitButton.disabled = false;

    // Add event listener to the submit button
    submitButton.addEventListener('click', makeGuess);

    // Clear the message section and reset the game
    resultElement.textContent = '';
    attemptsLeftElement.textContent = attemptsLeft;
    guessesMadeElement.textContent = guessesMade;

    // Hide retry button initially
    retryButton.style.display = 'none';
});

// Function to make a guess
function makeGuess() {
    let userGuess = parseInt(userGuessInput.value);

    // Check if the guess is valid
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultElement.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    // Update the number of attempts and guesses made
    guessesMade++;
    attemptsLeft--;

    // Check the user's guess
    if (userGuess === targetNumber) {
        resultElement.textContent = `Congratulations! You guessed the correct number: ${targetNumber}`;
        resultElement.style.color = 'green';
        winMessage.style.display = 'block';  // Show win message
        disableInput();
    } else if (userGuess < targetNumber) {
        resultElement.textContent = `Too low! You have ${attemptsLeft} attempts left.`;
        resultElement.style.color = 'orange';
    } else if (userGuess > targetNumber) {
        resultElement.textContent = `Too high! You have ${attemptsLeft} attempts left.`;
        resultElement.style.color = 'orange';
    }

    // Update attempts left and guesses made
    attemptsLeftElement.textContent = attemptsLeft;
    guessesMadeElement.textContent = guessesMade;

    // If attempts are over and user didn't guess the number
    if (attemptsLeft === 0 && userGuess !== targetNumber) {
        resultElement.textContent = `Sorry, you're out of attempts. The correct number was ${targetNumber}.`;
        resultElement.style.color = 'red';
        disableInput();
    }

    // Clear input field after each guess
    userGuessInput.value = '';
    userGuessInput.focus();
}

// Function to disable input (after win or game over)
function disableInput() {
    userGuessInput.disabled = true;
    submitButton.disabled = true;
    retryButton.style.display = 'inline-block';  // Show retry button
}

// Function to restart the game
function retryGame() {
    // Reset the game variables
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = maxAttempts;
    guessesMade = 0;

    // Reset UI elements
    attemptsLeftElement.textContent = attemptsLeft;
    guessesMadeElement.textContent = guessesMade;
    resultElement.textContent = '';
    winMessage.style.display = 'none';  // Hide win message
    retryButton.style.display = 'none';  // Hide retry button

    // Enable input and button for new game
    userGuessInput.disabled = false;
    submitButton.disabled = false;
    userGuessInput.value = '';
    userGuessInput.focus();
}
