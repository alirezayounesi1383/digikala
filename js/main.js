import { menu } from "./header.js";
import { txt, open } from "./footer.js";
import { fastdelivery } from "./fastdelivery.js";
txt();
menu();
fastdelivery();
open();
const persianDigits = "۰۱۲۳۴۵۶۷۸۹";

function toPersianDigits(value) {
  return String(value).replace(/\d/g, (digit) => persianDigits[digit]);
}

// زمان شروع: ۱۲ ساعت
let totalSeconds = 12 * 60 * 60;

function updateTimers() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const time = {
    hours: toPersianDigits(String(hours).padStart(2, "0")),
    minutes: toPersianDigits(String(minutes).padStart(2, "0")),
    seconds: toPersianDigits(String(seconds).padStart(2, "0")),
  };

  // به‌روزرسانی تمام نمایشگرهای تایمر در صفحه
  document.querySelectorAll(".timer").forEach((timer) => {
    timer.querySelector(".hours").textContent = time.hours;
    timer.querySelector(".minutes").textContent = time.minutes;
    timer.querySelector(".seconds").textContent = time.seconds;
  });

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    clearInterval(timerInterval);
  }
}

updateTimers();
const timerInterval = setInterval(updateTimers, 1000);
