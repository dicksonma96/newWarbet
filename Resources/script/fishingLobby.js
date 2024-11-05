const fishing = [
  {
    name: "Fishing All Star",
    img: "1",
    hot: true,
    new: true,
  },
  {
    name: "Boom Legend",
    img: "2",
    hot: true,
    new: false,
  },
  {
    name: "Mega Fishing",
    img: "3",
    hot: false,
    new: false,
  },
  {
    name: "Dragon Fortune",
    img: "4",
    hot: false,
    new: true,
  },
  {
    name: "Happy Fishing",
    img: "5",
    hot: false,
    new: false,
  },
];

export default function FishingLobby() {
  let current_lobby = $('<div class="lobby"></div>');

  function populateGame() {
    fishing.forEach((item) => {
      let badges = $('<div class="badges col"></div>');

      let fish_item = $(`<div class="game col">
                <img class="thumbnail" src="Resources/Images/fishing/${item.img}.png" />
                <div class="hover col">
                          <span>${item.name}</span>
                        <div class="button_1 play_btn">
                                  <img src="Resources/Images/icon/play.svg" alt="">
                                  <span>PLAY NOW</span>
                              </div>
                </div>
                </div>`);
      if (item.hot) {
        badges.append(
          "<div class='badge' style='background:#FF1F4A; color:white'>HOT</div>"
        );
      }
      if (item.new) {
        badges.append(
          "<div class='badge' style='background:#00E717; color:white'>NEW</div>"
        );
      }
      fish_item.append(badges);
      fish_item.appendTo(current_lobby);
    });
  }
  populateGame();

  current_lobby.appendTo("#fishing_lobby");
}
