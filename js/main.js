//*!header part
let catagory = document.querySelector(".menu");
let items = document.querySelector("section.pop");
let back = document.querySelector("div.back");
let pages = document.getElementById("items");
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
console.log(pages[1]);

