const fild = document.querySelector("#fieldShow");
const selekt = document.querySelector('select');
let allTilesOfFootballField = [];

//push elements to table allTiles
for (let index = 1; index < 25; index++) {
    allTilesOfFootballField.push(document.getElementById(`tile${index}`));
}

// fild.addEventListener('mouseover', function(){
//     this.classList.remove("dobro"); 
//     this.classList.add("field"); 
// });

//function what any specifik tactic makes
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


selekt.addEventListener('change',function(){
    // let tilesNumber = [];

    allTilesOfFootballField.forEach(el=>{
        el.style.display = "none";
    }) 

    switch (this.value) {
        case "442":
            changeTac(1, 6, 7, 8, 9,  11, 12, 13, 14, 17, 18);
            break;
        case "41212":
            changeTac(1, 6, 7, 8, 9, 12, 14, 15, 16, 18, 19, 20, 22, 24);
            break;
        case "433":
            changeTac(2, 5, 6, 7, 8, 9, 10, 14, 15, 16, 17, 18, 19, 20, 24);
            break;
        case "451":
            changeTac(2, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 23, 24);
            break;
        case "352":
            changeTac(0, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 22, 24);
        default:
            console.log('Nie wiem ile równa się numer');
    }
});



// fild.addEventListener('mouseout', function(){
//     this.classList.remove("field"); 
//     this.classList.add("dobro"); 
// });
    


/*
fild.addEventListener('mouseout', function(){
       this.style.setProperty("flex","6 1 100px");
});

$("a.stack").on("click", ()=>{
    element.classList.add("stack"); 
  });
  $("a.grid").on("click", ()=>{
    element.classList.remove("stack"); 
  });
*/