import { join } from "./join";

function component() {
  const element = document.createElement("div");
  element.innerHTML = join("Hi there 👋", "you are all set 🛠🙂");
  return element;
}

document.body.appendChild(component());
