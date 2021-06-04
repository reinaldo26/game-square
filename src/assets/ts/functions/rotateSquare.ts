import colors from "./colors.js";
import { 
    squareElement 
} from "./elements.js";

export default function rotateSquare(directionRight = true) {
    const square = squareElement();
    let color = Number(square.dataset.color);
    let rotate = Number(square.dataset.rotate);

    if (directionRight) {
        rotate -= 90;
        color--;
        if (color <= -1) color = colors.length -1;
    } else {
        rotate += 90;
        color++;
        if (color >= colors.length) color = 0;
    }
    
    square.dataset.rotate = String(rotate);
    square.dataset.color = String(color);
    
    square.style.transform = `rotate(${rotate}deg)`;
}