//1-LISTADO DEL ZOO A LA INVERSA

let animals=["Gorila", "Serpiente", "Avestruz", "Oso", "Koala", "Delfín"];
console.log(animals);

for(let i=6;i>=0;i--){
    console.log(animals[i]);
}

//2- CATÁLOGO DE MUSICA

let bandas= ["aa", "bb", "cc", "dd","ee"];
console.log(bandas);
let x=0;
while (x<4){

    let bandass = (prompt("¿Cuál es tu banda favorita"));

bandas.push(bandass); // C del CRUD (create)

x++;

}

// Create
// Restore
// Update
// Delete

console.log(bandas);

bandas.shift();        // D del CRUD
console.log(bandas);
bandas.pop();          // D del CRUD (Delete)
console.log(bandas);
console.log(bandas[1]); // R del CRUD (Restore)

bandas.splice(0,2);
console.log(bandas);

console.log(bandas.indexOf("cc"));
