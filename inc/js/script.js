// ------------------------------------------------------------------------------ //
// Preloader
// ------------------------------------------------------------------------------ //

jQuery(window).on("load", function () {
  if (jQuery(".pre-loader-wrap").length > 0) {
    jQuery(".pre-loader-wrap").fadeOut("slow");
  }
});

// Smooth Scroll

jQuery(document).ready(function ($) {
  window.scroll({
    left: 0,
    behavior: "smooth",
  });

  $(".smooth-goto").click(function () {
    $("html, body").animate({ scrollTop: $(this.hash).offset().top - 50 }, 800);
    return false;
  });

  window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    // setup back to top link

    if (scrollHeight > 300) {
      $(".top-link").addClass("show-link");
    } else {
      $(".top-link").removeClass("show-link");
    }
  });
});

function updateCountdown(countDownDate) {
  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      // Remove Countdown Header
      jQuery(".header__countdown").addClass("hide");
      jQuery(".header__countdown").removeClass("show");

      // Add Release Header
      jQuery(".header__release").addClass("show");
      jQuery(".header__release").removeClass("hide");
    } else if (distance > 0) {
      // Add Countdown Header
      jQuery(".header__countdown").addClass("show");
      jQuery(".header__countdown").removeClass("hide");

      // Remove Release Header
      jQuery(".header__release").addClass("hide");
      jQuery(".header__release").removeClass("show");
    }
  }, 1000);
}
