"use strict";

var coins = {
  lead_image: {
    coin_name: "Royal Albert hall",
    image:
      "https://www.royalmint.com/globalassets/consumer/_campaigns/2021/royal-albert-hall/category_primary-banner-mobile-700700.jpg",
    description: "Royal Albert Hall Domed coin",
    link: "https://www.royalmint.com/our-coins/events/royal-albert-hall/",
  },
  mid1_image: {
    coin_name: "Queens Beast Completer",
    image:
      "https://www.royalmint.com/globalassets/consumer/_campaigns/2021/queens-beasts-completer/sq-homepage-panel-700x700.jpg",
    description: "Queens Beast Completer Coin, last in the series",
    link: "https://www.royalmint.com/our-coins/ranges/queens-beasts/the-completer-coin/",
  },
  mid2_image: {
    coin_name: "Peter Rabbit £5",
    image:
      "https://www.royalmint.com/globalassets/consumer/_campaigns/2021/peter-rabbit/banners/homepage_carousel-image-700700.jpg",
    description: "First time Peter rabbit on a £5 coin",
    link: "https://www.royalmint.com/our-coins/events/the-tale-of-peter-rabbit/",
  },
  tail_image: {
    coin_name: "Alfred the Great ",
    image:
      "https://www.royalmint.com/globalassets/consumer/_campaigns/2021/alfred-the-great/t7-copy.jpg",
    description: "Alfred the Great £5 coin",
    link: "https://www.royalmint.com/our-coins/events/alfred-the-great/",
  },
};

//variable declaration

let col;
const arrayKeys = [];
const row = document.querySelector(".row");

for (let key in coins) {
  // loop through object and create array with the 4 main keys
  arrayKeys.push(coins[key]);
}

function createColumn(i) {
  //for each key, we create a bootstrap column

  col = document.createElement("div");
  col.classList.add("col-sm-6", "col-lg-3", "my-5");
  col.innerHTML = `

      <div class="card ">
      <h5 class="card-title my-4 pb-0">${arrayKeys[i].coin_name}</h5>
      <div class="card-header p-0 ">
         <div class="card-overlay "></div>
         <img class="card-img-top" src="${arrayKeys[i].image}" alt="Card image cap" />
      </div>
        <div class="card-body ">
          
          <p class="card-text">${arrayKeys[i].description}</p>
          <a href="${arrayKeys[i].link}" class="btn btn-primary ">Link</a>
        </div>
      </div>

  `;
  //column added to the bootstrap row.

  row.append(col);
  // applied row-reverse class to invert order of elements
  //row.classList.add("row-reverse");
}

for (let i = 0; i < arrayKeys.length; i++) {
  createColumn(i);
}

// for (let i = arrayKeys.length - 1; i >= 0; i--) {
//   createColumn(i);
// }
