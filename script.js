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
