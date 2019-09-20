// needs scope
// <li class="s-item   "
// <div class="s-item__image">
// <h3 class="s-item__title s-item__title--has-tags">
//<span class="s-item__price">$118.58</span>
{
    // EBAY
    const itemContainerClass = "s-item   ";
    const imageClass = "s-item__image-img";
    const titleClass = "s-item__title";
    const priceClass = "s-item__price";
    // Amazon
    // const itemContainerClass = "s-row";
    // const imageClass = "s-image";
    // const titleClass = "s-item__title s-item_title--has-tags";
    // const priceClass = "s-item__price";
    const items = document.getElementsByClassName(itemContainerClass);
    const arr = [];
    // HTMLDivElement[] to Array
    Array.from(items).forEach(item => {
        const imgs = item.getElementsByClassName(imageClass);
        if(imgs.length === 0 ) return; //some have 0, skip them
        const img = imgs[0];

        const src = img.src;

        if(!src) return; //skip these
        // if(!title) return; //skip these
         
        const title = item.getElementsByClassName(titleClass)[0].textContent;
        const price = item.getElementsByClassName(priceClass)[0].textContent;
        arr.push({
            imgSrc: src,
            title,
            price,
            category: document.title.split("|")[0].trim()
        })
        // // console.log("src", src);
        // console.log("title", title);
        // console.log("price", price);
        // console.log("src", src);

        // // console.log("price", price);
        // console.log("category", category);

    });
    console.log(JSON.stringify(arr));
}