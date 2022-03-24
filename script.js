"use strict";

// Selectors

const ratingButtons = document.querySelectorAll(".review__button");
const submitButton = document.querySelector(".review__button-submit");
const ratingMessage = document.querySelector(".thankyou__rating");
const reviewCard = document.querySelector(".review");
const thankyouCard = document.querySelector(".thankyou");

// Code

const active = "active";
ratingMessage.innerText = `No rating selected`;
let rating;

ratingButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
        const clickedRating = e.target;

        ratingButtons.forEach((button) => {
            if (button == clickedRating) return;
            button.classList.remove(active);
        });

        clickedRating.classList.toggle(active);
        rating = clickedRating.innerText;
    });
});

submitButton.addEventListener("click", function () {
    // reviewCard.classList.add("hidden");
    thankyouCard.classList.remove("hidden");
    ratingMessage.innerText = `You selected ${rating} out of 5`;
    reviewCard.classList.add("flipped");
});
