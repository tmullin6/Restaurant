function renderMenu() {

    const menu = document.createElement('div');
    const menuList = document.createElement('ul');
    let menuItems = new Array(5);
    let menuPrices = new Array(5);

   for (let i =0; i<menuItems.length; i++){
        menuItems[i]= document.createElement('li');
        menuItems[i].classList.add('menu-item');
        menuItems[i].textContent='Enter Item';
        menuList.appendChild(menuItems[i]);
    };
    

   for (let i =0; i<menuPrices.length; i++){
    menuPrice[i]= document.createElement('li');
    menuPrices[i].classList.add('menu-item');
    menuList.appendChild(menuPrices[i]);
};

    menuList.classList.add('menu');
    
    menuItems[0].textContent = 'Drip Coffee................................... $2.50';
    menuItems[1].textContent = 'Mocha.............................................. $2.50';
    menuItems[2].textContent = 'Latte.............................................. $2.50';
    menuItems[3].textContent = 'Iced Coffee................................... $2.50';
    menuItems[4].textContent = 'Assorted Pastries............................. $2.50';

    menuPrices[0].textContent= '$2.50';
    menuPrices[1].textContent= '$2.50';
    menuPrices[2].textContent= '$2.50';
    menuPrices[3].textContent= '$2.50';
    menuPrices[4].textContent= '$2.50';

    menu.appendChild(menuList);
    
    return menu;
}

export default renderMenu;