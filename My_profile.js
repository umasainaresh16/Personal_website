const skills = [
    "Java Full Stack Developer",
    "Web Developer"
];

let index = 0;

function changeText() {
    const textElement = document.getElementById("details");
    textElement.innerHTML = skills[index]; 
    index = (index + 1) % skills.length;  
}

setInterval(changeText, 2000);
