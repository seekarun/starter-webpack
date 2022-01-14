function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hi there 👋 you are all set 🛠🙂";
  return element;
}

document.body.appendChild(component());
