const slideshow = async () => {
    const img = document.getElementById("img");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");

    const toggleSlideshow = (i) => {
        i++;
        if (i === 8) i = 1;
        if (i === 0) i = 7;
        img.src = `./../public/images/img-${i}.jpg`;
        return i;
    };
    leftArrow.addEventListener("click", () => {
        slideIndex = toggleSlideshow(slideIndex--);
    });
    rightArrow.addEventListener("click", () => {
        slideIndex = toggleSlideshow(slideIndex++);
    });
    let slideIndex = toggleSlideshow(0);
};

window.addEventListener("load", () => {
    main();
});
const main = () => {
    slideshow();
};
