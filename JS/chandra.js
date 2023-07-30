window.onload = function () {
    window.addEventListener('scroll', handleScroll);

    function handleScroll() {

        const scrollValue = window.scrollY;
        const scrollIteration = window.scrollY * 0.7;
        const divElement = document.querySelector('.chan-3');
        divElement.style.borderBottomRightRadius = `${scrollIteration}px`;
        divElement.style.borderBottomLeftRadius = `${scrollIteration}px`;

        if (scrollValue > 0) {
            document.querySelector("#scroll-alert").style.display = "none";

            if(scrollValue < 1) { 
                document.querySelector("#scroll-alert").style.display = " ";
            
            }
        }

        
    }
};