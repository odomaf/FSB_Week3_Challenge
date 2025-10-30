// 🧠 Starter Word Guess Game — Keyboard Input Ready

// Word bank
var words = ["javascript", "array", "loop", "variable"];

// Randomly select one word from the list
var chosenWord = words[Math.floor(Math.random() * words.length)];
var chosenWordCharsArray = chosenWord.split('');
var maskedWordArray = "";

// Track guessed letters and remaining attempts
var guessedLetters = [];
var attempts = 10;

// Log the chosen word for debugging
console.log("Chosen word:", chosenWord);

for (i=0; i<chosenWordCharsArray.length; i++) {
  maskedWordArray.push("_");
}

// 🎮 Function students will build next
function startGame(letter) {
  var guessedLetter = letter;
  var isInWord = chosenWord.includes(guessedletter);
  console.log(`You pressed: ${guessedLetter}`);

  if (isInWord) {
      console.log(`Your letter ${guessedLetter} is in the word`);
      var indeces = [];
      for (i=0; i<chosenWordCharsArray.length; i++) {
        
      }
    //cycle through chars array and check
    //if each letter is in the guessedLetters array
    //if not, replace with '_'
    //----(do we need to do all loops each time? or save the masked word and only check for where we need to put current letter?) <-------DO IT THIS WAY
    //NOTE: 
    //update attempts
    //update guessedLetters:   guessedLetters.push(letter);
    //update masked word
    //return masked word
  }
  
  // TODO:
  // 1️⃣ Build a masked string using underscores for letters not yet guessed.
  // 2️⃣ Track guessed letters and remaining attempts.
  // 3️⃣ Detect win or loss and display a message.
  // 4️⃣ (Bonus) Show guessed letters and progress dynamically in the console or DOM.
}

// ⌨️ Listen for keyboard input when the page loads
window.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase();

  // Only process alphabetic letters (ignore Shift, Enter, etc.)
  if (key.match(/^[a-z]$/)) {
    startGame(key);
  } else {
    console.log("Please press a valid letter (A–Z).");
  }
});