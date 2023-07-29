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

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const navbarContents = document.querySelector('.navbar-contents');
  const button = document.querySelector('.button');

  if (!navbar || !navbarContents || !button) {
    console.error("Navbar, navbar-contents, or button element not found.");
    return;
  }

  let isOpen = false; // Flag to keep track of the navbar state

  button.addEventListener('click', () => {
    // Toggle the navbar and its contents based on the isOpen flag
    isOpen = !isOpen;
    navbar.style.opacity = isOpen ? '1' : '0';
    navbarContents.style.visibility = isOpen ? 'visible' : 'hidden';
  });
});




