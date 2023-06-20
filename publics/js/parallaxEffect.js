window.addEventListener("scroll", () => {
    const containerCustomBanner = document.querySelector("header .container-custom"),
        bgImgGwDekstop = document.querySelector("header .gw"),
        imgGwDekstop = document.querySelector("header .gw img"),
        imgGrootDekstop = document.querySelector("header .groot img"),
        bannerDesc = document.querySelector("header .desc")

    var scrollX = window.scrollX;
    var scrollY = window.scrollY;
    var parallaxSpeedX = 0.5;
    var parallaxSpeedY = 0.5;

    console.log('scrollX', scrollX);
    console.log('scrollY', scrollY);

    // var parallaxHeight = 600; // Set the desired maximum height for the image
    // var minHeight = 200; // Set the desired minimum height for the image
    // var newHeight = parallaxHeight - (scrollY * parallaxSpeedY);

    if (scrollY > 0) {
        imgGwDekstop.style.transform = 'translateY(' + (-scrollY * parallaxSpeedY) + 'px)';
        imgGrootDekstop.style.transform = 'translateY(' + (scrollY * 1) + 'px)';
        bannerDesc.style.transform = 'translateY(' + (scrollY * parallaxSpeedY) + 'px)';
    } else {
        imgGwDekstop.style.transform = 'translateX(0)';
        imgGrootDekstop.style.transform = 'translateY(0)';
    }
});