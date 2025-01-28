import cake from "./cake.ico";

(function initialPageLoad() {
  const content = document.querySelector("#content");
  const heading = document.createElement("h1");
  const cakeImage = document.createElement("img");
  const welcome = document.createElement("h2");
  const welcomeParagraph = document.createElement("p");
  const location = document.createElement("h2");
  const locationParagraph = document.createElement("p");

  heading.textContent = "MyMy's Cake Shop";
  cakeImage.src = cake;
  welcome.textContent = "Welcome to our wonderful cake shop!";
  welcomeParagraph.textContent =
    "Come one, come all! Check out the best cake's the world has ever partaken!";
  location.textContent = "Location";
  locationParagraph.textContent =
    "12345 Cool Cakes Boulevard, Cakeland, Missouri";

  content.appendChild(welcome);
  content.appendChild(welcomeParagraph);
  content.appendChild(location);
  content.appendChild(locationParagraph);
  content.appendChild(heading);
  content.appendChild(cakeImage);
})();
