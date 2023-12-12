var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

sideNav.style.right = "-250px";

menuBtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.src =
      "https://cdn.icon-icons.com/icons2/2518/PNG/512/x_icon_150997.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png";
  }
};
var scroll = new SmoothScroll('a[href*="#"]', {
speed: 1000,
speedAsDuration: true
});
