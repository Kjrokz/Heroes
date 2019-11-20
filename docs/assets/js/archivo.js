$(document).ready(function() {
  /*   if ($(".custom-control-input").is(":checked")) {
   
  } else {
    console.log("Hola mundo");
  } */

  $(".custom-control-input").on("change", function() {
    if ($(this).is(":checked")) {
      // Hacer algo si el checkbox ha sido seleccionado
      /* alert("El checkbox con valor " + $(this).val() + " ha sido seleccionado"); */

      $(".card").css("background-color", "#343a40");
      $("body").css("color", "white");
      $("body").css("background-color", "#a4a4a4");
      $(".jumbotron").css("background-color", "#76797b");
      $("#caja").css("background-color", "#343a40");
    } else {
      // Hacer algo si el checkbox ha sido deseleccionado
      /*  alert(
        "El checkbox con valor " + $(this).val() + " ha sido deseleccionado"
      ); */
      $(".card").css("background-color", "white");
      $("body").css("color", "#212529");
      $("body").css("background-color", "white");
      $(".jumbotron").css("background-color", "#e9ecef");
      $("#caja").css("background-color", "white");
    }
  });
});

$(window).scroll(function() {
  scroll = $(window).scrollTop();
  if (scroll > 30) {
    $(".bg-dark").css("background-color", "red !important;");
    //$(".menu .logo").css({ color: "black" });
  } else {
    // $(".menu a").css({ color: "rgb(240, 240, 232)" });
    //$(".menu .logo").css({ color: "rgb(240, 240, 232)" });
    $(".bg-dark").css("background-color", "#343a40!important");
  }
});
