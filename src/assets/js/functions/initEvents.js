import { audioMusic } from "../audio/index.js";
import { buttonElement, startScreenElement } from "../functions/elements.js";
import audioPlay from "./audioPlay.js";
import rotateSquare from "./rotateSquare.js";
import setScore from "./setScore.js";
export default function initEvents(playGame) {
    buttonElement().addEventListener("click", function () {
        startScreenElement().style.display = "none";
        setScore(0);
        audioPlay(audioMusic);
        if (typeof playGame === 'function') {
            playGame();
        }
    });
    document.body.addEventListener("click", function () {
        rotateSquare();
    });
    document.body.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        rotateSquare(false);
    });
}
