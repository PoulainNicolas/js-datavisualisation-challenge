/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name :     
Date :  
Contact information : 
What does this script do ? 
...
*/

// Your scripting goes here...

// ////////////////////INLINE DATA /////////////////////////////////

// ////////////////////GRAPHIQUE 1 /////////////////////////////////

// 1. Créer un élément juste en-dessous du h3 pour insérer graphique 

let insertChart = document.createElement('div');
insertChart.id = "graphiqueOne";
let titreTrois = document.getElementById('Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police');
titreTrois.appendChild(insertChart);

// 2. Récupérer les données du tableau 

// 2.1. Faire une "requete" sur l'ensemble du tableau
let tab = document.querySelector('#table1');

// 2.2 Filtrer les données et ne garder que ce qui m'intéresse
// utiliser parent/enfant

let tabTest = tab.querySelectorAll('td, th');
// j'obtiens une nodelist statique avec toutes les cellules dont j'ai besoin
// faut retirer certains th... 
// faut surtout afficher les valeurs
// L'important, c'est les valeurs

// 2.3. trouver value
let dataTabOne = [];
for(let i = 0; i < tabTest.length; i++){
    dataTabOne.push(tabTest[i].innerHTML)
}
// 2.4. je supprime les 5ers élts dont je n'ai pas besoin
dataTabOne.splice(0, 5);

// 2.5. je remarque que tous les 12 élts ya un truc à virer
for(let i = 0; i < dataTabOne.length; i+=12){
    dataTabOne.splice([i + 11], 1)
}

//  OK j'ai mes données

// 3. Mettre data dans un objet
let objetDataOne = [];
// Belgique test
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        // boucle for dans objet ca ne va as
        y: dataTabOne[i+12],
        z: "Belgique",

        // x: dataTabOne[i],
        // y: dataTabOne[i+24],
        // z: "Bulgarie",
        // tout se passe comme si la 2e partie remplacait la 1ere...
        // données Be remplacee par Bulgarie...
    });
    }
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+24],
        z: "Bulgarie",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+36],
        z: "Rep. Tchèque",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+48],
        z: "Danemark",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+60],
        z: "Allemagne",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+72],
        z: "Estonie",
    });
}
for(let i = 0; i < 5; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+84],
        z: "Irlande",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+96],
        z: "Grèce",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+108],
        z: "Espagne",
    });
}
for(let i = 0; i < 5; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+120],
        z: "France",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+132],
        z: "Croatie",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+144],
        z: "Italie",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+156],
        z: "Chypre",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+168],
        z: "Lettonie",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+180],
        z: "Lituanie",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+192],
        z: "Luxembourg",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+204],
        z: "Hongrie",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+216],
        z: "Malte",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+228],
        z: "Pays Bas",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+240],
        z: "Autriche",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+252],
        z: "Pologne",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+264],
        z: "Portugal",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+276],
        z: "Roumanie",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+288],
        z: "Slovénie",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+300],
        z: "Slovaquie",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+312],
        z: "Finlande",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+324],
        z: "Suède",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+336],
        z: "Islande",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+348],
        z: "Lichtenstein",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+360],
        z: "Norvège",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+372],
        z: "Suisse",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+384],
        z: "Monténégro",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+396],
        z: "ARYdeMacédoine",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+408],
        z: "Serbie",
    });
}
for(let i = 0; i < 11; i++){
    objetDataOne.push({
        x: dataTabOne[i],
        y: dataTabOne[i+420],
        z: "Turquie",
    });
}
console.log(objetDataOne);

// 4. Création graphique

let svg = dimple.newSvg("#graphiqueOne", "100%", 450);

let graphiqueOne = new dimple.chart(svg, objetDataOne);
graphiqueOne.setBounds(30, 110, "90%", 305);
graphiqueOne.addCategoryAxis("x", "x");
graphiqueOne.addMeasureAxis("y", "y");
graphiqueOne.addSeries("z", dimple.plot.bubble);
graphiqueOne.addLegend(0, 10, "100%", 200);
graphiqueOne.draw();



