const sections = document.querySelectorAll(" section");
const navLi = document.querySelectorAll("nav .collapse ul li");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        };
    });
    navLi.forEach(li => {
        li.classList.remove("navact");
        if (li.classList.contains(current)) {
            li.classList.add("navact");
        };
    });
});

let navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", () => {
    text = document.querySelector('.text');
    if ( text.style.display = "none") {
        return;
    }
});
