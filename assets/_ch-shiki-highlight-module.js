import {codeToHtml} from "./_ch-shiki.bundle.js";
(async () => {
  const elements = document.querySelectorAll("pre[data-language]");
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    const html = await codeToHtml(element.textContent, {
      lang: element.dataset.language,
      theme: isDarkMode ? "dark-plus" : "light-plus",
    });

    const template = document.createElement("template");
    template.innerHTML = html;
    const newElement = template.content.firstChild;

    const oldStyle = element.getAttribute("style") || "";
    const newStyle = newElement.getAttribute("style") || "";
    newElement.setAttribute("style", `${newStyle};${oldStyle}`);

    element.replaceWith(newElement);
  }
})();
