import { Language } from "./language.js";
import { InitSwiper } from "./homeBanner.js";
import SlotLobby from "./slotLobby.js";
import FishingLobby from "./fishingLobby.js";
import ShowToggle from "./showToggle.js";

$(document).ready(function () {
  Language();
  InitSwiper();
  SlotLobby();
  FishingLobby();
  ShowToggle();
});
