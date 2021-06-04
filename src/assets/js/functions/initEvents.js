import { buttonElement, startScreenElement } from "../functions/elements.js";
import rotateSquare from "./rotateSquare.js";
export default function initEvents(playGame) {
    buttonElement().addEventListener("click", function () {
        startScreenElement().style.display = "none";
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
