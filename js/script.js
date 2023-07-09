
const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

const targetDate = new Date("2023-09-01");
const currentDate = new Date();
const timeDifference = targetDate - currentDate;
const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popupContainer = document.getElementById("popupContainer");

let secValue = Math.floor((timeDifference % (1000 * 60)) / 1000),
  minValue = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
  hourValue = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ),
  dayValue = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const myTextElement = document.getElementsByClassName("number");
const timeFunction = setInterval(() => {
  secValue--;

  if (secValue === 0) {
    minValue--;
    secValue = 60;
  }
  if (minValue === 0) {
    hourValue--;
    minValue = 60;
  }
  if (hourValue === 0) {
    dayValue--;
    hourValue = 24;
  }

  if (dayValue === 0) {
    for (let i = 0; i < myTextElement.length; i++) {
      myTextElement[i].style.color = "darkred";
    }
  }

  if (dayValue === 0 && hourValue === 0 && secValue===0 && minValue===0) {
    // if (dayValue === 0 && hourValue === 0){
    clearInterval(timeFunction);
    popupContainer.style.display = "block";
  }
  seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
  minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
  hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
  days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000); //1000ms = 1s


closePopupButton.addEventListener("click", function () {
  popupContainer.style.display = "none";
});
