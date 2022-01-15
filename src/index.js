import { join } from "./join";

const render = (rootId) => {
  const domRootElement = document.getElementById(rootId);
  const element = document.createElement("div");
  element.innerHTML = join("Hi there 👋", "you are all set 🛠🙂 ");
  domRootElement.appendChild(element);
};

export { render };
