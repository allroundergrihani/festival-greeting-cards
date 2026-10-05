

// ==========================
// TOTAL CARDS
// ==========================
const TOTAL_CARDS = 100;

let currentLanguage = "english";
let currentFestival = "deepawali";

// Read festival from URL
const urlParams = new URLSearchParams(window.location.search);
const festivalFromURL = urlParams.get("festival");

if (festivalFromURL) {
    currentFestival = festivalFromURL;
}

// ==========================
// cards message 
// ==========================

const festivalGreetings = {

    deepawali: {
        title: "Happy Deepawali!",
        message:
            "May your life be filled with happiness, peace and prosperity."
    },

    durga: {
        title: "Happy Durga Puja!",
        message:
            "May Maa Durga bless you with strength, happiness and prosperity."
    },

    chhath: {
        title: "Happy Chhath Puja!",
        message:
            "May Chhathi Maiya and Surya Dev bless your family with happiness and good health."
    },

    karwa: {
        title: "Happy Karwa Chauth!",
        message:
            "May your bond of love grow stronger with every passing year."
    },

    christmas: {
        title: "Merry Christmas!",
        message:
            "May your Christmas be filled with love, peace and happiness."
    },

    eid: {
        title: "Eid Mubarak!",
        message:
            "May this beautiful occasion bring peace, happiness and prosperity."
    },

    newyear: {
        title: "Happy New Year!",
        message:
            "May the New Year bring happiness, good health and success."
    },

    janmashtami: {
        title: "Happy Janmashtami!",
        message:
            "May Lord Krishna fill your life with love, joy and blessings."
    },

    holi: {
        title: "Happy Holi!",
        message:
            "May your life be filled with beautiful colours, happiness and love."
    },

    pongal: {
        title: "Happy Pongal!",
        message:
            "May this harvest festival bring abundance, happiness and prosperity."
    },

    gurupurnima: {
        title: "Happy Guru Purnima!",
        message:
            "May the blessings and wisdom of your Guru always guide your path."
    },

    rakhi: {
        title: "Happy Raksha Bandhan!",
        message:
            "May the beautiful bond between brother and sister remain strong forever."
    },

    independence: {
        title: "Happy Independence Day!",
        message:
            "Celebrating the spirit of freedom, unity and our beautiful nation."
    },

    republic: {
        title: "Happy Republic Day!",
        message:
            "May we always cherish the values of unity, freedom and democracy."
    },

    bhaidooj: {
        title: "Happy Bhai Dooj!",
        message:
            "May the beautiful bond between brothers and sisters be filled with love and happiness."
    },

    teej: {
        title: "Happy Teej!",
        message:
            "May this beautiful festival bring happiness, love and prosperity."
    }

};

