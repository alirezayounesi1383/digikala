function txt() {
  let open = document.querySelector("#open");
  let close = document.querySelector("#close");
  let txt = document.querySelector("section.describe div.txt");
  let shadow = document.querySelector("section.describe div.txt div.shadow");

  open.addEventListener("click", opentxt);
  close.addEventListener("click", closetxt);
  function opentxt() {
    txt.style.height = "fit-content";
    shadow.style.display = "none";
    open.style.display = "none";
    close.style.display = "block";
  }
  function closetxt() {
    txt.style.height = "25dvh";
    shadow.style.display = "block";
    open.style.display = "block";
    close.style.display = "none";
  }
}

function open() {
  const head = [...document.querySelectorAll(".ease h2 span")];
  const body = [...document.querySelectorAll("div.as")];
  const door = document.querySelector(".sponser h2 span");
  const box = document.querySelector(".sponser div.box");
  door.addEventListener("click", function () {
    let open = box.style.display === "grid";
    box.style.display = "none";
    if (!open) {
      box.style.display = "grid";
    }
  });
  head.forEach((head, index) => {
    head.addEventListener("click", () => {
      const isOpen = body[index].style.display === "flex";

      // همهٔ بخش‌ها را ببند
      body.forEach((body) => {
        body.style.display = "none";
      });

      // اگر بخش کلیک‌شده قبلاً بسته بود، بازش کن
      if (!isOpen) {
        body[index].style.display = "flex";
      }
    });
  });
}
export { txt, open };
