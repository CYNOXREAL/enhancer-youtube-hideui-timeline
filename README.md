# 🎬 enhancer-youtube-hideui-timeline / YouTube Clean Screenshot Mode

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

A lightweight userscript that hides YouTube's interface (UI) for clean, distraction‑free screenshots.  
Toggle the UI instantly with the `H` key or let it auto‑hide after pausing the video.

## ✨ Features
- **Keyboard shortcut**: Press `H` to hide/show the YouTube UI (player controls, video info, comments, etc.).
- **Auto‑hide on pause**: UI fades out automatically 2 seconds after pausing.
- **Smooth fade effect**: UI elements fade in/out for a clean look.
- **Non‑intrusive**: Works only on YouTube, ignores text fields and editable areas.

## 🎯 Use Cases
- Taking clean screenshots for tutorials, presentations, or thumbnails.
- Watching videos without distractions.
- Creating cinematic stills from YouTube content.

## 📦 Installation

1. Install **[Enhancer for YouTube](https://www.mrfdev.com/enhancer-for-youtube)** in your browser.
2. Open the Enhancer for YouTube **settings**.
3. Go to the **Custom scripts** section.
4. Paste the contents of [`v1.js`](./v1.js) or [`no_auto_hide_v1.js`](no_auto_hide_v1.js) into the script field.
5. Save changes and refresh YouTube.
6. Press `H` to toggle the UI, or pause the video and wait 2 seconds for auto‑hide.


## 🛠 How It Works
- Injects a small CSS snippet to hide specific YouTube UI elements.
- Listens for the `H` key to toggle a `.yt-clean-hide` class on `<body>`.
- Detects video pause/play events to trigger auto‑hide or restore the UI.

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

**Author:** [CYNOXREAL](./LICENSE)  
**Year:** 2025
