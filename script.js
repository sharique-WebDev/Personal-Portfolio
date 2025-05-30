console.log("Hello World!");

let gotoEl = document.querySelector(".goto-home")

window.addEventListener("scroll", () =>{
    if(window.scrollY > 500){
        gotoEl.style.opacity = "1"
        gotoEl.style.visibility = "visible"
    } else {
        gotoEl.style.opacity = "0"
        gotoEl.style.visibility = "hidden"
    }
})

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active');
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
}

// typing cursor animation
const words = ["Web Developer", "Programmer", "Web Designer"];
const typedText = document.getElementById("typed-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);
    typedText.textContent = currentText;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, 100); // Typing speed
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50); // Deleting speed
    } else {
        // Word complete
        if (!isDeleting) {
            isDeleting = true;
            setTimeout(type, 1500); // Wait before deleting
        } else {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500); // Wait before typing next word
        }
    }
}

document.addEventListener("DOMContentLoaded", type);

const navbarEl = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) { // You can adjust this threshold
        navbarEl.classList.add("active");
    } else {
        navbarEl.classList.remove("active");
    }
});

AOS.init();

// mouse pointer follower
const circle = document.getElementById("cursorCircle");

let mouseX = 0, mouseY = 0;
let circleX = 0, circleY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    // Smooth movement: move part way toward the mouse
    circleX += (mouseX - circleX) * 0.1;
    circleY += (mouseY - circleY) * 0.1;

    circle.style.left = circleX + "px";
    circle.style.top = circleY + "px";

    requestAnimationFrame(animate);
}

animate();

function toggleReadMore(id, linkEl) {
    const wrapper = document.querySelector(`.service-para-wrapper[data-id="${id}"]`);
    const para = wrapper.querySelector('.service-para');
    const fullText = para.getAttribute('data-full');
    const shortText = fullText.split('. ').slice(0, 2).join('. ') + '.';
    const isExpanded = linkEl.textContent === "Read Less";

    // Animate first
    wrapper.style.transition = "max-height 0.5s ease, opacity 0.5s ease";
    wrapper.style.overflow = "hidden";

    if (isExpanded) {
        // Collapse first
        wrapper.style.maxHeight = "150px";

        // Wait for the animation to finish before changing content
        setTimeout(() => {
            para.textContent = shortText;
            linkEl.textContent = "Read More";
        }, 500); // match transition duration
    } else {
        para.textContent = fullText;

        // Temporarily allow scrollHeight to be read
        wrapper.style.maxHeight = wrapper.scrollHeight + "px";
        linkEl.textContent = "Read Less";
    }
}

const textarea = document.getElementById('message');

  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto'; // Reset height
    textarea.style.height = textarea.scrollHeight + 'px'; // Set new height
  });