const day = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const calendar = document.getElementById("calendar");

// function formatDate(timeReceived) {
//   let d = new Date(timeReceived),
//     month = "" + (d.getMonth() + 1),
//     day = "" + d.getDate(),
//     year = d.getFullYear();

//   if (month.length < 2) month = "0" + month;
//   if (day.length < 2) day = "0" + day;

//   return [year, month, day].join("-");
// }

function timeUpdate() {
  calendar.addEventListener("change", () => {
    const informedTime = calendar.value;

    const countToDate = new Date(informedTime);
    console.log(countToDate);
    // const test = new Date().setHours(new Date().getHours() + 240);
    setInterval(() => {
      const currentDate = new Date();
      const timeBetweenDates = Math.floor((countToDate - currentDate) / 1000);
      const d = Math.floor(timeBetweenDates / (24 * 3600));
      const hrs = Math.floor((timeBetweenDates / 3600) % 24);
      const min = Math.floor((timeBetweenDates / 60) % 60);
      const sec = Math.floor(timeBetweenDates % 60);

      day.innerHTML = String(d).padStart(2, "0");
      hours.innerText = String(hrs).padStart(2, "0");
      minutes.innerText = String(min).padStart(2, "0");
      seconds.innerText = String(sec).padStart(2, "0");
    }, 1000);
  });
}
timeUpdate();
