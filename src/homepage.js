function homeLoad() {
    const content = document.getElementById('content');

    const main = document.createElement('div');
    main.innerHTML = `
        <h1>The best food for you</h1>
        <p>Have a great time here</p>
        <button>See menu<button>
    `;
    content.appendChild(main);

    const menu = document.createElement('div');
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
    about.innerHTML = `
        <img alt="map">
        <h2>Trust in us</h2>
        <p>Information about the restaurant</p>
    `;
    content.appendChild(about);

}

export { homeLoad };