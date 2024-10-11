# Web Mobile

### Ciência da Computação - Sistemas da Informação
### Faculdade de Computação e Informática
### Universidade Presbiteriana Mackenzie

# Grupo:
* Fabio Sabino
* Leonardo Pinheiro
* Lucas Rocha
* Luiz Octávio Saraiva

# Sobre o repositório

Este repositório faz parte do projeto do semestre para a matéria "Web Mobile" do curso de Sistemas da Informação.

# POC 4 - Fetch

Esta Prova de Conceito mostra como utilizar o método fetch do javascript para consumo de APIs. Para isso, foi utilizada a API: [The Rick and Morty API](https://rickandmortyapi.com/documentation/), que permite buscar informações a respeito de persoangens, planetas e episódios da série. Nesse projeto foi utilizada somente a parte a respeito da coleta de informações sobre personagens.

# Funcionamento básico da api

Para o consumo de dados da API é necessário construir uma url com base na documentação da api. Neste caso, usou-se o seguinte endpoint:

`https://rickandmortyapi.com/api/character/`

A ele foi adicionada ainda a propriedade que indica qual a qual personagem o usuário deseja observar. A função recebe este valor como argumento e repassa para a o endpoint como parâmetro da requisição:

`https://rickandmortyapi.com/api/character/${value}`

A resposta dessa requisição contém um objeto json na seguinte formatação:

```json
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      // ...
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
  }
```

## Fetch

Foi criada uma função, `getCharacter`, que busca o personagem com ID especificado pelo usuário e adiciona determinadas informações ao HTML da página, como apresentado a seguir:

```js
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
```

No JavaScript, o método `fetch` é usado para realizar requisições assíncronas a uma URL, seja para uma página ou um arquivo. Ele envia a solicitação para a URL especificada (como no exemplo mencionado) e aguarda uma resposta. Essa resposta segue o padrão HTTP, permitindo que o código principal possa processá-la.

Por funcionar de maneira **assíncrona**, ou seja, a requisição ocorre ao mesmo tempo que o restante do código é executado, é necessário lidar adequadamente com o retorno da requisição, pois ela pode falhar ou ter sucesso.

A estrutura do `fetch` segue o modelo:

```js
let url = `https://rickandmortyapi.com/api/character/${value}`
let response = await fetch(endpoint)
let data = await response.json()
```

Observe que a URL foi montada de acordo com as especificações da API e passada como argumento para o método `fetch`. Se necessário, um segundo argumento pode ser fornecido, que é um objeto contendo propriedades adicionais. Por padrão, o método utilizado é o GET e não são adicionadas outras propriedades automaticamente.

Perceba a utilização da palavra-chave `await`, que indica que a execução do código deve aguardar a finalização da requisição antes de continuar.

Por fim, o corpo da resposta é convertido para o formato JSON utilizando o método `json()`, que também é assíncrono e, portanto, precisa ser precedido pela palavra await.

# Resultado Visual:

![image](https://github.com/user-attachments/assets/3fb14cda-39ba-4968-9804-4065fa09605d)
