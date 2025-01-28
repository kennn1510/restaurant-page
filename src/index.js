import "./style.css";
import "./initial-page-load.js";
import "./load-menu.js";

// addEventListeners to each button
// inside, it will erase all of the div#content and then run all the correct
// tab modules to populate the new content

(function addButtons() {
  const homeButton = document.querySelector("#home");
  const menuButton = document.querySelector("#menu");
  const aboutButton = document.querySelector("#about");

  homeButton.addEventListener("click", () => {
    document.body.textContent = "";
  });
})();
