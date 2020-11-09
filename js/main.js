const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const focus = document.getElementById('focus');

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  const amOrPm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amOrPm}`;
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
    document.body.style.backgroundSize = "cover";
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = 'Good Afternoon';
  } else {
    document.body.style.backgroundImage = "url('../img/evening.jpg')";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = 'Good Evening';
  }
}

function getFocus() {
  try {
    fetch('http://localhost:5000/focus', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => focus.textContent = data[0].todo)
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
}

function postData() {
  try {
    const item = localStorage.getItem('focus');

    if (item !== null) {
      fetch('http://localhost:5000/focus',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'PUT',
          body: JSON.stringify({ item })
        })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }
  } catch (err) {
    console.log(err);
  }
}

function setFocus(e) {

  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
      postData();
      location.reload();
    }
  }
}



focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBackgroundGreeting();
getFocus();

