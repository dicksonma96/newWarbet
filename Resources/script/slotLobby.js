const provider = [
  {
    name: "Show All",
    subnav: ["All", "Slot", "Fishing"],
    game: [
      {
        name: "Golden Fist",
        img: "golden_fist",
        cat: ["Slot"],
        hot: true,
        new: true,
      },
      {
        name: "Love Idol",
        img: "love_idol",
        cat: ["Slot"],
        hot: true,
      },
      {
        name: "Muay Thai",
        img: "muay_thai",
        cat: ["Fishing"],
        hot: false,
      },
    ],
    defaultActive: true,
  },
  {
    name: "spgb",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
  {
    name: "lucky",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
  {
    name: "ppy",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
  {
    name: "jili",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
  {
    name: "ygr",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
  {
    name: "simple",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
  {
    name: "pussy",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
  {
    name: "next",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
  {
    name: "mk",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
  {
    name: "mega",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
  {
    name: "funta",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
  {
    name: "funky",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
  {
    name: "fachai",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
  {
    name: "cq9",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
  {
    name: "918",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
  {
    name: "888king",
    subnav: ["All", "Slot", "Fishing", "EGame"],
    game: [],
  },
];

export default function SlotLobby() {
  let lobby_nav = $('<nav class="lobby_nav row"></nav>');
  let current_subnav = $('<nav class="lobby_subnav row"></nav>');
  let current_lobby = $('<div class="lobby"></div>');

  function populateLobby(game, subnav) {
    current_subnav.empty();

    function populateGame(category) {
      current_lobby.empty();
      game.forEach((item) => {
        let badges = $('<div class="badges col"></div>');
        if (category != "All")
          if (!item.cat.includes(category)) {
            return;
          }
        let game = $(`<div class="game col">
                  <img class="thumbnail" src="Resources/Images/slot/${item.img}.png" />
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
        game.append(badges);
        game.appendTo(current_lobby);
      });
    }
    populateGame("All");

    subnav.forEach((item, index) => {
      let subnav_item = $(`<div class="lobby_subnav_item ${
        index == 0 ? "lobby_subnav_active" : ""
      } col">
            ${item}
            </div>`);

      subnav_item.on("click", function () {
        $(".lobby_subnav_item").removeClass("lobby_subnav_active");
        $(this).addClass("lobby_subnav_active");
        populateGame(item);
      });

      subnav_item.appendTo(current_subnav);
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
      populateLobby(game, subnav);
    }

    nav_item.on("click", function () {
      $(".nav_item").removeClass("nav_active");
      $(this).addClass("nav_active");
      populateLobby(game, subnav);
    });

    nav_item.appendTo(lobby_nav);
  });

  //---------------------------------

  lobby_nav.appendTo("#slot_lobby");
  current_subnav.appendTo("#slot_lobby");
  current_lobby.appendTo("#slot_lobby");
}
