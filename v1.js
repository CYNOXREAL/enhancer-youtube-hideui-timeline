(function() {
    'use strict';

    let uiHidden = false;
    let hideTimeout = null;

    // Styles for smooth hiding
    const style = document.createElement('style');
    style.textContent = `
        .yt-clean-hide .ytp-chrome-bottom,
        .yt-clean-hide .ytp-chrome-top,
        .yt-clean-hide #info,
        .yt-clean-hide #meta,
        .yt-clean-hide #menu-container,
        .yt-clean-hide #comments {
            opacity: 0 !important;
            transition: opacity 0.4s ease;
            pointer-events: none !important;
        }
    `;
    document.head.appendChild(style);

    // Handle "H" shortcut
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;

        if (e.key.toLowerCase() === 'h') {
            uiHidden = !uiHidden;
            document.body.classList.toggle('yt-clean-hide', uiHidden);
        }
    });

    // Auto-hide on pause
    const waitForVideo = setInterval(() => {
        const video = document.querySelector('video');
        if (video) {
            clearInterval(waitForVideo);

            video.addEventListener('pause', () => {
                clearTimeout(hideTimeout);
                hideTimeout = setTimeout(() => {
                    document.body.classList.add('yt-clean-hide');
                    uiHidden = true;
                }, 2000); // 2 seconds after pause
            });

            video.addEventListener('play', () => {
                clearTimeout(hideTimeout);
                document.body.classList.remove('yt-clean-hide');
                uiHidden = false;
            });
        }
    }, 500);
})();
