/* var menuBtn = document.getElementById("menuBtn");
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
}); */

// Standardizing variable names
var toggleButton = document.getElementById("menuBtn");
var sideNavContainer = document.getElementById("sideNav");
var menuImage = document.getElementById("menu");

// Initialize sideNav position
sideNavContainer.style.right = "-250px";

// Toggle sideNav on button click
toggleButton.onclick = function () {
  if (sideNavContainer.style.right === "-250px") {
    sideNavContainer.style.right = "0";
    menuImage.src = "https://cdn.icon-icons.com/icons2/2518/PNG/512/x_icon_150997.png";
  } else {
    sideNavContainer.style.right = "-250px";
    menuImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png";
  }
};

// Initialize SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});
