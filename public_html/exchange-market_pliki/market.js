/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

async function getItemSearch(itemName) {
    const url = "www.interf26.pythonanywhere.com/searchItem";
    const itemList = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({searchTerm: itemName})
    });
    
    return itemList.json();
    
}

async function getExchangeOffers(itemBase){
    const url = "www.interf26.pythonanywhere.com/searchOffers";
    const newValue = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({searchTerm: itemBase})
    });
    
    const grid = getElementById("Group_36");
    grid.textContent = '';
    grid.innerHTML = `<div class="grid-container"><div class="grid-item">Seller</div></div>
                <div class="grid-container"><div class="grid-item">Item name</div></div>
                <div class="grid-container"><div class="grid-item">Item image</div></div>
                <div class="grid-container"><div class="grid-item">Confirmation</div></div>`;
    
    for (const offer in newValue.json().offers) {
        const gridRow = document.getElementById("grid-row");
        gridRow.children[0].children[0].textContent = `#{offer.seller}`;
        gridRow.children[1].children[0].textContent = `#{offer.name}`;
        gridRow.children[2].children[0].setAttribute("src", `#{offer.iconSrc}`);
        
        for(const element in gridRow.children){
            grid.append(element);
        }
    }
}

async function filterSearch() {
    const input = document.getElementById("search-item").value;
    const resultField = document.getElementById("search-results");
    resultField.textContent = '';
    const searchResult = await getItemSearch(input);
    searchResult.items.forEach((item) => {
        const newButton = document.createElement("button");
        newButton.setAttribute("onclick", `getExchangeOffers(#{item.tag})`);
        const image = document.createElement("img");
        image.setAttribute("src", "item.icon");
        newButton.append(image);
        newButton.append(document.createTextNode(`${item.name}`));
        resultField.append(newButton);
    });
}

