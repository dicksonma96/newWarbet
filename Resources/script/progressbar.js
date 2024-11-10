export default function () {
  $(".progress").each(function () {
    let percent = $(this).attr("data-percent");
    $(this).append(`<div class="bar" style="width:${percent}%"></div>`);
  });
}
