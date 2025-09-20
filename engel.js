(function() {
    // Ctrl (Control, Strg) tuşunu her koşulda engelle
    document.addEventListener('keydown', function(e) {
        const key = e.key.toUpperCase();

        // Eğer basılan tuş Ctrl/Strg ise
        if (key === "CONTROL" || key === "CONTROLLEFT" || key === "CONTROLRIGHT") {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        // F12
        if (key === "F12") e.preventDefault();

        // Ctrl kombinasyonları
        if (e.ctrlKey) {
            e.preventDefault(); // Tüm Ctrl kombinasyonlarını engelle
            return false;
        }

        // Alt + Shift kombinasyonları
        if (e.altKey && e.shiftKey && ["I","J"].includes(key)) e.preventDefault();
    });

    // Sağ tık ve orta tık engelle
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('mousedown', e => { 
        if(e.button === 2 || e.button === 1) e.preventDefault(); 
    });

    // Mobil engeller
    document.addEventListener('touchstart', function(e) {
        if(e.touches.length > 1) e.preventDefault();
    }, {passive: false});
    document.addEventListener('gesturestart', e => e.preventDefault());
    document.addEventListener('selectstart', e => e.preventDefault());
    document.addEventListener('copy', e => e.preventDefault());
    document.addEventListener('cut', e => e.preventDefault());
    document.addEventListener('paste', e => e.preventDefault());

    // DevTools açılırsa sayfayı kapat / yönlendir
    let devtoolsOpen = false;
    const threshold = 160;

    setInterval(function() {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;

        if (widthThreshold || heightThreshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                try {
                    window.close();
                } catch (err) {
                    window.location.href = "about:blank";
                }
            }
        } else {
            devtoolsOpen = false;
        }
    }, 1000);
})();
