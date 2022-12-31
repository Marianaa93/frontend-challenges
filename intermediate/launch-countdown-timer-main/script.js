const day = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");

function timeUptade(time) {
  const timeinhours = time * 24;
  const countToDate = new Date().setHours(new Date().getHours() + timeinhours);

  setInterval(() => {
    const currentDate = new Date();
    const timeBetweenDates = Math.floor((countToDate - currentDate) / 1000);
    const d = Math.floor(timeBetweenDates / (24 * 3600));
    const hrs = Math.floor((timeBetweenDates / 3600) % 24);
    const min = Math.floor((timeBetweenDates / 60) % 60);
    const sec = Math.floor(timeBetweenDates % 60);

    day.innerHTML = d;
    hours.innerText = hrs;
    minutes.innerText = min;
    seconds.innerText = sec;
  }, 1000);
}
timeUptade(14);