const hindiFestivalGreetings = {

    deepawali: {
        title: "शुभ दीपावली!",
        message: "दीपों का यह पावन पर्व आपके जीवन में सुख, शांति और समृद्धि लेकर आए।"
    },

    durga: {
        title: "शुभ दुर्गा पूजा!",
        message: "माँ दुर्गा आपके जीवन में शक्ति, सुख और समृद्धि प्रदान करें।"
    },

    chhath: {
        title: "शुभ छठ पूजा!",
        message: "छठी मैया और सूर्य देव आपके परिवार को सुख, शांति और स्वास्थ्य प्रदान करें।"
    },

    karwa: {
        title: "शुभ करवा चौथ!",
        message: "आपके प्रेम और विश्वास का बंधन सदा मजबूत बना रहे।"
    },

    christmas: {
        title: "मेरी क्रिसमस!",
        message: "क्रिसमस आपके जीवन में प्रेम, शांति और खुशियाँ लेकर आए।"
    },

    eid: {
        title: "ईद मुबारक!",
        message: "ईद का यह खूबसूरत अवसर आपके जीवन में शांति, खुशियाँ और समृद्धि लेकर आए।"
    },

    newyear: {
        title: "नव वर्ष की शुभकामनाएँ!",
        message: "नया वर्ष आपके जीवन में सुख, स्वास्थ्य और सफलता लेकर आए।"
    },

    janmashtami: {
        title: "शुभ जन्माष्टमी!",
        message: "भगवान श्रीकृष्ण आपके जीवन को प्रेम, आनंद और आशीर्वाद से भर दें।"
    },

    holi: {
        title: "होली की शुभकामनाएँ!",
        message: "रंगों का यह त्योहार आपके जीवन को प्रेम और खुशियों से भर दे।"
    },

    pongal: {
        title: "शुभ पोंगल!",
        message: "यह पावन फसल पर्व आपके जीवन में सुख और समृद्धि लेकर आए।"
    },

    gurupurnima: {
        title: "गुरु पूर्णिमा की शुभकामनाएँ!",
        message: "गुरु का आशीर्वाद और ज्ञान सदैव आपके जीवन का मार्गदर्शन करे।"
    },

    rakhi: {
        title: "रक्षाबंधन की शुभकामनाएँ!",
        message: "भाई-बहन का यह प्यारा रिश्ता सदा प्रेम और विश्वास से भरा रहे।"
    },

    independence: {
        title: "स्वतंत्रता दिवस की शुभकामनाएँ!",
        message: "आइए स्वतंत्रता, एकता और देशप्रेम की भावना का उत्सव मनाएँ।"
    },

    republic: {
        title: "गणतंत्र दिवस की शुभकामनाएँ!",
        message: "एकता, स्वतंत्रता और लोकतंत्र के मूल्यों का सम्मान सदैव बना रहे।"
    },

    bhaidooj: {
        title: "भाई दूज की शुभकामनाएँ!",
        message: "भाई-बहन का प्यारा रिश्ता सदा प्रेम और खुशियों से भरा रहे।"
    },

    teej: {
        title: "तीज की शुभकामनाएँ!",
        message: "तीज का यह पावन पर्व आपके जीवन में प्रेम, सुख और समृद्धि लेकर आए।"
    }

};


// Festival names

    const festivalNames = {

        deepawali: "Deepawali",

        durga: "Durga Puja",

        chhath: "Chhath Puja",

        karwa: "Karwa Chauth",

        christmas: "Christmas",

        eid: "Eid",

        newyear: "New Year",

        janmashtami: "Janmashtami",

        holi: "Holi",

        pongal: "Pongal",

        gurupurnima: "Guru Purnima",

        rakhi: "Raksha Bandhan",

        independence: "Independence Day",

        republic: "Republic Day",

        bhaidooj: "Bhai Dooj",

        teej: "Teej"

    };


// ==========================
// FESTIVAL TABS
// ==========================

function showFestival(festival, button) 
{

    currentFestival = festival;

    updateFestivalSelection(festival);
    

    // Change heading

    document.getElementById(
        "festival-title"
    ).textContent =
        festivalNames[festival]
        + " Greeting Cards";

        loadCards(festival);

        updateFavoriteButtonCount();

}

// ==========================
// FAVORITE CARDS
// ==========================

let favoriteCards =
    JSON.parse(
        localStorage.getItem("favoriteCards")
    ) || [];



// ==========================
// LOAD CARDS
// ==========================


