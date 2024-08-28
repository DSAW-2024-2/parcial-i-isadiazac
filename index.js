const share = document.querySelector(".share");
const sharePopup = document.querySelector(".sharePopup");

share.addEventListener("click", () => {
  sharePopup.style.display =
    sharePopup.style.display === "none" ? "flex" : "none";
});
