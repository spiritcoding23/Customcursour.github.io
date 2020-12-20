let mouseCoursour = document.querySelector(".Cursour");
let navlinks = document.querySelectorAll(".nav-links li");
let image = document.getElementById("img1");

window.addEventListener("mousemove",cursour);

function cursour(e) {
    mouseCoursour.style.top = e.pageY + "px";
    mouseCoursour.style.left = e.pageX + "px";
}

navlinks.forEach(link => {
    link.addEventListener("mouseover", () =>{
        mouseCoursour.classList.add("grow-link");
        link.classList.add("hoverd-link");
    });
    link.addEventListener("mouseleave", () =>{
        mouseCoursour.classList.remove("grow-link");
        link.classList.remove("hoverd-link");
    });
});

image.addEventListener("mouseover", () => {
    mouseCoursour.classList.add("grow-img");
});
image.addEventListener("mouseleave", () => {
    mouseCoursour.classList.remove("grow-img");
});
