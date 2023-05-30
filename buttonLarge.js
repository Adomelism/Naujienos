export default function buttonLarge(text, href) {

    if (!href || !text) {
        return '';
    }

    const buttonLarge = document.createElement('a');
    buttonLarge.classList.add('button-large');
    buttonLarge.href = href;
    buttonLarge.textContent = text;

    return buttonLarge;
}