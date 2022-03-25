"use strict";

// Selectors

const ratingButtons = document.querySelectorAll(".review__button");
const submitButton = document.querySelector(".review__button-submit");
const ratingMessage = document.querySelector(".thankyou__rating");
const reviewCard = document.querySelector(".review");
const thankyouCard = document.querySelector(".thankyou");
const wrapperInner = document.querySelector(".wrapper-inner");
const errorMessage = document.querySelector(".errorMessage");

// Code

const active = "active";
let rating;

ratingButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
        const clickedRating = e.target;
        errorMessage.innerText = "";

        ratingButtons.forEach((button) => {
            button.classList.remove(active);
        });

        clickedRating.classList.toggle(active);
        rating = clickedRating.innerText;
    });
});

submitButton.addEventListener("click", function () {
    if (rating) {
        wrapperInner.classList.add("flipped");
        ratingMessage.innerText = `You selected ${rating} out of 5`;
    } else {
        errorMessage.innerText = "Please select rating";
    }
});

thankyouCard.addEventListener("click", function () {
    wrapperInner.classList.remove("flipped");
});
