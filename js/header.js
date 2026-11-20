function menu() {
  let catagory = document.querySelector(".menu");
  let items = document.querySelector("section.pop");
  let back = document.querySelector("div.back");
  let pages = document.getElementById("items");
  let menu = [...document.querySelectorAll("div.title>ul>li")];
  pages = [...pages.children];
  catagory.addEventListener("mouseenter", function () {
    items.style.display = "block";
    back.style.display = "block";
  });
  catagory.addEventListener("mouseleave", function () {
    items.style.display = "none";
    back.style.display = "none";
  });
  items.addEventListener("mouseleave", function () {
    items.style.display = "none";
    back.style.display = "none";
  });
  menu.forEach(function (elem, index) {
    elem.addEventListener("mouseenter", function () {
      pages.forEach(function (page) {
        page.style.display = "none";
      });

      if (pages[index]) {
        pages[index].style.display = "flex";
      }
    });
  });
}
export { menu };