function loadCards(festival) {

    let greeting;

let messages;


if (currentLanguage === "hindi") {

    greeting =
        hindiFestivalGreetings[festival];

    messages =
        hindiFestivalMessages[festival] ||
        [greeting.message];

} else {

    greeting =
        festivalGreetings[festival];

    messages =
        festivalMessages[festival] ||
        [greeting.message];

}

    const senderName =
    document.getElementById("sender-name").value;

    const container =
        document.getElementById("card-container");

    container.innerHTML = "";


    for (let i = 1; i <= TOTAL_CARDS; i++) {

        const number =
            String(i).padStart(2, "0");

            const message =
    messages[(i - 1) % messages.length];


        const card =
            document.createElement("div");

        card.className = "ecard";

        


        card.innerHTML = `

    <div class="card-image">

       <img
    src="assets/${festival}/card-${number}.jpg"
    alt="${festival} greeting card ${i}"
    loading="lazy"
    decoding="async"
    onerror="this.closest('.ecard').style.display='none'"
>

        <div class="card-message">

            <h3>
                ${greeting.title}
            </h3>

            <p>
                ${message}
            </p>

            <div class="sender-on-card">
                From:
                <span class="sender-display">${senderName}</span>
            </div>

        </div>

    </div>


    <div class="card-actions">

    <button
        class="download-button"
        onclick="downloadCard('${festival}', '${number}', ${i})"
    >
        ⬇ Download
    </button>

    <button
        class="share-button"
        onclick="shareCard('${festival}', '${number}', ${i})"
    >
        📤 Share
    </button>

</div>

`;

// Favorite heart button

const favoriteId =
    festival + "-" + number;

    // Save favorite ID on this card
card.dataset.favoriteId = favoriteId;


const favoriteButton =
    document.createElement("button");

favoriteButton.type = "button";
favoriteButton.className = "favorite-button";
if (favoriteCards.includes(favoriteId)) {

    favoriteButton.innerHTML = "♥";
    favoriteButton.title = "Remove from favorites";

} else {

    favoriteButton.innerHTML = "♡";
    favoriteButton.title = "Add to favorites";

}

favoriteButton.addEventListener("click", function () {

    if (!favoriteCards.includes(favoriteId)) {

        // Add card to favorites
        favoriteCards.push(favoriteId);

        favoriteButton.innerHTML = "♥";
        favoriteButton.title = "Remove from favorites";

    } else {

        // Remove card from favorites
        favoriteCards =
            favoriteCards.filter(function (item) {

                return item !== favoriteId;

            });

        favoriteButton.innerHTML = "♡";
        favoriteButton.title = "Add to favorites";

    }

    // Save favorites in browser
    localStorage.setItem(
        "favoriteCards",
        JSON.stringify(favoriteCards)
    );
    updateFavoriteButtonCount();

});

card.appendChild(favoriteButton);


        container.appendChild(card);

    }

// Reapply Favorites after festival or language changes
setTimeout(function () {

    reapplyFavoritesFilter();

}, 0);


}

updateFestivalSelection(currentFestival);
loadCards(currentFestival);


const senderInput =
    document.getElementById("sender-name");


senderInput.addEventListener("input", function () {

    const senderName =
        senderInput.value;


    const senderDisplays =
        document.querySelectorAll(".sender-display");


    senderDisplays.forEach(function (display) {

        display.textContent = senderName;

    });

});


function downloadCard(festival, number, cardIndex) {

    showSupportPopup(function () {

        performDownloadCard(
            festival,
            number,
            cardIndex
        );

    });

}


function performDownloadCard(festival, number, cardIndex) {

    // Get festival title
    let greeting;

let messages;


if (currentLanguage === "hindi") {

    greeting =
        hindiFestivalGreetings[festival];

    messages =
        hindiFestivalMessages[festival] ||
        [greeting.message];

} else {

    greeting =
        festivalGreetings[festival];

    messages =
        festivalMessages[festival] ||
        [greeting.message];

}


    // Get the correct message for this card
    const message =
        messages[(cardIndex - 1) % messages.length];


    // Get sender name
    const senderName =
        document.getElementById("sender-name").value;


    // Create an image object
    const image =
        new Image();


    // Wait until image has loaded
    image.onload = function () {

    createCardImage(
        image,
        festival,
        number,
        greeting.title,
        message,
        senderName,
        "download"

        );

    };


    // Tell JavaScript which image to load
    image.src =
        `assets/${festival}/card-${number}.jpg`;

}


