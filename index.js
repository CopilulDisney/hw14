// const year = 365; //Exercitiu 1
// const month = 30;
// const week = 7;
// const day = 1;

// const lastUpdate = 35; //1915 ; 104 ; 35 

// if (lastUpdate / year >= 1) {
//     console.log(`${Math.floor(lastUpdate/year)}ani ${Math.floor(lastUpdate % year/month)}luni`)
// } else if (lastUpdate / month >=1) {
//     console.log(`${Math.floor(lastUpdate/month)}luni ${Math.floor(lastUpdate % month/week)}saptamani`)
// } else if (lastUpdate / week >=1) {
//     console.log(`${Math.floor(lastUpdate/week)}saptamani ${Math.floor(lastUpdate % week/day)}zile`)
// } else {
//     console.log('mai putin de o saptamana')
// }

// class Obiect { //Exercitiu 2
//     constructor(date){
//         this.nume = date.nume
//         this.hobby = date.hobby
//     }
// }
// const Object1 = new Obiect ({
//     nume: 'Ion',
//     hobby: 'Fotbal'
// })
// const Object2 = new Obiect ({
//     nume: 'Costel',
//     hobby: 'Volei'
// })
// const Object3 = new Obiect ({
//     nume: 'Sandu',
//     hobby: 'Atletism'
// })
// const Object4 = new Obiect ({
//     nume: 'Marcel',
//     hobby: 'Basket'
// })
// const Object5 = new Obiect ({
//     nume: 'Lucian',
//     hobby: 'Sala'
// })
// const obj = 'Object2'

// if(Object1) {
//     console.log(Object1)
// } else if (Object2) {
//     console.log(Object2)
// } else if (Object3) {
//     console.log(Object3)
// } else if (Object4) {
//     console.log(Object4)
// } else {
//     console.log(Object5)
// }


// const luna = '' //Exercitiu 3

// switch (luna) {
//     case "Iarna":
//         console.log(`${luna} este cel mai reci anotimpuri.`)
//         break;
//     case "Primavara":
//         console.log(`${luna} este cel mai fericit anotimp.`)
//         break;
//     case "Vara":
//         console.log(`${luna} este cel mai cald anotimp si este si vacanta.`)
//         break;
//     case "Toamna":
//         console.log(`${luna} este cel mai greu anotimp de procesat in minte.`)
//         break;
//         default:
//             console.log("Nu este denumire de anotimp")
// }

class Animale { //Exercitiu 4
    constructor(date) {
        this.picioare = date.picioare
        this.coada = date.coada
        this.urechi = date.urechi
        this.ochi = date.ochi
    }
}

class Pisici extends Animale {
    constructor(options) {
        super(options)
        abilitati: 'supravietuieste de la o cazatura de 20m+'
    }
}
class Caini extends Animale {
    constructor(options) {
        super(options)
        abilitati: 'mai inspaimantator si mai puternic'
    }
}