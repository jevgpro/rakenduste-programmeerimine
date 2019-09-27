
console.log("util.js loaded");
//support function
function createItemElement(item){
    const anchor = document.createElement("a");
    anchor.href = `./item.html?title=${item.title}&cost=${item.price}&src=${item.imgSrc}`;
    ///item.html?title=Samsung Chromebook 3&cost=148&src=./images/laptop1.jpg

    const itemContainer = document.createElement("div");
    itemContainer.className = "item";

    const imgElement = document.createElement("img");
    imgElement.src = item.imgSrc;

    const priceElement = document.createElement("div");
    priceElement.innerText = item.price;
    priceElement.className = "item__price";

    const titleElement = document.createElement("div");
    titleElement.className = "item__title";
    titleElement.textContent = item.title;
    
    // const textElement = document.createElement("div");
    // textElement.className = "item__description";
    // textElement.textContent = item.description;

    anchor.append(itemContainer);
    itemContainer.append(imgElement);
    //itemContainer.append(textElement);
    itemContainer.append(titleElement);
    itemContainer.append(priceElement);

    return anchor;
}

module.exports = {
    createItemElement
};
