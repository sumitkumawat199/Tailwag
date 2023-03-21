$(document).ready(function () {
    $(".menu-btn").click(function () {
      $(".more").show("slide, right, 500");
      $(".mobile-menu-overlay").show("slide, right, 500");
    });
    $(".mobile-menu-overlay").click(function () {
      $(".more").hide("slide, right, 500");
      $(".mobile-menu-overlay").hide("slide, right, 500");
    });
      $(".login").click(function () {
        $(".login-form").show("slide, left, 500");
      });
      $(".close").click(function () {
        $(".login-form").hide("slide, left, 500");
      });
    });