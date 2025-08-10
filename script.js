function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function showDetails(service) {
    let element = document.getElementById("details-" + service);
    element.style.display = (element.style.display === "block") ? "none" : "block";
}

window.onscroll = function() {
    let btn = document.getElementById("scrollTop");
    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
