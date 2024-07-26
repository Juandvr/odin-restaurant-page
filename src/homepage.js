function homeLoad() {
    const content = document.getElementById('content');

    const main = document.createElement('div');
    main.innerHTML = '<h1>Welcome to the restaurant</h1>';
    content.appendChild(main);

    const section = document.createElement('div');
    section.innerHTML = '<h3>Special dishes</h3><img alt="dish#1"><img alt="dish#2"><img alt="dish#3"><button>See menu</button>';
    content.appendChild(section);

    const location = document.createElement('div');
    location.innerHTML = '<h4>Av. bread 234</h4>';
    content.appendChild(location);
}

export { homeLoad };