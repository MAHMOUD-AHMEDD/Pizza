let videos = document.querySelectorAll(".videoo .cont video");
let pop = document.querySelector(".popup_video");

for (let video of videos) {
  video.onclick = function () {
    pop.style.display = "block";
  };
}
let exit = document.querySelector(".popup_video i");
exit.onclick = function () {
  pop.style.display = "none";
};
