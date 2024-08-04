function homeTab() {
    const contentDiv = document.createElement('div');
    contentDiv.style.border = '1px solid black';
    contentDiv.style.padding = '20px';
    contentDiv.style.margin = '20px';
    contentDiv.style.textAlign = 'center';
    contentDiv.style.display = 'flex';
    contentDiv.style.flexDirection = 'column';
    contentDiv.style.alignItems = 'center';

    const message = document.createElement('p');
    message.textContent = "Bob's Burgers is a tv show that features Bob and his family trying to make a living out of serving burgers to the residents of the city!";
    message.style.border = '1px solid black';
    message.style.padding = '10px';
    message.style.margin = '10px';
    contentDiv.appendChild(message);

    const hours = document.createElement('p');
    hours.innerHTML = "M-F 10:00pm-5:00pm <br> F-S Closed!";
    hours.style.border = '1px solid black';
    hours.style.padding = '10px';
    hours.style.margin = '10px';
    contentDiv.appendChild(hours);
    
    const location = document.createElement('p');
    location.textContent = "right around the corner!";
    location.style.border = '1px solid black';
    location.style.padding = '10px';
    location.style.margin = '10px';
    contentDiv.appendChild(location);

    return contentDiv;
};

export {homeTab};