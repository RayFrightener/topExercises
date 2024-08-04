function aboutTab() {
    const contentDiv = document.createElement('div');
    contentDiv.style.border = '1px solid black';
    contentDiv.style.padding = '20px';
    contentDiv.style.margin = '20px';
    contentDiv.style.textAlign = 'center';
    contentDiv.style.display = 'flex';
    contentDiv.style.flexDirection = 'column';
    contentDiv.style.alignItems = 'center';

    const aboutInfo = document.createElement('p');
    aboutInfo.textContent = "Bob's Burgers is a widely loved burger restaurant, everybody loves eating food here and spending their time here. If you try the place once I guarantee it that you will want to come back!";
    aboutInfo.style.border = ' 1px solid black';
    aboutInfo.style.padding = '10px';
    aboutInfo.style.margin = '10px';
    contentDiv.appendChild(aboutInfo);

    return contentDiv;
}

export { aboutTab };