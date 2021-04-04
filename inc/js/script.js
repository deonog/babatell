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
    $("html, body").animate(
      { scrollTop: $(this.hash).offset().top - 50 },
      1000
    );
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
