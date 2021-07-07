function renderMenu() {

    const menu = document.createElement('div');
    const menuList = document.createElement('ul');
    let menuItems = new Array(5);

   for (let i =0; i<menuItems.length; i++){
        menuItems[i]= document.createElement('li');
        menuItems[i].classList.add('menu-item');
        menuItems[i].textContent='Enter Item';
        menuList.appendChild(menuItems[i]);
    };
    
    menuList.classList.add('menu');
    
    menuItems[0].textContent = 'Hamburger';
    menuItems[1].textContent = 'Cheeseburger';
    menuItems[2].textContent = 'Chicken Sandwich';
    menuItems[3].textContent = 'Hot Dog';
    menuItems[4].textContent = 'French Fries';

    menu.appendChild(menuList);
    
    return menu;
}

export default renderMenu;