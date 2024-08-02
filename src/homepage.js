function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

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
        <img  src="../src/images/grilledpasta.jpg" alt="dish#1">
        <p>Grilled pasta</p>
        <p>$35000</p>
        </div>
        <div>
        <img src="../src/images/martinisteak.jpg" alt="dish#2">
        <p>Martini steak</p>
        <p>$40000</p>
        </div>
        <div>
        <img src="../src/images/burger.jpg" alt="dish#3">
        <p>Pastrami burger</p>
        <p>$24000</p>
        </div> 
        <button>Explore Menu</button>
    `;
    content.appendChild(menu);

    const about = document.createElement('div');
    about.setAttribute('id', 'about');
    about.innerHTML = `
        <img src="../src/images/map.jpg" alt="map">
        <div>
        <h2>Trust in us</h2>
        <p>Information about the restaurant</p>
        </div>
    `;
    content.appendChild(about);

}

export { loadHome };