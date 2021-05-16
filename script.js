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
const arrayCards = [];
const rows = document.querySelectorAll(".row");

for (let card in coins) {
  arrayCards.push(coins[card]);
}

rows.forEach(function (row) {
  arrayCards.forEach(function (card) {
    col = document.createElement("div");
    col.classList.add("col-sm-6", "col-lg-3", "mt-3");

    col.innerHTML = `

            <div class="card ">
            <h5 class="card-title my-4 pb-0">${card.coin_name}</h5>
            <div class="card-header p-0 ">
              <div class="card-overlay "></div>
              <img class="card-img-top" src="${card.image}" alt="Card image cap" />
            </div>
              <div class="card-body ">
                
                <p class="card-text">${card.description}</p>
                <a href="${card.link}" class="btn btn-primary ">shop now</a>
              </div>
            </div>`;

    row.append(col);
  });
});

// for (let i = arrayCards.length - 1; i >= 0; i--) {
//
// }
