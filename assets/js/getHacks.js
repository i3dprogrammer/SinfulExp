var allHacks = [];
var featuredHacks = [
    {
        'name': 'BlackSquad',
        'background-image': 'assets/images/BlackSquadBG.jpg'
    },
    {
        'name': 'Alliance of Valiant Arms : EnMasse',
        'background-image': 'assets/images/CrossFireBG.jpg'
    },
    {
        'name': 'Paladins: Champions of the Realm',
        'background-image': 'assets/images/PaladinsBG.jpg'
    }
]

var hacksRow = document.getElementById("hacksRow");

var getHackObjectWithName = function(name){
    if (allHacks.filter(e => e.Hack == name).length > 0)
        return allHacks.filter(e => e.Hack == name)[0];
    else
        return null;
}

var loadHacks = function () {
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
        }
    }
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://guid.sinfulexp.net/panel/functions.php?action=getPrice");
    xhr.send();
}


var hackCard = function(hackName, hackStatus)