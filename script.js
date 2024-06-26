// on sclorl

let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

// njn
$(function() {
  // Get random number between 2 ranges
  function randomNum(m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
  }
  
  function heartAnimation() {
    $this = $('.effect-text');
    var heartCount = ($this.width()/50)*5;
    for (var i = 0; i< heartCount; i++) {
      var heartSize = (randomNum(60, 120) / 10);
      $this.append('<span class="tiny-heart" style="top: '+ randomNum(40, 80) +'%; left: '+ randomNum(0, 100) +'%; width: '+ heartSize +'px; height: '+ heartSize +'px ; animation-delay: -'+ randomNum(0, 3) +'s; animation-duration: '+ randomNum(2, 5) +'s"></span>')
    }
  }
  
  heartAnimation();
})