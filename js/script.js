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
const codiciPromo = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"
];

let risultato
let sconto1
let sconto2
let sconto3

/*esecuzione logica if else*/
if (codiciPromo.includes(userCodicePromo) === true) {

    /* inserire il tipo sconto nella variabili sconto poi sempore con if else inserire il valore di "risultato" a seconda del "tipoLavoro" scelto(option) */
}


}




/*output*/