// /////////////////////////////////// Grahique 2 ///////////////////////////////////

// 1. Création d'une new div

let grahiqueTwo = document.createElement('div');
grahiqueTwo.id = 'chartContainerTwo'
let parentChartTwo = document.getElementById('Homicides');
parentChartTwo.appendChild(grahiqueTwo);

// 2. Récupération des données

let tabTwo = document.querySelector('#table2');
let selectData = tabTwo.querySelectorAll('td, th');
console.log(selectData);

// 3. Création objet
let dataTwo = [];
for( let i = 0; i < selectData.length; i++){
    dataTwo.push(selectData[i].innerHTML);
}

// 4. filtrer données

for (let i = 0; i < dataTwo.length; i+=3){
    dataTwo.splice(i, 1)
}
dataTwo.splice(0, 3)
console.log(dataTwo);

// 5. Organiser data dans objet
// objet 2007
let objetDataTwo2007 =[];
for (let i = 0; i<dataTwo.length; i+=3){
    objetDataTwo2007.push({
        "Pays": dataTwo[i],
        "Homicides": dataTwo[i+1],
        "Année": 2007,
    })
}

// objet 2010

let objetDataTwo2010 =[];
for (let i = 0; i<dataTwo.length; i+=3){
    objetDataTwo2010.push({
        "Pays": dataTwo[i],
        "Homicides": dataTwo[i+2],
        "Année": 2010,
    })
}

// a&ssembler les 2 objets
// merci max
objetDataTwo = objetDataTwo2010.concat(objetDataTwo2007);
console.log(objetDataTwo)
// ATTENTION 2010 s'affiche avant 2007 PAS TOP

// 6. construction grahique

svg = dimple.newSvg("#chartContainerTwo", "100%", 600);

grahiqueTwo = new dimple.chart(svg, objetDataTwo);
grahiqueTwo.addCategoryAxis("x", ["Pays", "Année"]);
grahiqueTwo.addMeasureAxis("y", "Homicides");
grahiqueTwo.addSeries("Pays", dimple.plot.bar);
grahiqueTwo.draw(5000);


// ////////////////////ONLINE DATA - GRAPHIQUE 3 //////////////////////////

let newElt = document.createElement('div');
newElt.id='test';
let elt = document.getElementById('firstHeading');
elt.appendChild(newElt);


let data = [];
svg = dimple.newSvg("#test", "100%", 400);


// Requête Ajax
function recupDonnees(){
    // mettre le constructeur dans la fonction sinon chart pas défini si ds fction onreadystatechange
    // vider data sinon addition
    data=[];
    let chart = new dimple.chart(svg, data);

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://inside.becode.org/api/v1/data/random.json', true);
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState ===4 && xhr.status===200){
            let response = JSON.parse(xhr.responseText);        
        for(let i=0; i<response.length; i++){ 
            data.push({x: response[i][0], y: response[i][1]});
        }
        // chart.setBounds("100%", 400, "100%", 400);
        chart.addCategoryAxis("x", "x");
        chart.addMeasureAxis("y", "y");
        chart.addSeries(null, dimple.plot.line);
        chart.draw();
    }    
}
console.log(data)
xhr.send(null);
// affichage du graphique chaque seconde
// ATTENTION faut supprimer l'ancien graph pour ne pas avoir de superposition
 
// data = [];
setTimeout(function(){
    // trouvé sur stackoverflow
    // ATTENTION ca supprime tout m^eme le svg du coup impression que ca clignote
    chart.svg.selectAll('*').remove();
    // chart.data.selectAll('*').remove();
    // chart.series.forEach(function(series){
    //     series.shapes.remove();
    // delete data;
    // 
    // });
    // vider tableau data
    // data=[];
    // data = null;

    // delete chart.svg.selectAll('*');
    // chart.svg.selectAll('*').detach();
    // chart.svg.selectAll('*').empty();
    recupDonnees();
    // delete chart.data;

    
},2000);
}
recupDonnees();




