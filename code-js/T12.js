let ventes = [ 110,75,150,180,90,130,100,160]
//1. intitialisation
let somme = 0;
let max = ventes [0];
let min = ventes [0];
let nbExceptionnelles = 0 ;
let sommeExceptionnelles = 0;

//2. traitement : une seule boucle 
for ( let i = 0 ; i< ventes.length; i++){
    let vente = ventes [i];
    
    //calculer le chiffre d'affaires total 
    somme = somme + vente ;

    // chercher le maximum 
    if ( vente > max ){
        max = vente ; 
    }
    // chercher le minimum

    if ( vente < min ){
        min = vente ; 
    }
    //compter les ventes exceptionnelles 
    
    if ( vente >= 130 ){
        nbExceptionnelles++;
        sommeExceptionnelles = sommeExceptionnelles + vente ; 
    }
}

//3. conclusion : afficher les résultats 
console.log("Nombre total de ventes :", ventes.length);
console.log("Chiffre d'affaires total :", somme);
console.log("Vente maximale :", max);
console.log("Vente minimale :", min);
console.log("Nombre de ventes exceptionnelles :", nbExceptionnelles);
console.log("CA des ventes exceptionnelles :", sommeExceptionnelles);