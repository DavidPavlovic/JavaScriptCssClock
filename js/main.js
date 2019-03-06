const hourHand = document.querySelector('.hour-hand');
const secondHand = document.querySelector('.sec-hand');
const minutesHand = document.querySelector('.min-hand');
const hand = document.querySelectorAll('.hand');
const hourTime = document.querySelector('.hour');
const minutesTime = document.querySelector('.min');
const secondesTime = document.querySelector('.sec');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const hourDegrees = ((hours / 12) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourTime.textContent = hours;
    minutesTime.textContent = minutes;
    secondesTime.textContent = seconds;

    hand.forEach(el => {
        //el.style.transition = (seconds === 0) ? 'none' : null;
        if(seconds === 0) {
            el.style.transition = 'none';
        }else {
            el.style.transition = null;
        }
    });
}

setInterval(setDate, 1000);