import { audioFail, audioMusic, audioPoint } from "../audio/index.js";
import audioPlay from "./audioPlay.js";
import { circleElement, squareElement, startScreenElement } from "./elements.js";
import setScore from "./setScore.js";
export default function check() {
    var circleColor = circleElement().dataset.color;
    var squareColor = squareElement().dataset.color;
    if (Number(circleColor) === Number(squareColor)) {
        audioPlay(audioPoint);
        return true;
    }
    else {
        setScore(0);
        startScreenElement().style.display = 'flex';
        audioPlay(audioFail);
        audioMusic.pause();
        console.error('GAME OVER');
        return false;
    }
}
