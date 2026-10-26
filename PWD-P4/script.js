const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    checkScrollPosition();
};

function checkScrollPosition() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

scrollTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Memberikan efek animasi gulir yang halus
    });
};