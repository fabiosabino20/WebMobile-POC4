var form = document.getElementById('formulario');
var campo = document.getElementById('campo');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    getCharacter(`https://rickandmortyapi.com/api/character/${campo.value}`)

    // impede o envio do form
    e.preventDefault();
});

async function getCharacter( endpoint ) {
    try{
        let response = await fetch(endpoint)
        let data = await response.json()

        let urlIMG = data.image
        let nome = data.name
        let status = data.status
        let especie = data.species
        let genero = data.gender
        let origem = data.origin.name
        
        let content = document.getElementById('content')
        content.innerHTML += `<img src='${urlIMG}' />`
        content.innerHTML += `<h1>Name: ${nome}</h1>`
        content.innerHTML += `<h2>Status: ${status}</h2>`
        content.innerHTML += `<h2>Species: ${especie}</h2>`
        content.innerHTML += `<h2>Gender: ${genero}</h2>`
        content.innerHTML += `<h2>Origin: ${origem}</h2>`

    } catch(error) {
        console.log(error)
    } finally {
        console.log("FIM")
    }
}
