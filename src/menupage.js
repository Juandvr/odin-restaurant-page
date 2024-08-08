import tacos from './images/fishtacos.jpg';
import burger from './images/burger.jpg';
import pasta from './images/grilledpasta.jpg';
import steak from './images/martinisteak.jpg';
import chicken from './images/orangechicken.jpg';
import sandwich from './images/turkey.jpg';

function createDiv(src, captionText, priceText) {
    const div = document.createElement('div');
    
    const img = new Image();
    img.src = src;
    img.loading = 'lazy';
    div.appendChild(img);

    const caption = document.createElement('p');
    caption.textContent = captionText;
    div.appendChild(caption);

    const price = document.createElement('p');
    price.textContent = priceText;
    div.appendChild(price);

    return div;
}

function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menu = document.createElement('div');
    menu.classList.add('dishes');

    const images = [
        {src: tacos, caption: 'Fish Tacos.', price: '$15000'},
        {src: burger, caption: 'Pastrami Burger.', price: '$22000'},
        {src: pasta, caption: 'Grilled Pasta.', price: '$18000'},
        {src: steak, caption: 'Martini Steak.', price: '$26000'},
        {src: chicken, caption: 'Orange Chicken.', price: '$24000'},
        {src: sandwich, caption: 'Turkey Sandwich.', price: '$16000'}
    ];

    images.forEach(({ src, caption, price }) => {
        const image = createDiv(src,caption,price);
        menu.appendChild(image);
    });

    content.appendChild(menu);
}

export { loadMenu };