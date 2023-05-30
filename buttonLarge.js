export default function buttonLarge(text, link) {
    const buttonLarge = document.createElement('a');
    buttonLarge.classList.add('button-large');
    buttonLarge.textContent = text;

    return buttonLarge;
}