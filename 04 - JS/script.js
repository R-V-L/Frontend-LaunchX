var pokemon = []

function obtenerNombresPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=1126"
    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        for (i in data.results) {
            pokemon.push(data.results[i].name)
        }
    })
}

obtenerNombresPokemon()
set_autocomplete('pokeName', 'autocomplete', pokemon);

function fetchPokemon() {
    const pokeName = document.getElementById("pokeName").value.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    fetch(url).then((res) => {
        if (res.status != 200) {
            alert("Error. Pokemon no existe")
        } else {
            return res.json()
        }
    }).then((data) => {
        pokeInfo(data.sprites.front_default, data.name.toUpperCase(), data.id, data.height, data.types, data.weight, data.moves)
    })
}

function pokeInfo(url, name, id, height, types, peso, moves) {
    document.getElementById("pokeImg").src = url
    document.getElementById("pokeNombre").innerHTML = name
    document.getElementById("pokeNumero").innerHTML = "# " + id
    document.getElementById("altura").innerHTML = "Altura: " + height + "0 cm"
    let tipos = []
    let ataques = []
    for (i in types) {
        tipos.push(types[i].type.name)
    }
    for (i in moves) {
        ataques.push(moves[i].move.name)
        if (i > 3) {
            break
        }
    }
    document.getElementById("tipos").innerHTML = "Tipo: " + tipos.toString()
    document.getElementById("peso").innerHTML = "Peso: " + (peso / 10) + " kg"
    document.getElementById("ataques").innerHTML = "Ataques: " + ataques.toString()
}