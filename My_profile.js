const skills = [
    "Java Full Stack Developer",
    "Web Developer"
];

let index = 0;

// Function to change the text
function changeText() {
    const textElement = document.getElementById("details");
    textElement.innerHTML = skills[index]; // Use 'skills' instead of 'texts'
    index = (index + 1) % skills.length;  // Loop back to start
}

// Change text every 2 seconds (2000 milliseconds)
setInterval(changeText, 2000);
