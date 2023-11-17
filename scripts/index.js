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

// background-color: rgb(255, 198, 53); FCS COLOR
// background-color: rgb(40, 238, 167); FSW
// background-color: rgb(152, 100, 218); FSD
// background-color: rgb(251, 80, 142); UIX

const fcs_button = document.getElementById("FCS")
const fsw_button = document.getElementById("FSW")
const fsd_button = document.getElementById("FSD")
const uix_button = document.getElementById("UIX")
const program_body = document.getElementsByClassName("program-data")[0]
let fcs_clicked = false
let fsw_clicked = false
let fsd_clicked = false
let uix_clicked = false
fcs_button.addEventListener("click",()=>{
    if(fcs_clicked == false){
        fcs_clicked = true
        fsw_clicked = false
        fsd_clicked = false
        uix_clicked = false
        fcs_button.classList.add("clicked")
        fsw_button.classList.remove("clicked")
        fsd_button.classList.remove("clicked")
        uix_button.classList.remove("clicked")
        fcs_button.style.color = "rgb(255, 198, 53)"
        fsw_button.style.color = "black"
        fsd_button.style.color = "black"
        uix_button.style.color = "black"
        program_body.classList.remove("border-rds")
        program_body.classList.add("fcs-clicked")
        program_body.innerHTML = `
    <div class="program-details">
    <div class="subsection-title text-white">
        <span class="yellow">&gt; FCS:</span>
        Foundations of Computer Science</div>
    <p class="subsection-details text-white">// This 9-week course covers fundamental topics in computer science, including data structures, algorithms, and foundational concepts. It is suitable for coding enthusiasts, former computer science students, and beginners who wish to learn Python programming, object-oriented programming, file systems, and more. The course includes online video materials, assignments, and instructor-led sessions.</p>
    <div>
        <div class="date-container">
            <div class="date-section ">next bootcamp date | <span class="yellow">To be confirmed</span></div>
            <a href="" class="blackbtn1">LEARN MORE ></a>
        </div>
    </div>
    </div>
    <img src="./assets/images/fcs.png" class="program-image" alt="fcs image">`
    }
})

fsw_button.addEventListener("click",()=>{
    if(fsw_clicked == false){
        fcs_clicked = false
        fsw_clicked = true
        fsd_clicked = false
        uix_clicked = false
        fcs_button.classList.remove("clicked")
        fsw_button.classList.add("clicked")
        fsd_button.classList.remove("clicked")
        uix_button.classList.remove("clicked")
        fcs_button.style.color = "black"
        fsw_button.style.color = "rgb(40, 238, 167)"
        fsd_button.style.color = "black"
        uix_button.style.color = "black"
        program_body.classList.remove("fcs-clicked")
        program_body.classList.add("border-rds")
        program_body.innerHTML = `
        <div class="program-details">
        <div class="subsection-title text-white">
            <span class="green">&gt; FSW:</span>
            Full-Stack Web Development</div>
        <p class="subsection-details text-white">// Our 14-week bootcamp is designed to equip aspiring developers with the technical and interpersonal skills needed to become professional software engineers. Participants will learn essential concepts such as Version Control, Object-Oriented Programming, Database Management Systems, MVC Design Patterns, Dependency Management, modern Web Frameworks, and AWS. The program also includes a soft-skills curriculum covering Communication & Interpersonal Skills, Professional Writing, Technical Presentations, Negotiation, and Interviewing, which will be taught through lectures, weekly projects, tech talks, and a final project to showcase their learning.</p>
        <div>
            <div class="date-container">
                <div class="date-section ">next bootcamp date | <span class="green">To be confirmed</span></div>
                <a href="" class="blackbtn1">LEARN MORE ></a>
            </div>
        </div>
    </div>
    <img src="./assets/images/fsw.png" class="program-image" alt="fsw image">`
    }

})
fsd_button.addEventListener("click",()=>{
    if(fsd_clicked == false){
        fcs_clicked = false
        fsw_clicked = false
        fsd_clicked = true
        uix_clicked = false
        fcs_button.classList.remove("clicked")
        fsw_button.classList.remove("clicked")
        fsd_button.classList.add("clicked")
        uix_button.classList.remove("clicked")
        fcs_button.style.color = "black"
        fsw_button.style.color = "black"
        fsd_button.style.color = "rgb(152, 100, 218)"
        uix_button.style.color = "black"
        program_body.classList.remove("fcs-clicked")
        program_body.classList.add("border-rds")
        program_body.innerHTML = `
    <div class="program-details">
    <div class="subsection-title text-white">
        <span class="purple">&gt; FSD:</span>
        Full-Stack Data</div>
    <p class="subsection-details text-white">// SE Factory's 12-week Full-Stack Data course offers robust training in data analysis and engineering. Participants learn to handle large data sets with Python and use libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization. The course also delves into cloud orchestration, distributed computing, relational databases, and SQL basics. Hands-on projects provide real-world data analysis experience. Upon completion, students gain proficiency in Python for analytics, understand data warehousing, and can effectively visualize and present data insights.</p>
    <div>
        <div class="date-container">
            <div class="date-section ">next bootcamp date | <span class="purple">To be confirmed</span></div>
            <a href="" class="blackbtn1">LEARN MORE ></a>
        </div>
    </div>
    </div>
    <img src="./assets/images/fsd.png" class="program-image" alt="fsd image">`
    }
})
uix_button.addEventListener("click",()=>{
    if(uix_clicked == false){
        fcs_clicked = false
        fsw_clicked = false
        fsd_clicked = false
        uix_clicked = true
        fcs_button.classList.remove("clicked")
        fsw_button.classList.remove("clicked")
        fsd_button.classList.remove("clicked")
        uix_button.classList.add("clicked")
        fcs_button.style.color = "black"
        fsw_button.style.color = "black"
        fsd_button.style.color = "black"
        uix_button.style.color = "rgb(251, 80, 142)"
        program_body.classList.remove("fcs-clicked")
        program_body.classList.add("border-rds")
        program_body.innerHTML = `
    <div class="program-details">
    <div class="subsection-title text-white">
        <span class="pink">&gt; UIX:</span>
        UI/UX Design Bootcamp</div>
    <p class="subsection-details text-white">// SE Factory's 6-week UI/UX course offers immersive learning in UI/UX design. It encompasses the essentials of UI/UX, from mastering Figma, color psychology, typography to UX heuristics, prototyping and WCAG guidelines. Learners work on projects, transforming wireframes into mockups, and creating responsive interfaces. The course culminates in a final project, enabling students to conduct a thorough UX audit, revamp a website, and create a well-documented case study. Graduates leave equipped with a polished portfolio and market-ready skills in UI/UX design.</p>
    <div>
        <div class="date-container">
            <div class="date-section ">next bootcamp date | <span class="pink">To be confirmed</span></div>
            <a href="" class="blackbtn1">LEARN MORE ></a>
        </div>
    </div>
    </div>
    <img src="./assets/images/uix.png" class="program-image" alt="fcs image">`
    }
})