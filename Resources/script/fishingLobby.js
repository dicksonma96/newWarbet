const provider = [
  {
    name: "Show All",
    subnav: ["All", "Slot", "Fishing"],
    game: [
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
    ],
    defaultActive: true,
  },
  {
    name: "spgb",
    subnav: [],
    game: [
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
    ],
  },
  {
    name: "jili",
    subnav: [],
    game: [
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
    ],
  },
];

export default function FishingLobby() {
  let lobby_nav = $('<nav class="lobby_nav row"></nav>');
  let current_lobby = $('<div class="lobby"></div>');

  function populateGame(game, subnav) {
    current_lobby.empty();
    game.forEach((item) => {
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

  provider.forEach((item) => {
    const { name, subnav, game } = item;
    let nav_item = $(
      `<div class="nav_item ${
        item.defaultActive ? "nav_active" : ""
      } row" data-show="${name}_lobby"></div>`
    );
    if (name == "Show All") nav_item.append("<span>Show All</span>");
    else
      nav_item.append(`<img src="Resources/Images/small_logos/${name}.png"/>`);

    if (item.defaultActive) {
      populateGame(game, subnav);
    }

    nav_item.on("click", function () {
      $(".nav_item").removeClass("nav_active");
      $(this).addClass("nav_active");
      populateGame(game, subnav);
    });

    nav_item.appendTo(lobby_nav);
  });

  lobby_nav.appendTo("#fishing_lobby");
  current_lobby.appendTo("#fishing_lobby");
}
