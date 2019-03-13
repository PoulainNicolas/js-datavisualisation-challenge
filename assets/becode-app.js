/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name :     
Date :  
Contact information : 
What does this script do ? 
...
*/

// Your scripting goes here...

// I. INLINE DATA
// 1.1. Graphique 1

// méthode:
//      1. Créer un élément juste en-dessous du h3 pour insérer graphique
//      2. Récupérer les données du tableau (querySelector?)
//      3. Push les données dans newTab
//      4. Créer graphique àpd newTab



// creation div enfant H1

let newElt = document.createElement('div');
newElt.id='test';
let elt = document.getElementById('firstHeading');
elt.appendChild(newElt);


let data = [];
let svg = dimple.newSvg("#test", "100%", 400);



function recupDonnees(){
    // mettre le constructeur dans la fonction sinon chart pas défini si ds fction onreadystatechange
    let chart = new dimple.chart(svg, data);

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://inside.becode.org/api/v1/data/random.json', true);
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState ===4 && xhr.status===200){
            let response = JSON.parse(xhr.responseText);        
        for(let i=0; i<response.length; i++){ 
            data.push({x: response[i][0], y: parseInt(response[i][1])});
        }
        // chart.setBounds("100%", 400, "100%", 400);
        chart.addCategoryAxis("x", "x");
        chart.addMeasureAxis("y", "y");
        chart.addSeries(null, dimple.plot.line);
        chart.draw(1000);
    }    
}
console.log(data)
xhr.send(null);
// affichage du graphique chaque seconde
// ATTENTION faut supprimer l'ancien graph pour ne pas avoir de superposition

setTimeout(function(){
    // trouvé sur stackoverflow
    // ATTENTION ca supprime tout m^eme le svg du coup impression que ca clignote
    chart.svg.selectAll('*').remove();
    // chart.series.forEach(function(series){
    //     series.shapes.remove();
    // });

    // delete chart.svg.selectAll('*');
    // chart.svg.selectAll('*').detach();
    // chart.svg.selectAll('*').empty();
    recupDonnees();
    
},2000);
}
recupDonnees();




