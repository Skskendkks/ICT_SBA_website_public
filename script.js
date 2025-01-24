function loadTemplate(element, templateUrl) {
  fetch(templateUrl)
    .then((response) => response.text())
    .then((template) => document.querySelectorAll(element)[0].innerHTML = template);
}

loadTemplate("header.chinese", "template/header.html");
loadTemplate("nav.chinese", "template/nav.html");
loadTemplate("footer.chinese", "template/footer.html");
loadTemplate("header.english", "template/header-eng.html");
loadTemplate("nav.english", "template/nav-eng.html");
loadTemplate("footer.english", "template/footer-eng.html");
let isNavButtonsShow = false;

function toggleNavButtonsVisibility() {
  isNavButtonsShow = !isNavButtonsShow;
  for (const btn of document.querySelectorAll("nav .yellow-link")) {
    btn.setAttribute('style', isNavButtonsShow ? 'display:block !important' : '');
  }
}

function onToggleTextonly() {
  if (localStorage.getItem("style-file") !== "testonly") {
    localStorage.setItem("style-file", "testonly");
  } else {
    localStorage.setItem("style-file", "no");
  }

  window.location.reload();
}

function onTogglePrintonly() {
  if (localStorage.getItem("style-file") !== "printonly") {
    localStorage.setItem("style-file", "printonly");
  } else {
    localStorage.setItem("style-file", "no");
  }

  window.location.reload();
}

var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
if (localStorage.getItem("style-file") === "testonly")
  link.href = 'text-only-style.css';
else if (localStorage.getItem("style-file") === "printonly")
  link.href = 'print-version-style.css';
else
  link.href = 'style.css';
head.appendChild(link);