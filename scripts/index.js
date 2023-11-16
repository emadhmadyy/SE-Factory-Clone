// Typing effect 
document.addEventListener('DOMContentLoaded', function () {
    const typed_text = document.querySelector('.typed-text');
    const blinking_cursor = document.querySelector('.blinking-cursor');
    const left_overlay = document.querySelector(".left-overlay")
    const description = document.querySelector(".text-color-change")
    typed_text.textContent = ""
    blinking_cursor.textContent = "_"
    const content_object = [
        {
            text:"SOFTWARE ENGINEER?",
            background_color:"rgba(40, 238, 167, .9)",
            text_color:"#363738"
        },
        {
            text:"DATA ENGINEER?",
            background_color:"rgba(152, 100, 218, .9)",
            text_color:"#FCFCFD"
        },
        {
            text:"UI/UX DESIGNER?",
            background_color:"rgba(251, 80, 142, 0.93)",
            text_color:"#FCFCFD"
        }
];
    let currentTextIndex = 0;
    let currentText = content_object[currentTextIndex].text;
    let currentBackgroundColor = content_object[currentTextIndex].background_color
    let current_text_color = content_object[currentTextIndex].text_color
    let letterIndex = 0;
    function changeText() {
        currentTextIndex = (currentTextIndex + 1) % content_object.length;
        currentText = content_object[currentTextIndex].text;
        currentBackgroundColor = content_object[currentTextIndex].background_color
        current_text_color = content_object[currentTextIndex].text_color
        left_overlay.style.backgroundColor = currentBackgroundColor
        blinking_cursor.style.color = current_text_color
        typed_text.style.color = current_text_color
        description.style.color = current_text_color
        letterIndex = 0;
        typeText();
    }
    function typeText() {
        typed_text.innerHTML = currentText.slice(0, letterIndex);
        if (letterIndex < currentText.length) {
            letterIndex++;
            setTimeout(typeText, 100);
        } else {
            // After typing, transition to the next text
            setTimeout(changeText, 1000); 
        }
    }
    typeText();
});

