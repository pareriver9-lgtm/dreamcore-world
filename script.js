

// CHARACTER INTERACTION SYSTEM

let interactionCount = 0;

const dialogue = {
    friendly: [
        "It's nice having company.",
        "I was hoping someone would visit.",
        "You seem familiar."
    ],

    confused: [
        "Wait... have we met?",
        "I forgot what I was saying.",
        "I don't remember this room."
    ],

    unsettling: [
        "Something changed while you were gone.",
        "Don't look behind the page.",
        "I think someone else is here."
    ],

    glitch: [
        "I remem— I remem—",
        "My memories...",
        "Th̸i̴s̵ ̷i̶s̸n̷'̶t̷ ̴r̴i̸g̵h̴t̵.",
        "..."
    ]
};


// TALK TO ???

function randomMessage() {

    interactionCount++;

    const specialDialogue = {
        1: "Oh. Hello. Have we met?",
        4: "You've been here for a while.",
        7: "I thought you had left.",
        8: "Count the eyes.",
        10: "You keep coming back.",
        13: "I never said that.",
        16: "Why do you keep asking me things?",
        20: "I remember you. I think."
    };

    let category;

    if (interactionCount <= 3) {
        category = "friendly";
    } else if (interactionCount <= 7) {
        category = "confused";
    } else if (interactionCount <= 12) {
        category = "unsettling";
    } else {
        category = "glitch";
    }

    const options = dialogue[category];

    const random = Math.floor(
        Math.random() * options.length
    );

    const message =
        specialDialogue[interactionCount] || options[random];

    document.getElementById("message").textContent = message;
}


// SECRET ACCESS CODE

function checkCode() {

    const code = document
        .getElementById("accessCode")
        .value.trim().toUpperCase();

    const message = document.getElementById("accessMessage");

    if (code === "21") {

        message.textContent = "ACCESS GRANTED. WELCOME BACK.";

        setTimeout(() => {
            window.location.href = "pages/secret.html";
        }, 1500);

    } else {

        message.textContent = "ACCESS DENIED. TRY AGAIN.";

    }
}

