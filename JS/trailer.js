const trailer = document.getElementById("trailer")

window.onmousemove = e => {
    const x = e.clientX, y = e.clientY;

    trailer.style.transform = `translate($(x)px, $(y)px)`
}