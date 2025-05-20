//1-LISTADO DEL ZOO A LA INVERSA

let animals=["Gorila", "Serpiente", "Avestruz", "Oso", "Koala", "Delfín"];
console.log(animals);

for(let i=6;i>=0;i--){
    console.log(animals[i]);
}

//2- CATÁLOGO DE MUSICA

let bandas= [];
console.log(bandas);
let x=0;
while (x<4){

    let bandass = (prompt("¿Cuál es tu banda favorita"));

bandas.push(bandass);

x++;

}
console.log(bandas);

bandas2= bandas.shift();
console.log(bandas2);
bandas3 = bandas.pop();
console.log(bandas3);
console.log(bandas[1]);

