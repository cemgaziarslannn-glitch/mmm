(function() {
    // 1️⃣ Tuş kombinasyonlarını ve özel tuşları engelle
    document.addEventListener('keydown', function(e) {
        const key = e.key.toUpperCase();

        // Tek başına engellenmesini istediğin tuşlar
        const blockedKeys = [
            "CONTROL", "SHIFT", "ALT", "ALTGRAPH", "FN", "STRG"
        ];

        // Eğer bu tuşlardan biri basılırsa engelle
        if (blockedKeys.includes(key)) {
            e.preventDefault();
            return false;
        }

        // F12
        if (key === "F12") e.preventDefault();

        // Ctrl veya Ctrl+Shift kombinasyonları
        if (e.ctrlKey) {
            // Ctrl + Shift + I/J/C/S
            if (e.shiftKey && ["I","J","C","S"].includes(key)) e.preventDefault();
            // Ctrl + U/S/P/A/C
            if (!e.shiftKey && ["U","S","P","A","C"].includes(key)) e.preventDefault();
        }

        // Ctrl + Shift + K (Firefox)
        if (e.ctrlKey && e.shiftKey && key === "K") e.preventDefault();

        // Alt + Shift + I/J (bazı tarayıcılar)
        if (e.altKey && e.shiftKey && ["I","J"].includes(key)) e.preventDefault();
    });

    // 2️⃣ Sağ tık ve orta tık engelle
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('mousedown', e => { 
        if(e.button === 2 || e.button === 1) e.preventDefault(); 
    });

    // 3️⃣ Mobil: uzun basmayı ve seçmeyi engelle (Android/iOS)
    document.addEventListener('touchstart', function(e) {
        if(e.touches.length > 1) e.preventDefault(); // Çoklu dokunma engeli
    }, {passive: false});
    document.addEventListener('touchmove', function(e){}, {passive: false});
    document.addEventListener('gesturestart', e => e.preventDefault());
    document.addEventListener('selectstart', e => e.preventDefault());
    document.addEventListener('copy', e => e.preventDefault());
    document.addEventListener('cut', e => e.preventDefault());
    document.addEventListener('paste', e => e.preventDefault());
})();
