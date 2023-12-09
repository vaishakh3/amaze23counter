// Set countdown date for 24 hours from the current time
let countdownDate = new Date();
countdownDate.setHours(countdownDate.getHours() + 24);

let timerInterval;

const daysElem = document.getElementById("days"),
    hoursElem = document.getElementById("hours"),
    minutesElem = document.getElementById("minutes"),
    secondsElem = document.getElementById("seconds"),
    timer = document.getElementById("timer"),
    content = document.getElementById("content");

const formatTime = (time, string) => {
    return time == 1 ? `${time} ${string}` : `${time} ${string}`;
};

const startCountdown = () => {
    const now = new Date().getTime();
    const countdown = new Date(countdownDate).getTime();

    const difference = (countdown - now) / 1000;

    if (difference < 1) {
        endCountdown();
    }

    let days = Math.floor(difference / (60 * 60 * 24));
    let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((difference % (60 * 60)) / 60);
    let seconds = Math.floor(difference % 60);

    daysElem.innerHTML = formatTime(days, "days");
    hoursElem.innerHTML = formatTime(hours, "hours");
    minutesElem.innerHTML = formatTime(minutes, "minutes");
    secondsElem.innerHTML = formatTime(seconds, "seconds");
};

const endCountdown = () => {
    clearInterval(timerInterval);
    timer.remove();
    content.classList.add("visible");
};

window.addEventListener("load", () => {
    startCountdown();
    timerInterval = setInterval(startCountdown, 1000);
});
