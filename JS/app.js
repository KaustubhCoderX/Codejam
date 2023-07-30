const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let intervals = {};

  window.onload = function () {
    const hackyElements = document.querySelectorAll('.hacky');


    hackyElements.forEach((element, index) => {
      element.dataset.content = element.innerText;
      const content = element.dataset.content;

      element.onmouseover = event => {
        let iteration = 0;

        clearInterval(intervals[index]);

        intervals[index] = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, idx) => {
              if (idx < iteration) {
                return event.target.dataset.content[idx];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= event.target.dataset.content.length) {
            clearInterval(intervals[index]);
          }

          iteration += 1 / 3;
        }, 30);
      };

      element.onmouseleave = event => {
        event.target.innerText = content;
      };
    });
  };

// menu

// Get references to the elements
const navbar = document.querySelector('.navbar');
const button = document.querySelector('.button');

// Define a variable to keep track of the navbar state
let isNavbarExpanded = false;

// Function to toggle the navbar's height and width
function toggleNavbar() {
  if (isNavbarExpanded) {
    // If the navbar is already expanded, collapse it
    navbar.style.height = '0';
    navbar.style.width = '0';
  } else {
    // If the navbar is not expanded, expand it to full screen
    navbar.style.height = '100vh';
    navbar.style.width = '100vw';
  }
  // Toggle the state
  isNavbarExpanded = !isNavbarExpanded;
}

// Add a click event listener to the button to toggle the navbar
button.addEventListener('click', toggleNavbar);




