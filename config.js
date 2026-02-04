// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Daniela",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕 ❤️', '❤️', '🌻', '🌻', '⭐', '✨', '🌟'🫀
    pageTitle: "Quieres ser mi san valentin? :p 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🫀'],  // Heart emojis
        bears: ['⭐']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Me quieres? :p",                                    // First interaction
            yesBtn: "SI",                                             // Text for "Yes" button
            noBtn: "NO :c",                                               // Text for "No" button
            secretAnswer: "Eres mi femboysito :p 🫀"           // Secret hover message
        },
        second: {
            text: "Que tanto me quieres :p?",                          // For the love meter
            startText: "Asi de bastante!",                                   // Text before the percentage
            nextBtn: "Siguiente ps 🫀"                                         // Text for the next button
        },
        third: {
            text: "Quieres ser mi san valentin este 14 c: ? 🌻", // The big question!
            yesBtn: "Sip",                                             // Text for "Yes" button
            noBtn: "Nou"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WAOS asi me quieres, que lindo 🌻",  // Shows when they go past 5000%
        high: "Al infinito y más allá",              // Shows when they go past 1000%
        normal: "Gracias c:"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Te amo muchisimo mi up 🫀",
        message: "TU PREMIO ES QUE TE QUIERO PS XDDDD 🌻",
        emojis: "🌻"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#F63049",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#D02752",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#8A244B",     // Button color (should stand out against the background)
        buttonHover: "#9c0000",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#111F35"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.3s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dcldadfwx/video/upload/v1770235285/Lobby_song_Week_4_by_desesseintes_Clinical_Trial_OST_-_Clinical_Trial_orurlj.mp3", // Music streaming URL
        startText: "🎵 Musiquita",        // Button text to start music
        stopText: "🔇 No musiquita",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 