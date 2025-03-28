/* raccolta del Form */
const  userForm = document.getElementById ("user-form");
const userTipoLavoro = document.getElementById ("tipo-lavoro");
const userCodicePromo = document.getElementById ("promozione");
const prezzoFinale = document.getElementById ("prezzo-finale");


/* evocazione funzione */
userForm.addEventListener("submit", calcolaPreventivo);

function calcolaPreventivo(event) {
    event.preventDefault();


/* Variabili */

const tipoLavoro = userTipoLavoro.value;
const codicePromo = userCodicePromo.value;
const sviluppoBackend = 20.50 * 10;
const sviluppoFrontend = 15.30 * 10;
const analisiProgettuale = 33.60 * 10;
const codiciPromoArr = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"
];

let risultato = 0;  
let sconto1 = 0 ;
let sconto2 = 0;
let sconto3 = 0;

/*esecuzione logica if else*/
if (codiciPromoArr.includes(codicePromo) === true) {

    /* inserire il tipo sconto nella variabili sconto poi sempore con if else inserire il valore di "risultato" a seconda del "tipoLavoro" scelto(option) */
    sconto1 = (sviluppoBackend / 100) * 25;
    sconto2 = (sviluppoFrontend / 100 ) * 25;
    sconto3 = (analisiProgettuale / 100) * 25

}

if ( tipoLavoro === "Back-Dev") {
    risultato = sviluppoBackend - sconto1;}
    else if ( tipoLavoro === "Front-End") {
        risultato = sviluppoFrontend - sconto2;
    }
    else if (tipoLavoro === "Proj-Analyst"){
        risultato = analisiProgettuale - sconto3
    }
    else {
    alert ("Errore: Seleziona tipo di lavoro!")
    }
    /*prezzoFinale.innerText = risultato*/
    /*output*/
    const rislutatoFormattato = risultato.toFixed(2).replace(".",",");
    const index = rislutatoFormattato.indexOf(",")

    const risultato1 = rislutatoFormattato.slice(0,index);
    const risultato2 = rislutatoFormattato.slice(index)
    
    prezzoFinale.innerHTML =  `€ ${risultato1}<span class="text-secondary fw-normal fs-3">${risultato2}</span>` 

    prezzoFinale.innerText = `€ ${risultato.toFixed(2).replace(".", ",")}`

}







/*output*/