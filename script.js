"use strict";

// Selectors

const ratingButtons = document.querySelectorAll(".review__button");

// Code

ratingButtons.forEach((button) => {
    button.addEventListener("click", function () {
        let btnActive = false;
        if (!button.classList.contains("active") && btnActive === false) {
            button.classList.add("active");
            return (btnActive = true);
        } else {
            button.classList.remove("active");
        }
    });
});
