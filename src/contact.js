
function renderContact() {

    const contact = document.createElement('div');
    const addressHead = document.createElement('h3');
    const addressText = document.createElement('p');
    const phoneHead = document.createElement('h3');
    const phoneText = document.createElement('p');
    const gitHead = document.createElement('h3');
    const gitText = document.createElement('p');

    addressHead.classList.add('contact-headers');
    phoneHead.classList.add('contact-headers');
    gitHead.classList.add('contact-headers');

    addressText.classList.add('contact-text');
    phoneText.classList.add('contact-text');
    gitText.classList.add('contact-text');

    addressHead.textContent="Our Address:";
    addressText.textContent = "12345 Street Drive, Denver CO. <-- Not Real";

    phoneHead.textContent="Call us:";
    phoneText.textContent="(123)456-7890 <-- Also Not Real";

    gitHead.textContent="Want to check out my other work: ";
    gitText.textContent="https://github.com/tmullin6 <--This one is real";

    contact.appendChild(addressHead);
    contact.appendChild(addressText);
    contact.appendChild(phoneHead);
    contact.appendChild(phoneText);
    contact.appendChild(gitHead);
    contact.appendChild(gitText);


    return contact;
}

export default renderContact;