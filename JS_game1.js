let streak = 0;
const maxStreak = 3;
const paths = ['left', 'center', 'right'];
let correctPath;
let gameWon = false; // Flag to track if the game is won

// Function to generate a random path
function generateRandomPath() {
    const randomIndex = Math.floor(Math.random() * paths.length);
    return paths[randomIndex];
}

// Function to update the streak display
function updateStreakDisplay() {
    document.getElementById('streak').textContent = `Current Streak: ${streak}`;
}

// Function to handle path click
function handlePathClick(event) {
    const clickedPath = event.target.getAttribute('data-path');
    const resultMessage = document.getElementById('result-message');
    const continueButton = document.getElementById('continueButton');
    const retryButton = document.getElementById('retryButton');
    
    // If the game is won, do not allow further input
    if (gameWon) return;

    if (clickedPath === correctPath) {
        streak++; // Increment streak for correct answer
        resultMessage.textContent = `Correct! Streak: ${streak}`;
        
        // Show cat popup with custom message
        showCatPopup();

        if (streak === maxStreak) {
            showWinMessage();  // Show win message if max streak is reached
            gameWon = true;  // Set the game as won
        } else {
            continueButton.style.display = 'inline-block';
            retryButton.style.display = 'none';
        }

        updateStreakDisplay();  // Update streak display after correct answer
    } else {
        resultMessage.textContent = 'Incorrect! Try again.';
        streak = 0; // Reset streak to 0 for incorrect answer
        updateStreakDisplay();  // Update streak display when reset
        retryButton.style.display = 'inline-block';
        continueButton.style.display = 'none';
    }
}

// Function to show the cat popup
function showCatPopup() {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = 'Yay you found me! Let\'s play another round.';
    popup.style.display = 'block'; // Make the popup visible
}

// Function to hide the cat popup
document.getElementById('close-popup').addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Hide the popup when closed
    
    // Reset message and buttons when closing popup
    document.getElementById('result-message').textContent = '';
    document.getElementById('continueButton').style.display = 'none';
    document.getElementById('retryButton').style.display = 'none';
    
    // Set up new round
    correctPath = generateRandomPath();
    if (!gameWon) { // If game is not won, reset buttons
        continueButton.style.display = 'none';
        retryButton.style.display = 'none';
    }
});

// Function to handle the continue button (next round)
document.getElementById('continueButton').addEventListener('click', () => {
    // If the game is won, do not continue to the next round
    if (gameWon) return;

    correctPath = generateRandomPath();
    document.getElementById('continueButton').style.display = 'none';
    document.getElementById('retryButton').style.display = 'none';
    
    // Reset result message for next round
    document.getElementById('result-message').textContent = '';
});

// Function to handle the retry button (incorrect guess)
document.getElementById('retryButton').addEventListener('click', () => {
    // If the game is won, do not allow retry
    if (gameWon) return;

    document.getElementById('retryButton').style.display = 'none';
    document.getElementById('continueButton').style.display = 'none';
    
    // Reset the correct path and show the result message
    correctPath = generateRandomPath();
    document.getElementById('result-message').textContent = '';
});

// Function to show the win message
function showWinMessage() {
    const winMessage = document.getElementById('win-message');
    winMessage.style.display = 'block'; // Show win message
    document.getElementById('continueButton').style.display = 'none';
    document.getElementById('retryButton').style.display = 'none';
}

// Start a new round and choose a random correct path
correctPath = generateRandomPath();
updateStreakDisplay(); // Initialize streak display

// Add event listeners to the images (paths)
const clickablePaths = document.querySelectorAll('.clickable-path');
clickablePaths.forEach(path => path.addEventListener('click', handlePathClick));
