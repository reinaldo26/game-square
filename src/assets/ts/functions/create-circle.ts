import check from "./ckeck.js";
import colors from "./colors.js";
import getRandomColor from "./getRandomColor.js";

export default function createCircle(time: string, nextCallback: () => void) {
    document.querySelectorAll(".circle").forEach(el => el.remove());
    const colorIndex = getRandomColor();
    
    const circleEl = document.createElement("div");
    circleEl.style.transitionDuration = `${time}s`;
    circleEl.className = `circle ${colors[colorIndex]}`;
    circleEl.dataset.color = String(colorIndex);
    document.body.appendChild(circleEl);

    setTimeout(() => {
        circleEl.classList.add('play');
        setTimeout(() => {
            if(check()) {
                nextCallback();
            };
        }, parseFloat(time) * 1000);
    }, 100);

}
