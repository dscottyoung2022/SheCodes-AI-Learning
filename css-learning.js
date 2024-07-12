function handleClick() {
  let heading = document.querySelector("h1");
  heading.classList.add = "highlight";
}

let buttonElement = document.querySelector("#my-button");
buttonElement.addEventListener("click", handleClick);
