document.getElementById("enableNotifications").addEventListener("click", function() {
    if ("Notification" in window) {
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                scheduleNotification();
            }
        });
    } else {
        alert("Browser Anda tidak mendukung notifikasi.");
    }
});

function scheduleNotification() {
    const verses = [
        "Matius 5:16 - Biarlah terangmu bercahaya di depan orang.",
        "Yohanes 3:16 - Karena begitu besar kasih Allah akan dunia ini.",
        "Filipi 4:13 - Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku."
    ];

    const notificationTime = new Date();
    notificationTime.setHours(9); // Set jam notifikasi
    notificationTime.setMinutes(0);
    notificationTime.setSeconds(0);

    if (notificationTime < new Date()) {
        notificationTime.setDate(notificationTime.getDate() + 1);
    }

    const timeout = notificationTime.getTime() - new Date().getTime();

    setTimeout(() => {
        const randomVerse = verses[Math.floor(Math.random() * verses.length)];
        new Notification("Ingat untuk membaca Alkitab!", {
            body: randomVerse,
        });
        scheduleNotification();
    }, timeout);
}
