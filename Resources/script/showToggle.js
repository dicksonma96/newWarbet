export default function showToggle() {
  $("[show-modal]").click(function () {
    let modal = $(this).attr("show-modal");
    $(`.${modal}`).css("display", "grid");
  });
  $(".close_modal").click(function () {
    $(this).closest(".modal").hide();
  });
  $(".modal").click(function () {
    $(this).hide();
  });
  $(".modal_content").click(function (e) {
    e.stopPropagation();
  });

  $(".custom_tab").click(function () {
    let displayType = $(this).attr("data-showType") || "flex";
    let showItem = $(this).attr("data-show");
    let hideItem = $(this).attr("data-hide");
    $(`[data-hide="${hideItem}"]`).removeClass("tab_active");
    $(`[data-show="${showItem}"]`).addClass("tab_active");

    $(`.${hideItem}`).hide();
    $(`.${showItem}`).css("display", displayType);
  });
}
