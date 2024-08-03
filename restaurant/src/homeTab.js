function homeTab() {
    const contentDiv = document.createElement('div');

    const message = document.createElement('p');
    message.textContent = "Bob's Burgers is a tv show that features Bob and his family trying to make a living out of serving burgers to the residents of the city!";
    contentDiv.appendChild(message);

    const hours = document.createElement('p');
    hours.innerHTML = "M-F 10:00pm-5:00pm <br> F-S Closed!";
    contentDiv.appendChild(hours);
    
    const location = document.createElement('p');
    location.textContent = "right around the corner!";
    contentDiv.appendChild(message);

    return contentDiv;
};

export {homeTab};