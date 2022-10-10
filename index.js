var scanf = require('scanf')

let LaCasaDelDragon = ["Rhaenerya", "Daemon", "Viserys", "Alicent"];
let i = 0;

console.log('Encuentra tu personaje favorito de House Of Dragon');
console.log('\n');
console.log('Escribe tu personaje favorito');
console.log('\n');

var personajeFavorito = scanf("%S").toLocaleLowerCase();;


for (let personaje = 0; personaje < LaCasaDelDragon.length; personaje++) {
    if (LaCasaDelDragon[personaje].toLocaleLowerCase() === personajeFavorito) {
        console.log('Personaje encontardo')
        console.log(`${personaje + 1}. ${LaCasaDelDragon[personaje]}`)
    } else{
        if(i < LaCasaDelDragon.length){
            i++;
            if(LaCasaDelDragon.length === i)
            console.log('Personaje no encontrado');
          }
        }

}






