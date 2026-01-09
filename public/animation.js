let typingTimer;

function typeText(element, text, speed) {
    clearInterval(typingTimer);
    element.innerText = "";

    let i = 0;
    typingTimer = setInterval(() => {
        element.innerText += text[i++];
        if (i === text.length) {
            clearInterval(typingTimer);
            setTimeout(() => typeText(element, text, speed), 1500);
        }
    }, speed);
}



// 

const resText = document.getElementById("typing");
const code = document.getElementById("typing").innerText;


typeText(resText, code, 150);





