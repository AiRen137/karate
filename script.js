const phrases = [
    "You can do it!",
    "You can be that 1 in 10000",
    "Focus on one thing at a time",
    "Treat every day as grading day",
    "The best team is the one you are on",
    "It does not matter how slowly you go as long as you do not stop - Confucius",
    "Our greatest glory is not in never falling, but in rising every time we fall - Confucius",
    "Believe in yourself!",
    "Be better than yesterday",
    "Champions keep playing until they get it right - Billie Jean King",
    "Don't stop until you're proud",
    "Believe you can and you're halfway there - Theodore Roosevelt",
    "Push yourself - nobody else is going to do it for you",
    "There are no shortcuts to any place worth going - Beverley Sills",
    "Success is not final, failure is not fatal: it is the courage to continue that counts - Winston Churchill"
];

//Thank you ChatGPT for this bit
document.getElementById("motivate-button").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];
    document.getElementById("phrase").textContent = randomPhrase;
});

// Function to replace text with "meow"
//function meowifyText() {
 //   const allTextElements = document.querySelectorAll('p, h1, h2, h3, span, div, li, a, button');
  //  allTextElements.forEach(element => {
 //       element.textContent = 'meow';
 //   });
//}

// Add an event listener to the button
//document.getElementById("meow-button").addEventListener("click", meowifyText);



// Define a variable to keep track of the transformation state
let isTransformed = false;

// Function to replace all text content with "meow"
function transformToMeow() {
    const elements = document.querySelectorAll('body *'); // Select all elements inside the <body>
    
    // Toggle transformation
    isTransformed = !isTransformed;

    for (let element of elements) {
        if (isTransformed) {
            element.textContent = "meow";
        } else {
            // If not transformed, revert to original text
            // You can store the original text in a data attribute for each element
            const originalText = element.getAttribute("data-original-text");
            if (originalText !== null) {
                element.textContent = originalText;
            }
        }
    }
}

// Add an event listener to the button
document.getElementById("meow-button").addEventListener("click", transformToMeow);


