export default () => {
  console.log("Hello Menu!");
  document.querySelector("body").style.backgroundImage = "none";

  // Select and create elements
  const divContent = document.querySelector("div#content");
  const pinkCakeHeadline = document.createElement("h1");

  //Modify text content
  pinkCakeHeadline.textContent = "Pink Strawberry Superb Cake";

  //Append child to content body
  divContent.appendChild(pinkCakeHeadline);
};
