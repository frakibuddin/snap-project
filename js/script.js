//menu function
const mobile_menu = document.querySelector(".mobile-menu");
const toggle_icon = document.querySelector(".toggle-icon");

toggle_icon.onclick = () => {
  mobile_menu.classList.toggle("active");
  toggle_icon.classList.toggle("active");
};
//tap to top btn
const tap_top_btn = document.querySelector(".tap-toTop");

window.onscroll = function () {
  let posHight = document.documentElement.scrollHeight;
  let pos = window.scrollY;

  if (pos > posHight - 3000) {
    tap_top_btn.classList.add("active");
  } else {
    tap_top_btn.classList.remove("active");
  }
};

tap_top_btn.onclick = function () {
  document.documentElement.scrollTop = 0;
};

//AOS on scroll ani mation
AOS.init();