function createCardImage(
    image,
    festival,
    number,
    title,
    message,
    senderName,
    action


) {

    // Create invisible canvas
    const canvas =
        document.createElement("canvas");


    // Get drawing tool
    const ctx =
        canvas.getContext("2d");


    // Canvas size = original image size
    canvas.width =
        image.naturalWidth;

    canvas.height =
        image.naturalHeight;


    // Draw festival image on canvas
    ctx.drawImage(
        image,
        0,
        0,
        canvas.width,
        canvas.height
    );


// Dark gradient behind text

const gradient =
    ctx.createLinearGradient(
        0,
        canvas.height * 0.45,
        0,
        canvas.height
    );


gradient.addColorStop(
    0,
    "rgba(0,0,0,0)"
);


gradient.addColorStop(
    1,
    "rgba(0,0,0,0.90)"
);


ctx.fillStyle =
    gradient;


ctx.fillRect(
    0,
    canvas.height * 0.45,
    canvas.width,
    canvas.height * 0.55
);

 
// =====================
// DRAW FESTIVAL TITLE
// =====================

ctx.textAlign =
    "center";


ctx.fillStyle =
    "#ffe66d";


ctx.font =
    `bold ${Math.round(canvas.width * 0.10)}px Georgia`;


ctx.shadowColor =
    "black";


ctx.shadowBlur =
    8;


const titleY =
    canvas.height * 0.68;


ctx.fillText(
    title,
    canvas.width / 2,
    titleY
);

// =====================
// DRAW GREETING MESSAGE
// =====================

ctx.fillStyle =
    "white";


ctx.font =
    `${Math.round(canvas.width * 0.070)}px Arial`;


ctx.shadowColor =
    "black";


ctx.shadowBlur =
    6;


const messageY =
    canvas.height * 0.76;


const maxTextWidth =
    canvas.width * 0.85;


const lineHeight =
    canvas.width * 0.085;


const numberOfLines =
    wrapText(
        ctx,
        message,
        canvas.width / 2,
        messageY,
        maxTextWidth,
        lineHeight
    );


    // =====================
// DRAW SENDER NAME
// =====================

if (senderName.trim() !== "") {

    const senderY =
        messageY +
        (numberOfLines * lineHeight) +
        (canvas.height * 0.025);


    ctx.fillStyle =
        "#ffe66d";


    ctx.font =
        `bold ${Math.round(canvas.width * 0.060)}px Arial`;


    ctx.fillText(
        `From: ${senderName}`,
        canvas.width / 2,
        senderY
    );

}

// =====================
// DOWNLOAD JPG
// =====================

canvas.toBlob(

    async function (blob) {

        const fileName =
            `${festival}-card-${number}.jpg`;


        // DOWNLOAD
        if (action === "download") {

            const url =
                URL.createObjectURL(blob);

            const link =
                document.createElement("a");

            link.href =
                url;

            link.download =
                fileName;

            link.click();

            URL.revokeObjectURL(url);

        }


        // SHARE
        if (action === "share") {

            const file =
                new File(
                    [blob],
                    fileName,
                    {
                        type: "image/jpeg"
                    }
                );


            if (
                navigator.canShare &&
                navigator.canShare({
                    files: [file]
                })
            ) {

                try {

                    await navigator.share({
                        files: [file],
                        title: title
                    });

                } catch (error) {

                    console.log(
                        "Sharing cancelled or failed.",
                        error
                    );

                }

            } else {

                alert(
                    "Image sharing is not supported in this browser. Please download the card instead."
                );

            }

        }

    },

    "image/jpeg",

    0.95

);

}

 // createDownloadImage ENDS HERE


 // wrapping code
function wrapText(
    ctx,
    text,
    x,
    y,
    maxWidth,
    lineHeight
) {

    const words =
        text.split(" ");

    let line = "";

    const lines = [];


    for (let i = 0; i < words.length; i++) {

        const testLine =
            line + words[i] + " ";


        const testWidth =
            ctx.measureText(testLine).width;


        if (
            testWidth > maxWidth &&
            line !== ""
        ) {

            lines.push(line);

            line =
                words[i] + " ";

        } else {

            line =
                testLine;

        }

    }


    lines.push(line);


    lines.forEach(
        function (line, index) {

            ctx.fillText(
                line.trim(),
                x,
                y + index * lineHeight
            );

        }
    );


    return lines.length;

}
// wrapText ENDS HERE

// Shared card function start here


function shareCard(
    festival,
    number,
    cardIndex
) {

    showSupportPopup(function () {

        performShareCard(
            festival,
            number,
            cardIndex
        );

    });

}


