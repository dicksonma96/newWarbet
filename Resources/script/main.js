import CustomDropdown from "./customDropdown.js";
import { InitSwiper } from "./homeBanner.js";
import SlotLobby from "./slotLobby.js";
import FishingLobby from "./fishingLobby.js";
import ShowToggle from "./showToggle.js";
import Timer from "./timer.js";
import ProgressBar from "./progressbar.js";
import Fund from "./fund.js";

$(document).ready(function () {
  CustomDropdown();
  InitSwiper();
  SlotLobby();
  FishingLobby();
  ShowToggle();
  Timer();
  ProgressBar();
  Fund();
});
