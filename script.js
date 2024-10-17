const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('toggle');
});

// Typing effect
const texts = ["Adam Sheppard", "adamsheppard.dev"];
const typingSpeed = 100; // Speed for typing characters
const backspaceSpeed = 150; // Speed for backspacing characters
const pauseBeforeSwitching = 2000; // Pause before backspacing after typing

let textIndex = 0;
let charIndex = 0;
let currentText = '';
let typingElement = document.getElementById('animated-name');
let isBackspacing = false;

function type() {
  if (!isBackspacing) {
    if (charIndex < texts[textIndex].length) {
      currentText += texts[textIndex].charAt(charIndex);
      typingElement.textContent = currentText;
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(() => {
        isBackspacing = true;
        setTimeout(type, backspaceSpeed);
        //Pause before starting to backspace
      }, pauseBeforeSwitching);
    }
  } else {
    if (charIndex > 0) {
      currentText = currentText.slice(0, -1);
      typingElement.textContent = currentText;
      charIndex--;
      setTimeout(type, backspaceSpeed);
    } else {
      isBackspacing = false;
      //Switch to the next text
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", type);

