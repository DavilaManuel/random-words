class Heart {
    constructor(id) {
        const heart = document.getElementById(id);
        const text = heart.querySelector(".heart-text");
        const sayings = [
            "T",
            "E",
            "A",
            "M",
            "O"
        ];

        heart.addEventListener("click", () => {
            this.addText(text, sayings);
        });
    }

    getText(sayings) {
        const selection = parseInt(Math.random() * sayings.length);
        return sayings[selection];
    }

    addText(container, sayings) {
        const str = this.getText(sayings);
        const words = str.split(" ");

        container.innerHTML = "";

        words.forEach(word => {
            const span = document.createElement("span");
            span.innerHTML = word;
            container.appendChild(span);
        });

        return container;
    }
}

const heartContainer = new Heart("heart-container");