//Change Japanese text with the English translation (9th Kyu)

const textContainer = document.getElementById('syl-box');
const changeContentButton = document.getElementById('change-lang-btn');

let isJapanese = true;

const japaneseText = textContainer.innerHTML;

// Function to change the text and list
function toggleContent() {
    // Change the text
    if (isJapanese) {
        const newList = `
        <h2>Line Work</h2>
        <p>From parallel stance:</p>
        <ul>
            <li><a href="https://www.youtube.com/watch?v=DtfJQim5rnQ">Stomach punch</a></li>
            <li><a href="https://www.youtube.com/watch?v=gXcoSEVqgrk">Leading hand head punch</a></li>
            
        </ul>
        <p>From forward stance:</p>
        <ul>
            <li><a href="https://www.youtube.com/watch?v=RKBfz_6l6b4">Stepping head punch</a></li>
            <li><a href="https://www.youtube.com/watch?v=_a-YWLC3ZdQ">Low block</a></li>
            <li><a href="https://www.youtube.com/watch?v=n5c24eYLPYQ">High block</a></li>
        </ul>
        <p >Kicks:</p>
        <ul>
            <li><a href="https://www.youtube.com/watch?v=B3EmwanO5Z0">Front snap kick</a></li>
            <li><a href="https://www.youtube.com/watch?v=nfx-_sRbz7o">Roundhouse kick</a></li>
        </ul>
    `;
        textContainer.innerHTML =  newList;
    }else{
        textContainer.innerHTML = japaneseText;
    }
isJapanese = !isJapanese;

}
// Add a click event listener to the button
changeContentButton.addEventListener('click', toggleContent);
