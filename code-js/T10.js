let panier = [ 15 , 42 , 5 , 89 , 12, 50 , 8];
let somme = 0;
let nombrechers = 0; 
let sommechers = 0 ;   
for ( let i = 0 ; i < panier.length; i++){
    somme = somme + panier[i];

    if ( panier [i]>= 20) {
         nombrechers++;
         sommechers = sommechers + panier [ i];
    }
}
console.log("Total du panier :", somme);
console.log("Nombre d'articles chers :", nombrechers);
console.log("Montant des articles chers :", sommechers);