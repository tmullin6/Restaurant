//Function to render the contents of the menu page to the screen.
function renderMenu() {

    //Create DOM elements for the menu lists and price lists
    const menu = document.createElement('div');
    const coffee = document.createElement('div');
    const menuList = document.createElement('ul');
    const priceList = document.createElement('ul');

    //Create DOM Element for flavor list
    const flavors = document.createElement('div');
    const flavorList=document.createElement('ul');

    let menuItems = new Array(6);
    let menuPrices = new Array(6);
    let menuFlavors = new Array(5);

    //Creates and appends list of menu items to the menu list
    for (let i =0; i<menuItems.length; i++){
        menuItems[i]= document.createElement('li');
        menuItems[i].classList.add('menu-item');
        menuList.appendChild(menuItems[i]);
    };
    
    //Creates and appends list of prices to the price list
    for (let i =0; i<menuPrices.length; i++){
        menuPrices[i]= document.createElement('li');
        menuPrices[i].classList.add('menu-item');
        priceList.appendChild(menuPrices[i]);
    };

    for (let i =0; i<menuFlavors.length; i++){
        menuFlavors[i]= document.createElement('li');
        menuFlavors[i].classList.add('flavor-item');
        flavorList.appendChild(menuFlavors[i]);
    };

    //Add CSS Classes to each created list
    coffee.classList.add('menu');
    menuList.classList.add('menu-list');
    priceList.classList.add('menu-list');

    flavors.classList.add('flavors');
    flavorList.classList.add('flavor-list');
    
    //Text content for menu items
    menuItems[0].textContent = 'Drip Coffee';
    menuItems[1].textContent = 'Mocha';
    menuItems[2].textContent = 'Flavored Latte';
    menuItems[3].textContent = 'Iced Coffee or Latte';
    menuItems[4].textContent = 'Assorted Pastries';
    menuItems[5].textContent = 'Pupaccino';
   


    //Text content for the prices list
    menuPrices[0].textContent= '8oz: $2.50/12oz: $3.50';
    menuPrices[1].textContent= '8oz: $2.00/12oz: $3.00';
    menuPrices[2].textContent= '8oz: $2.00/12oz: $3.00';
    menuPrices[3].textContent= '8oz: $2.50/12oz: $3.50';
    menuPrices[4].textContent= '$2.00 each';
    menuPrices[5].textContent= '$1.00';

    menuFlavors[0].textContent = 'Syrup Flavors: ';
    menuFlavors[1].textContent = 'Vanilla (Sugar Free Available)';
    menuFlavors[2].textContent = 'Hazelnut (Sugar Free Available)';
    menuFlavors[3].textContent = 'Lavender';
    menuFlavors[4].textContent = 'Irish Cream';
  


    coffee.appendChild(menuList);
    coffee.appendChild(priceList);
    flavors.appendChild(flavorList);
    menu.appendChild(coffee);
    menu.appendChild(flavors);
    
    return menu;
}

export default renderMenu;