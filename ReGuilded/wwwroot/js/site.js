var navBtn = document.querySelector("nav button");
navBtn.onclick = function() {
    if (navBtn.getAttribute("aria-expanded") == "true") {
        navBtn.setAttribute("aria-expanded", false);
    } else {
        navBtn.setAttribute("aria-expanded", true);
    }
}