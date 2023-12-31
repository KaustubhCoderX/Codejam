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



const navbar = document.querySelector('.navbar');
const button = document.querySelector('.button');


let isNavbarExpanded = false;


function toggleNavbar() {
  if (isNavbarExpanded) {

    navbar.style.height = '0';
    navbar.style.width = '0';
  } else {

    navbar.style.height = '100vh';
    navbar.style.width = '100vw';
  }

  isNavbarExpanded = !isNavbarExpanded;
}


button.addEventListener('click', toggleNavbar);


// trailer

const trailer = document.getElementById("trailer");

const animateTrailer = e => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px)`
  }
  
  trailer.animate(keyframes, { 
    duration: 500, 
    fill: "forwards" 
  });
}

window.onmousemove = e => {
  animateTrailer(e);
}
// siu






