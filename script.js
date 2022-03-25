"use strict";

// Selectors

const ratingButtons = document.querySelectorAll(".review__button");
const submitButton = document.querySelector(".review__button-submit");
const ratingMessage = document.querySelector(".thankyou__rating");
const reviewCard = document.querySelector(".review");
const thankyouCard = document.querySelector(".thankyou");
const wrapperInner = document.querySelector(".wrapper-inner");

// Code

const active = "active";
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
    wrapperInner.classList.add("flipped");
    if (rating) {
        ratingMessage.innerText = `You selected ${rating} out of 5`;
    } else {
        ratingMessage.innerText = "No rating selected";
    }
});

thankyouCard.addEventListener("click", function () {
    wrapperInner.classList.remove("flipped");
});
