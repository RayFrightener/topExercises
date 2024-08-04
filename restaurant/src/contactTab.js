function contactTab() {
    const contentDiv = document.createElement('div');
    contentDiv.style.border = '1px solid black';
    contentDiv.style.padding = '20px';
    contentDiv.style.margin = '20px';
    contentDiv.style.textAlign = 'center';
    contentDiv.style.display = 'flex';
    contentDiv.style.flexDirection = 'column';
    contentDiv.style.alignItems = 'center';

    const bobContact = document.createElement('div');
    bobContact.style.border = '1px solid black';
    bobContact.style.padding = '10px';
    bobContact.style.margin = '10px';

    const name = document.createElement('p');
    name.textContent = 'Bob Belcher';
    bobContact.appendChild(name);

    const phone = document.createElement('p');
    phone.textContent = "Phone: 123456789";
    bobContact.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = "hello@bobsburgers.com";
    bobContact.appendChild(email);

    contentDiv.appendChild(bobContact);

    return contentDiv;
}

export { contactTab };