const btn = document.querySelector("#send")

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const id = document.querySelector("#charId")

    const value = id.value

    // console.log(value)

    getCharacter(`https://rickandmortyapi.com/api/character/${value}`)
    
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
        
        let foto = document.getElementById('imagem')
        let content = document.getElementById('content')

        foto.innerHTML = `<img src='${urlIMG}' />`
        
        content.innerHTML = `
            <h1>Name: ${nome}</h1>
            <h2>Status: ${status}</h2>
            <h2>Species: ${especie}</h2>
            <h2>Gender: ${genero}</h2>
            <h2>Origin: ${origem}</h2>
        `;

    } catch(error) {
        console.log(error)
    } finally {
        console.log("Personagem mostrado")
    }
}
