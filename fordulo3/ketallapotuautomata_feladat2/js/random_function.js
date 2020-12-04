function DisplaySelected(){
    let img = document.createElement("img");
    img.src = RandomDragon();
    img.id = "small-dragon"

    if (document.getElementById("small-dragon") != undefined){
        document.getElementById("small-dragon").src = img.src = RandomDragon();
    }
    else{
        document.getElementById("body").appendChild(img);

    }

    document.getElementById("body").appendChild(img);

    function RandomDragon(){
        var selected = `./img/random_items/${Math.floor(Math.random()*(11 - 9 + 1) + 9)}.jpg`;
        selectedDragon = selected;

        return selected;
    }
}

function DisplayPopup(){
    let img = document.createElement("img");
    img.src = RandomPopup();
    img.id = "popup"

    if (document.getElementById("popup") != undefined){
        document.getElementById("popup").src = img.src = RandomPopup();
    }
    else{
        document.getElementById("body").appendChild(img);

    }

    function RandomPopup(){
        var randomItem = `./img/random_items/${Math.floor((Math.random()*11)+1)}.jpg`;
        randomImg = randomItem;
        return randomItem;
    }
}