const { DiceRoller , DiceRoll } = require("@dice-roller/rpg-dice-roller");


  

const roller = new DiceRoller();

let str = roller.roll('4d6dl1');
let dex = roller.roll('4d6dl1');
let con = roller.roll('4d6dl1');
let int = roller.roll('4d6dl1');
let wis = roller.roll('4d6dl1');
let cha = roller.roll('4d6dl1');





console.log(`Seu primeiro atributo rolado é: ${str.total}`);
console.log(`Seu segundo atributo rolado é:  ${dex.total}`);
console.log(`Seu terceiro atributo rolado é: ${con.total}`);
console.log(`Seu quarto atributo rolado é:   ${int.total}`);
console.log(`Seu quinto atributo rolado é:   ${wis.total}`);
console.log(`Seu sexto atributo rolado  é:   ${cha.total}`);

let atributos = []

atributos.push (str.total, dex.total, con.total, int.total, wis.total, cha.total);
atributos.sort(function (a,b) {
    if ( a > b) return 1;
    if (a < b) return -1;
    return 0;

});

console.log(atributos);






