

const text = `Web designer,Web developer, photographer,Freelancer`;

const type = document.getElementById("typer");

let x = 0;

function typeWriter() {
    if (x < text.length) {
        type.textContent += text.charAt(x);
        x++;
        setTimeout(typeWriter, 300);
    }else{
    setTimeout(() => {
        type.textContent = ""; // Clear the text
        x = 0; // Reset the index
        typeWriter(); // Start typing again
    }, 2000); // Wait for 2 seconds before starting again
}
}

typeWriter();


// change the font size of the text
const textElement = document.getElementById("typer");
textElement.style.fontSize = "50px"; // Change the font size to 50px
textElement.style.fontFamily = "Arial, bosko"; // Change the font family to Arial