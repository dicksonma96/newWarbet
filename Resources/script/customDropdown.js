export default function () {
  $(".language_picker").click(function (event) {
    event.stopPropagation();
    $(this).parents(".language").toggleClass("language_show");
  });

  $(".user_panel").click(function (event) {
    event.stopPropagation();
    $(this).toggleClass("user_menu_show");
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".language").length) {
      $(".language").removeClass("language_show");
    }
  });
}