function performShareCard(
    festival,
    number,
    cardIndex
) {

    // Get festival greeting
    let greeting;

let messages;


if (currentLanguage === "hindi") {

    greeting =
        hindiFestivalGreetings[festival];

    messages =
        hindiFestivalMessages[festival] ||
        [greeting.message];

} else {

    greeting =
        festivalGreetings[festival];

    messages =
        festivalMessages[festival] ||
        [greeting.message];

}


    // Find message for this card
    const message =
        messages[(cardIndex - 1) % messages.length];


    // Get sender name
    const senderName =
        document.getElementById("sender-name").value;


    // Load original festival image
    const image =
        new Image();


    image.onload = function () {

        createCardImage(
            image,
            festival,
            number,
            greeting.title,
            message,
            senderName,
            "share"
        );

    };


    image.src =
        `assets/${festival}/card-${number}.jpg`;

}


function changeLanguage(language, button) {

    // Remember selected language
    currentLanguage = language;


    // Remove active style
    const languageButtons =
        document.querySelectorAll(".language-button");


    languageButtons.forEach(function (btn) {

        btn.classList.remove("active-language");

    });


    // Highlight selected language
    button.classList.add("active-language");


    // Reload current festival cards
    loadCards(currentFestival);

}

function selectFestivalFromDropdown() {

    const dropdown =
        document.getElementById("festival-select");

    const festival =
        dropdown.value;

    currentFestival =
        festival;

    updateFestivalSelection(
        festival
    );
    loadCards(festival);
    updateFavoriteButtonCount();

}
function updateFestivalSelection(festival) {

    const festivalButtons =
        document.querySelectorAll(".festival-tab");


    festivalButtons.forEach(
        function (button) {

            button.classList.remove("active");
        }
    );
    const selectedButton =
        document.querySelector(
            `.festival-tab[data-festival="${festival}"]`
        );

    if (selectedButton) {

        selectedButton.classList.add(
            "active"
        );
    }
    const dropdown =
        document.getElementById(
            "festival-select"
        );

    if (dropdown) {

        dropdown.value =
            festival;

    }
    const festivalTitle =
    document.getElementById(
        "festival-title"
    );

if (festivalTitle) {

    festivalTitle.textContent =
        festivalNames[festival]
        + " Greeting Cards";

}

}


// ==========================
// BACK TO TOP BUTTON
// ==========================

const backToTopButton =
    document.getElementById("back-to-top");

backToTopButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Show Back to Top button after scrolling down
window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTopButton.style.display = "block";

    } else {

        backToTopButton.style.display = "none";

    }

});



/// ==========================
// SHOW FAVORITE CARDS
// ==========================

const showFavoritesButton =
    document.getElementById("show-favorites");

let showingFavoritesOnly = false;

