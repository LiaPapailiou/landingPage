const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  const amOrPm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


function setBackgroundGreeting() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';
  } else {
    document.body.style.backgroundImage = "url('../img/evening.jpg')";
    greeting.textContent = 'Good Evening';
  }
}



showTime();
setBackgroundGreeting();