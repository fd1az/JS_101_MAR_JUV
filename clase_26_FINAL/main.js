const countDownform = document.querySelector('#countdownForm');
const inputContainer = document.querySelector('#input-container');
const dateEl = document.querySelector('#date-picker');
const titleEl = document.querySelector('#title');

const countDownElement = document.querySelector('#countdown');
const countDownTitle = document.querySelector('#countdown-title');
const timeElements = document.querySelectorAll('.countdown span');
const resetBtn = document.querySelector('#countdown-button-reset');

const complete = document.querySelector('#complete');
const info = document.querySelector('#complete-info');
const completeBtn = document.querySelector('#complete-button');

let title = '';
let date = '';
let countDownValue = Date;
let countDownActive;
let savedCountdown;

const second = 1000; // 1s
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const renderDom = () => {
  countDownActive = setInterval(() => {
    inputContainer.hidden = true;
    const now = new Date().getTime();
    const diff = countDownValue - now;

    const days = Math.floor(diff / day);
    const hours = Math.floor((diff % day) / hour);
    const minutes = Math.floor((diff % hour) / minute);
    const seconds = Math.floor((diff % minute) / second);

    if (diff < 0) {
      countDownElement.hidden = true;
      info.innerText = 'VAAAAMOOOOOO';
      clearInterval(countDownActive);
      complete.hidden = false;
    } else {
      complete.hidden = true;

      timeElements[0].innerText = days;
      timeElements[1].innerText = hours;
      timeElements[2].innerText = minutes;
      timeElements[3].innerText = seconds;
      countDownElement.hidden = false;
    }
  }, second);
};

const updateCountdown = (e) => {
  e.preventDefault();
  date = dateEl.value;
  title = titleEl.value;
  savedCountdown = {
    date,
    title,
  };

  localStorage.setItem('countdown', JSON.stringify(savedCountdown));

  if (date === '') {
    return;
  }
  countDownValue = new Date(date).getTime();
  renderDom();
};
const reset = () => {
  countDownElement.hidden = true;
  inputContainer.hidden = false;

  clearInterval(countDownActive);
  title = '';
  date = '';
  localStorage.removeItem('countdown');
};

const restoreCountdown = () => {
  if (localStorage.getItem('countdown')) {
    inputContainer.hidden = false;
    savedCountdown = JSON.parse(localStorage.getItem('countdown'));
    title = savedCountdown.title;
    date = savedCountdown.date;
    countDownValue = new Date(date).getTime();

    renderDom();
  }
};

function init() {
  const today = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
  )
    .toISOString()
    .split('Z')[0]
    .slice(0, 16);
  console.log(today);
  dateEl.min = today;
  restoreCountdown();
  countDownform.addEventListener('submit', updateCountdown);
  resetBtn.addEventListener('click', reset);
}

init();