showFavoritesButton.addEventListener("click", function () {

    const cards =
        document.querySelectorAll(".ecard");

    showingFavoritesOnly =
        !showingFavoritesOnly;

    cards.forEach(function (card, index) {

        const number =
            String(index + 1).padStart(2, "0");

        const favoriteId =
            currentFestival + "-" + number;

        if (showingFavoritesOnly) {

            if (favoriteCards.includes(favoriteId)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        } else {

            card.style.display = "";

        }

    });

    if (showingFavoritesOnly) {

    reapplyFavoritesFilter();

} else {

   document.getElementById(
    "no-favorites-message"
).style.display = "none";

}

// Update button text and keep count visible
updateFavoriteButtonCount();

});

// Keep Favorites filter active
function reapplyFavoritesFilter() {

    if (!showingFavoritesOnly) {
        return;
    }

    const cards =
        document.querySelectorAll(".ecard");

        let favoriteCount = 0;

    cards.forEach(function (card, index) {

        const number =
            String(index + 1).padStart(2, "0");

        const favoriteId =
            currentFestival + "-" + number;

        if (favoriteCards.includes(favoriteId)) {

            card.style.display = "";
            favoriteCount++;

        } else {

            card.style.display = "none";

        }

    });

     const resultCount =
        document.getElementById("search-result-count");

    resultCount.textContent =
        favoriteCount + " favorite cards";

        const noFavoritesMessage =
    document.getElementById("no-favorites-message");

if (favoriteCount === 0) {

    noFavoritesMessage.style.display = "block";

} else {

    noFavoritesMessage.style.display = "none";

}

}

// ==========================
// REMOVE ALL FAVORITES
// ==========================

const clearFavoritesButton =
    document.getElementById("clear-favorites");

clearFavoritesButton.addEventListener("click", function () {

    // Nothing to remove
    if (favoriteCards.length === 0) {

        alert("You don't have any saved favorite cards.");

        return;
    }

    // Ask before deleting
    const confirmRemove =
        confirm(
            "Are you sure you want to remove all your favorite cards?"
        );

    // User clicked Cancel
    if (!confirmRemove) {
        return;
    }

    // Remove all favorites
    favoriteCards = [];

    // Update browser storage
    localStorage.setItem(
        "favoriteCards",
        JSON.stringify(favoriteCards)
    );

    updateFavoriteButtonCount();

    // Change all filled hearts back to empty hearts
    const favoriteButtons =
        document.querySelectorAll(".favorite-button");

    favoriteButtons.forEach(function (button) {

        button.innerHTML = "♡";
        button.title = "Add to favorites";

    });

    // If My Favorites is currently active,
    // update the screen immediately
    if (showingFavoritesOnly) {

        reapplyFavoritesFilter();

    }

    alert("All favorite cards have been removed.");

});

// ==========================
// FAVORITE BUTTON COUNT
// ==========================

function updateFavoriteButtonCount() {

    const favoriteButton =
        document.getElementById(
            "show-favorites"
        );

    if (!favoriteButton) {
        return;
    }


    // Count favorites only for
    // the currently selected festival
    const currentFestivalFavorites =
        favoriteCards.filter(
            function (favoriteId) {

                return favoriteId.startsWith(
                    currentFestival + "-"
                );

            }
        );


    const favoriteCount =
        currentFestivalFavorites.length;


    if (showingFavoritesOnly) {

        favoriteButton.textContent =
            "← Show All Cards (" +
            favoriteCount +
            ")";

    } else {

        favoriteButton.textContent =
            "❤️ My Favorites (" +
            favoriteCount +
            ")";

    }

}

// Show favorite count when website opens
updateFavoriteButtonCount();

// =====================================
// SHARE WEBSITE
// =====================================

async function shareWebsite() {

    const shareData = {
        title: "Allrounder Grihani Festival Greeting Cards",
        text: "🎉 Beautiful festival greeting cards! Choose a card, add your name, download and share it with your loved ones.",
        url: window.location.href
    };

    try {

        if (navigator.share) {

            await navigator.share(shareData);

        } else {

            await navigator.clipboard.writeText(
                window.location.href
            );

            alert(
                "Website link copied! You can now share it with your friends and family."
            );

        }

    } catch (error) {

        console.log(
            "Website sharing cancelled.",
            error
        );

    }

}
/* =====================================
   SUPPORT US POPUP
===================================== */

let pendingSupportAction = null;

function showSupportPopup(action) {

    const supportPopupSeen =
        localStorage.getItem("supportPopupSeen");

    if (supportPopupSeen === "yes") {
        action();
        return;
    }

    pendingSupportAction = action;

    const popup =
        document.getElementById("support-popup");

    if (popup) {
        popup.style.display = "flex";
    }

}


function closeSupportPopup() {

    const popup =
        document.getElementById("support-popup");

    if (popup) {
        popup.style.display = "none";
    }

    pendingSupportAction = null;

}


//* Continue button */

document.addEventListener("click", function (event) {

    if (
        event.target.id ===
        "support-continue-button"
    ) {

        const action =
            pendingSupportAction;

            // Remember that the popup was already shown in this browser
            localStorage.setItem("supportPopupSeen", "yes");
            
        const popup =
            document.getElementById(
                "support-popup"
            );

        if (popup) {
            popup.style.display = "none";
        }

        pendingSupportAction = null;

        if (typeof action === "function") {
            action();
        }

    }

});
/* Close Support popup with X */

document.addEventListener("click", function (event) {

    if (
        event.target.classList.contains(
            "support-close"
        )
    ) {

        const popup =
            document.getElementById(
                "support-popup"
            );

        if (popup) {
            popup.style.display = "none";
        }

        pendingSupportAction = null;

    }

});