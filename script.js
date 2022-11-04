/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


let eleRandom= document.querySelector('.numeri-casuali');
//let eleUtente= document.querySelector('.numeri-utente');

eleRandom.innerHTML=generateNumeriRandom(5,0,100);
//eleUtente.innerHTML=generateNumUtente(5);



setTimeout (dNone,3000);


function dNone(elemento){
    console.log('ciao')
    eleRandom.classList.add('none');
    generateNumUtente(6);

}

function generateNumUtente(n){
    let arrUtente=[];
    for (i=0; i<n;i++){
        numeroUtente=prompt('dammi un numero');
        arrUtente.push(numeroUtente);
        return arrUtente;
    }
}



function generateNumeriRandom(n,min,max){
    const arrRandoms=[];
    for (let i=0; i<n; i++){
        do {
            randomNumber=getIntegerRandom(min,max);
        }while(arrRandoms.includes(randomNumber))
        arrRandoms.push(randomNumber)
    }
    return arrRandoms;
    
}

function getIntegerRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

/*function numPrompt(num1,num2,num3,num4,num5){
    const arrUtente=[];
    num1= parseInt(prompt('dammi un numero'));
    num2= parseInt(prompt('dammi un numero'));
    num3= parseInt(prompt('dammi un numero'));
    num4= parseInt(prompt('dammi un numero'));
    num5= parseInt(prompt('dammi un numero'));
    arrUtente.push(num1);
    arrUtente.push(num2);
    arrUtente.push(num3);
    arrUtente.push(num4);
    arrUtente.push(num5);
    return arrUtente;

}*/