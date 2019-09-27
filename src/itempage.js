console.log("item.js loaded");

//alert("Welcome to item page!");
const x =  window.location;
console.log(x);
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const cost = urlParams.get("cost");
const src = urlParams.get("src");
// const src = urlParams.get("description");
// console.log(description);
//alert("title : " + title + "cost : " + cost + "path : " + src);

const container = document.createElement('div');
container.className = "itemContainer";

const image = document.createElement('img');
image.src = src;
image.className = "item_image";

const titleElement = document.createElement('h2');
titleElement.textContent = title;
titleElement.className = "item_title";

const description = 'A unique MMO set in the vast, fantasy world of Gielinor, brimming with diverse races, guilds and ancient gods battling for dominion. RuneScape now features more ways to play, brand new skills and over 200 gripping story-driven quests.'
const textElement = document.createElement("p");
textElement.textContent = description;
textElement.className = "item_description";
//console.log("image", image);

const costElement = document.createElement('div');

container.append(titleElement);
container.append(image);
container.append(textElement);
container.append(costElement);

const element = document.createElement('div');
costElement.textContent = cost;
costElement.className = "item_cost";

window.addEventListener("load", () =>{
    const app = document.getElementById("item-body");
    app.append(container);
});