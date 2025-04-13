const clock = document.getElementById("clock");
const toggle = document.getElementById("toggle");
let is12Hour = false;

function updateClock() {
  const now = new Date();
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: is12Hour,
    timeZone: 'Asia/Taipei'
  };
  const formatter = new Intl.DateTimeFormat('zh-TW', options);
  clock.textContent = formatter.format(now);
}

toggle.addEventListener("click", () => {
  is12Hour = !is12Hour;
  toggle.textContent = is12Hour ? "切換為 24 小時制" : "切換為 12 小時制";
  updateClock();
});

setInterval(updateClock, 1000);
updateClock();
