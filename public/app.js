const slideshowOne = () => {
    const img = document.getElementById("img");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");
    const numImgs = 7;

    const toggleSlideshow = (i) => {
        if (i === numImgs) i = 0;
        if (i === -1) i = numImgs - 1;
        img.src = `./../public/images/img-${i + 1}.jpg`;
        return i;
    };
    leftArrow.addEventListener("click", () => {
        slideIndex = toggleSlideshow(slideIndex - 1);
    });
    rightArrow.addEventListener("click", () => {
        slideIndex = toggleSlideshow(slideIndex + 1);
    });
    let slideIndex = toggleSlideshow(0);
};

window.addEventListener("load", () => {
    main();
});
const main = () => {
    slideshowOne();
};
