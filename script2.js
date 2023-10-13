

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
