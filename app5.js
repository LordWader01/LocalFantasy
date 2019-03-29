const fild = document.querySelector("#fieldShow");
const selekt = document.querySelector('select');
let inputs = document.querySelectorAll('input');
let allTilesOfFootballField = [];

//push elements to table allTiles
for (let index = 1; index <= 25; index++) {
    allTilesOfFootballField.push(document.getElementById(`tile${index}`));
}

//func to choose tactic
const changeTac = function (...param) {
    let chosenTiles = [];
    let leng = 0;

    param.forEach(el => {
        chosenTiles[leng] = `tile${el}`;
        leng+=1;
    });

    for (let indx = 0; indx < allTilesOfFootballField.length; indx++) {
        if (chosenTiles.indexOf(allTilesOfFootballField[indx].id)!==-1) {
            allTilesOfFootballField[indx].style.display = "";
        }
    }         
}

//func to set displa: none for all tiles from the field
const disapperAllTiles = function(){
    allTilesOfFootballField.forEach(el=>{
        el.style.display = "none";
    }) 
}

//checks if object is iterable and the object is iterable if he has iterator() method
const  isIterable = function(obj) {
    // checks for null and undefined
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}

//return boolen var if element is active or not
let isActive = function(element){
    return document.activeElement === element;
}

//save choice of user when he clicks enter key
const saveChoice = function(elmts){
    if(isIterable(elmts)){    
        for (const inpt of elmts) {
            inpt.addEventListener('keypress', function (e) {
                    let key = e.which || e.keyCode;
                    if (key === 13) { // 13 is enter, check if user clicked enter 
                            if (isActive(inpt) && elmts.name != "userName") {
                                let inptVal = inpt.value;
                                inpt.style.display = "none";
                                inpt.parentElement.innerHTML = `<p>${inptVal}</p>`;
                            
                        }
                    }
            });
        }
    }
    else{
        elmts.addEventListener('keypress', function (e) {
            let key = e.which || e.keyCode;
            if (key === 13) { // 13 is enter, check if user clicked enter                  
                    if (isActive(elmts)) {
                        let inptVal = elmts.value;
                        elmts.style.display = "none";
                        elmts.parentElement.innerHTML = `<p>${inptVal}</p>`;
                    
                }
            }
        });
    }
};

document.addEventListener("DOMContentLoaded", function() {

    //set 4-4-2 tactic by default
    disapperAllTiles();
    changeTac(1, 6, 7, 8, 9, 11, 12, 13, 14, 17, 18);

});


selekt.addEventListener('change',function(){
    // let tilesNumber = [];

    disapperAllTiles();

    switch (this.value) {
        case "442":
            changeTac(1, 6, 7, 8, 9, 11, 12, 13, 14, 17, 18);
            break;
        case "4312":
            changeTac(1, 6, 7, 8, 9, 12, 14, 15, 16, 22, 24);
            break;
        case "433":
            changeTac(1, 6, 7, 8, 9, 11, 12, 13, 16, 17, 18);
            break;
        case "4231":
            changeTac(1, 6, 7, 8, 9, 11, 12, 16, 17, 18, 21);
            break;
        case "352":
            changeTac(1, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17);
    }
});

saveChoice(inputs);