var allHacks = [];

var hacksRow = document.getElementById("hacksRow");
var site = document.getElementById("site");
var hacksLoading = document.getElementById("loading");
var getHackObjectWithName = function (name) {
    if (allHacks.filter(e => e.Hack == name).length > 0)
        return allHacks.filter(e => e.Hack == name)[0];
    else
        return null;
}

var loadHacksStatus = function () {
    //First we get all the hacks & their statuses
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            allHacks = JSON.parse(this.responseText);
            //Second we get the hacks prices
            loadHackPrices();
        }
    }
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://guid.sinfulexp.net/panel/functions.php?action=getHackStatus");
    xhr.send();
}

var loadHackPrices = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var hackPrices = JSON.parse(this.responseText);
            hackPrices.forEach((el, index) => {
                if (allHacks.filter(e => e.Hack == el.Hack).length > 0) {

                    if (getHackObjectWithName(el.Hack).Prices) {
                        getHackObjectWithName(el.Hack).Prices.push(`${el.Length} ${el.Unit} - $${el.Price}`);
                    }
                    else {
                        getHackObjectWithName(el.Hack).Prices = [`${el.Length} ${el.Unit} - $${el.Price}`];
                    }
                }
            });
            // After we get all the prices, we show the hacks
            loadHacks();
        }
    }
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://guid.sinfulexp.net/panel/functions.php?action=getPrice");
    xhr.send();
}

var hackCard = function (hackName, hackStatus, imgLink, hackf1, hackf2, hackf3, hackf4, hackf5, price1, price2, price3) {
    var e = document.createElement("div");
    e.innerHTML = 
    `<div class="col s12 m12 l6 xl4">
        <div class="card">
            <div class="card-side card-side--front">
                <div class="card-image">
                    <img src="${imgLink}" alt="" class="card-image-tag">
                </div>
                <div class="card-status status-${hackStatus.toLowerCase()}"></div>
                <h4 class="card-title">
                    <span class="heading-span heading-span--1">${hackName}</span>
                </h4>
                <div class="card-features">
                    <ul>
                        <li>${hackf1}</li>
                        <li>${hackf2}</li>
                        <li>${hackf3}</li>
                        <li>${hackf4}</li>
                        <li>${hackf5}</li>
                    </ul>
                </div>
            </div>
            <div class="card-side card-side--back">
                <div class="box-center">
                    <div class="price-duration">${price1.split('-')[0].trim()}</div>
                    <div class="price-value">${price1.split('-')[1].trim()}</div>
                    <div class="price-duration">${price2.split('-')[0].trim()}</div>
                    <div class="price-value">${price2.split('-')[1].trim()}</div>
                    <div class="price-duration">${price3.split('-')[0].trim()}</div>
                    <div class="price-value">${price3.split('-')[1].trim()}</div>
                    <a class="custom-button btn-white pulse">Buy now!</a>
                </div>
            </div>
        </div>
    </div>`;

    return e;
}


var loadHacks = function() {

    featuredHacks.forEach((el, index) => {
        loadHack(el.name, el.bgimage, el.f1, el.f2, el.f3, el.f4, el.f5)
    });
  
    site.style.display = 'block';

    document.querySelectorAll('.parallax').forEach((parallax, index) => {
        M.Parallax.init(parallax);
    });

    site.classList.add('showAnimation');
    hacksLoading.style.display = 'none';
}

var loadHack = function(name, img, hackf1, hackf2, hackf3, hackf4, hackf5){
    var obj = getHackObjectWithName(name);
    if(obj){
        hacksRow.appendChild(hackCard(name, obj.Status, img, hackf1, hackf2, hackf4, hackf4, hackf5, obj.Prices[0], obj.Prices[1], obj.Prices[2]));
    } else {

    }
}

window.onload = function() {
    loadHacksStatus();
}

//hacksRow.appendChild(hackCard('Paladins', 'undetected', 'Aimbot', 'Wallhack', 'ESP', 'No Recoil', 'No Spread & MORE!', '1 Month - $20', '3 Month - $30', '1 YEAR - $100'));