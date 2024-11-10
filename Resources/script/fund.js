export default function () {
  $(".expander").click(function () {
    $(this).parent(".wallet_list").toggleClass("list_active");
  });
}
