import { circleElement, squareElement, startScreenElement } from "./elements.js";

export default function check() {
    const circleColor = circleElement().dataset.color;
    const squareColor = squareElement().dataset.color;

    if (Number(circleColor) === Number(squareColor)) {
        return true;
    } else {
        startScreenElement().style.display = 'flex';
        console.error('GAME OVER');
        return false;
    }
}
