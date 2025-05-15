# GitHub "Repos" Link Userscript

A small userscript that adds a **Repos** link to the GitHub site header for quick access to your repositories page.

## Requirements

- A modern browser (Chrome, Firefox, Edge, Opera).
- [Tampermonkey](https://www.tampermonkey.net/) extension installed.

## Installation

1. Install the Tampermonkey extension:
   - **Chrome**: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
   - **Firefox**: https://addons.mozilla.org/firefox/addon/tampermonkey/
   - **Edge**: https://www.microsoft.com/store/apps/9nblggh5162s
   - **Opera**: https://addons.opera.com/en/extensions/details/tampermonkey/

2. Open the Tampermonkey dashboard and click **Add a new script**.

3. Delete the default template code and paste the contents of `repos/show-repos-gh.js`.

4. Save the script (Ctrl+S / Cmd+S).

## Usage

Navigate to any GitHub page (`https://github.com/*`). Once the page has loaded, you'll see a new **repos** link in the header. Clicking it will take you to:

```
https://github.com/hapwi?tab=repositories
```

## Customization

- To point the link to your own GitHub profile, open the script in Tampermonkey and replace all instances of `hapwi` in the `githubUsername` variable with your GitHub username.

---

*Feel free to modify and redistribute this script as you like.* 