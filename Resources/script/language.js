export function Language() {
  $(".language_picker").click(function (event) {
    event.stopPropagation();
    $(this).parents(".language").toggleClass("language_show");
  });
  $(document).click(function (event) {
    if (!$(event.target).closest(".language").length) {
      $(".language").removeClass("language_show");
    }
  });
}
