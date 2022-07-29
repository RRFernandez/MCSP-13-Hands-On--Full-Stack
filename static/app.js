const $trainer = $("#trainerList");
const $pokemon = $("#pokeList");


fetch('/Pokemon')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        $trainer.append(JSON.stringify(data))
    });

fetch('/Pokemon/pokemon')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        $pokemon.append(JSON.stringify(data))
    });


//TESTING
//============================================================================================================================================



// fetch('/Pokemon')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         $trainer.append(JSON.stringify(data[0].name))
//         $trainer.append(JSON.stringify(data[1].name))
//         $trainer.append(JSON.stringify(data[2].name))
//     });

// fetch('/Pokemon/pokemon')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         $pokemon.append(JSON.stringify(data[0].name))
//         $pokemon.append(JSON.stringify(data[1].name))
//         $pokemon.append(JSON.stringify(data[2].name))
//     });