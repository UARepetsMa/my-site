//Timer for sales
const countDownDate = new Date("Jan 1, 2021 09:00:00").getTime();
const timer = document.getElementById("counter");
const update = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  timer.innerHTML = days + " Days " + hours + " Hours "  + minutes + " Minutes " + seconds + " Seconds";
  timer.style.cssText = "color: gray; border: 1px solid red; font-weight: bold; font-size: 30px";
  if (distance < 0) {
    clearInterval(update);
    timer.innerHTML = "Sales are over";
  }
}, 1000);

//scroller to nav bar
window.onscroll = function() {scrollFunction()};
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
function scrollFunction() {
if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    //navbar.style.backgroundColor = "green";
} else {
    navbar.classList.remove("sticky");
    //navbar.style.backgroundColor = "transparent";
  }
}