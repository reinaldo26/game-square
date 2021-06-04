import { audioMusic } from "../audio/index.js";
import { 
    buttonElement,
    startScreenElement
} from "../functions/elements.js";
import audioPlay from "./audioPlay.js";

import rotateSquare from "./rotateSquare.js";

export default function initEvents(playGame: () => void) {
    buttonElement().addEventListener("click", () => {
        startScreenElement().style.display = "none";

       audioPlay(audioMusic);

        if (typeof playGame === 'function') {
            playGame();
        }
    });

    document.body.addEventListener("click", () => {
        rotateSquare();
    });

    document.body.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        rotateSquare(false);
    });
}