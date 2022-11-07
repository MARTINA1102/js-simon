/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


let eleRandom= document.querySelector('.numeri-casuali');
let eleUtente= document.querySelector('.numeri-utente');
let eleOk = document.querySelector ('.risultato-finale-ok')
let eleNo = document.querySelector ('.risultato-finale-no')




let arrRandoms = [];
// ciclo che dice per quanti numeri viene ripetuto
for (var i = 0; i < 5 ; i++){
    //creazione dei numeri random
    let result = true;
    let numberRandom = Math.floor(Math.random()*100)+1;
    for (var j = 0; j < i; j++){
        if (arrRandoms[j] == numberRandom)result =false;
    }
    if (result){
        arrRandoms[i] = numberRandom;
    } else {
        i--;
    }
}
console.log('numeri casuali:' , arrRandoms)
eleRandom.innerHTML=arrRandoms;
setTimeout (dNone,3000);

function dNone(){
    console.log('ciao')
    eleRandom.innerHTML='';    
}
setTimeout(generateNumUtente, 4000)
let arrUtente=[];
function generateNumUtente(){
    
    for (let i=0; i<5;i++){
        let numeroUtente=parseInt(prompt('dammi un numero'));
        arrUtente.push(numeroUtente);        
        console.log(arrUtente)
    }    
    var isEqual = arrUtente.toString() === arrRandoms.toString();
    console.log(isEqual);
    if (isEqual === true) {
        eleOk.innerHTML = 'CORRETTO hai fatto 50 punti'
    } else {
        eleNo.innerHTML = 'SBAGLIATO !!!'
    }
    
}


   
