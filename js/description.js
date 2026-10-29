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

export { txt };
