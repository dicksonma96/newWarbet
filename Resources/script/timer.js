export default function Timer() {
  function UpdateTimer() {
    $(".timer").each(function () {
      let seconds = $(this).attr("data-seconds");
      const days = Math.floor(seconds / (24 * 60 * 60));
      seconds %= 24 * 60 * 60;
      const hours = Math.floor(seconds / (60 * 60));
      seconds %= 60 * 60;
      const minutes = Math.floor(seconds / 60);
      seconds %= 60;

      $(this).empty();
      $(this).append(`
          <div class="col">
              <div class="button_2">${days}</div>
              <span>Days</span>
          </div>
          <div class="col">
              <div class="button_2">${hours}</div>
              <span>Days</span>
          </div>
          <div class="col">
              <div class="button_2">${minutes}</div>
              <span>Days</span>
          </div>
           <div class="col">
              <div class="button_2">${seconds}</div>
              <span>Days</span>
          </div>
          `);

      $(this).attr("data-seconds", $(this).attr("data-seconds") - 1);
    });
  }
  UpdateTimer();
  setInterval(UpdateTimer, 1000);
}
