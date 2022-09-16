document.querySelectorAll(".window").forEach((i) => {
    i.style.zIndex = 1;
});

let modals = [];
const openModal = (id, condition = true) => {

    if (modals.indexOf(id) < 0) {
        modals.push(id);
    } else {
        modals = modals.filter((m) => m !== id);
        modals.push(id);
    }

    modals.forEach((m, i) => {
        document.querySelector(`#${m}-modal`).style.zIndex = i * 10;
    });

    if (condition) {
        let clickedId = "#" + id.concat("-modal");
        let clickedItem = document.querySelector(clickedId);
        clickedItem.style.display = "block";
    }
    ;
};

const closeModal = (element) => {
    let clickedItem = element.closest(".window");
    clickedItem.style.display = "none";
};

const maximizeModal = (element) => {
    let clickedItem = element.closest(".window");
    if (clickedItem.id === "contact-me-modal") {
        document.querySelector("#message").setAttribute("rows", 10);
    }
    ;

    if (clickedItem.id === "about-me-modal") {
        document.querySelector("pre").style.height = "90vh";
    }
    ;
    if (clickedItem.id === "projects-modal") {
        document.querySelectorAll(".tabs > article, .tabs>article>a , .tabs>article>a>img").forEach((a) => {
            a.style.minWidth = "50%";
            a.style.minHeight = "50%";
            a.style.height = "90vh";
            a.style.width = "auto"
        });

    }

    if (clickedItem.id === "print-cv-modal") {
        document.querySelector("#print-cv-modal > div.window-body.flex.flex-col > img").style.display = "none";

        document.querySelector("#print-cv-modal > div.window-body.flex.flex-col").style.height = "90vh";
        document.querySelector("embed").style.height = "100%";
    }
    ;
    if (clickedItem.id === "social-modal") {
        document.querySelector("#social-container").classList.add("flex-col", "h-full");
        document.querySelector("#social-container").parentElement.classList.add("h-full");
        document.querySelectorAll("a > span > small").forEach((i) => {
            i.style.setProperty('font-size', "2em", "important")
        });
    }
    ;

    if (clickedItem.id === "hobbies-modal") {
        document.querySelector("#hobbies-container").classList.add("flex-col", "h-max");
        document.querySelector("#hobbies-container").parentElement.classList.add("h-max");
        document.querySelectorAll("a > span > small").forEach((i) => {
            i.style.setProperty('font-size', "3em", "important");
        });

    }
    ;
    clickedItem.style.top = "50%";
    clickedItem.style.left = "50%";
    clickedItem.style.width = "100%";
    clickedItem.style.height = "100%"
};

const minimizeModal = (element) => {
    let clickedItem = element.closest(".window");
    if (clickedItem.id === "contact-me-modal") {
        document.querySelector("#message").setAttribute("rows", 3);
    }
    ;

    if (clickedItem.id === "print-cv-modal") {
        document.querySelector("#print-cv-modal > div.window-body.flex.flex-col > img").style.display = "block";

        document.querySelector("#print-cv-modal > div.window-body.flex.flex-col").style.height = "fit-content";
        document.querySelector("embed").style.height = "auto";
    }
    ;

    if (clickedItem.id === "social-modal") {
        document.querySelector("#social-container").classList.remove("flex-col", "h-full");
        document.querySelector("#social-container").parentElement.classList.remove("h-full");
        document.querySelectorAll("a > span > small").forEach((i) => {
            i.style.setProperty('font-size', "1em", "important")
        });
    }



    if (clickedItem.id === "projects-modal") {
        document.querySelectorAll(".tabs > article, .tabs>article>a , .tabs>article>a>img").forEach((a) => {
            a.style.minWidth = "50%";
            a.style.minHeight = "50%";
            a.style.height = "30vh";
        });

    }


    if (clickedItem.id === "hobbies-modal") {
        document.querySelector("#hobbies-container").classList.remove("flex-col", "h-full");
        document.querySelector("#hobbies-container").parentElement.classList.remove("h-full");
        document.querySelectorAll("a > span > small").forEach((i) => {
            i.style.setProperty('font-size', "1em", "important");
        });

    }
    ;


    clickedItem.style.top = "50%";
    clickedItem.style.left = "50%";
    clickedItem.style.width = "fit-content";
    clickedItem.style.height = "auto";
};