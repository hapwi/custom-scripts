// ==UserScript==
// @name         GitHub: Add "Repos" Link
// @version      1.0
// @description  Inserts a "repos" link into GitHub header
// @match        https://github.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==
(() => {
  function addRepoLink() {
    if (
      document.querySelector(
        ".AppHeader-context-full " +
          '[href="https://github.com/hapwi?tab=repositories"]'
      )
    ) {
      return;
    }
    const separator = document.createElement("span");
    separator.className = "AppHeader-context-item-separator";
    separator.textContent = "/";
    separator.style.margin = "10px 1px";
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = "https://github.com/hapwi?tab=repositories";
    anchor.setAttribute(
      "data-analytics-event",
      '{"category":"SiteHeaderComponent",' +
        '"action":"context_region_crumb","label":"repos",' +
        '"screen_size":"full"}'
    );
    anchor.setAttribute("data-view-component", "true");
    anchor.className = "AppHeader-context-item";
    anchor.style.cssText = "font-size:14px;color:inherit;text-decoration:none";
    const spanLabel = document.createElement("span");
    spanLabel.className = "AppHeader-context-item-label";
    spanLabel.textContent = "repos";
    spanLabel.style.cssText = "vertical-align:middle;font-weight:normal";
    anchor.appendChild(spanLabel);
    listItem.appendChild(anchor);
    const list = document.querySelector(
      '.AppHeader-context-full [role="list"]'
    );
    if (list) {
      list.appendChild(separator);
      list.appendChild(listItem);
    }
  }

  const observer = new MutationObserver(() => addRepoLink());
  observer.observe(document, {
    childList: true,
    subtree: true,
  });
  document.addEventListener("DOMContentLoaded", addRepoLink);
})();
