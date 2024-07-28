function homeLoad() {
    const content = document.getElementById('content');

    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    main.innerHTML = `
        <h1>The best food <br>for you</h1>
        <p>Discover the most delicious <br> dishes and spend <br> a great time here</p>
        <button>Explore Menu</button>
    `;
    content.appendChild(main);

    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.innerHTML = `
        <h3>Popular dishes</h3>
        <div>
        <img alt="dish#1">
        <img alt="dish#2">
        <img alt="dish#3">
        <button>Explore menu</button>
        </div>
    `;
    content.appendChild(menu);

    const about = document.createElement('div');
    about.setAttribute('id', 'about');
    about.innerHTML = `
        <img alt="map">
        <h2>Trust in us</h2>
        <p>Information about the restaurant</p>
    `;
    content.appendChild(about);

}

export { homeLoad };