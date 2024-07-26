function homeLoad() {
    const content = document.getElementById('content');

    const main = document.createElement('div');
    main.innerHTML = '<h1>Welcome to the bakery</h1>';
    content.appendChild(main);

    const section = document.createElement('div');
    section.innerHTML = '<h3>Schedule</h3><p>every weekday: 8:00am - 4:00pm</p>';
    content.appendChild(section);
}

export { homeLoad };