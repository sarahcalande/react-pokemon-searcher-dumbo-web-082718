import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {


  state = {
    pokemon: [],
    filterStatus: [],
    searchStatus: ''
  }


  componentDidMount=()=>{
    fetch('http://localhost:3000/pokemon')
    .then(r=>r.json())
    .then(pokemon => this.setState({
      pokemon: pokemon
    })
        )
}



filterPokemon=(e)=>{
  console.log(e.target.value)
  let filteredpokemon = this.state.pokemon.filter( pokemon => pokemon.name.includes(e.target.value) )
  console.log(filteredpokemon)
  this.setState({
    filterStatus: filteredpokemon
})
}


makePokemon=(objofstate)=>{
  fetch('http://localhost:3000/pokemon'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
       'Content-Type': 'application/json',
    },
    body: JSON.stringify({ height: '',
weight: '',
id: '',
name: objofstate.name,
abilities: [
'',
""
],
moves: [ ],
stats: [
{
value: '',
name: ""
},
{
value: '',
name: ""
},
{
value: '',
name: ""
},
{
value: '',
name: ""
},
{
value: '',
name: ""
},
{
value: objofstate.hp,
name: ""
}

],
types: [
"",
""
],
sprites: {
front: objofstate.frontUrl,
back: objofstate.backUrl
}
}),
  }
}


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.filterPokemon} showNoResults={false} />
        <br />
        <PokemonCollection pokemon = {this.state.pokemon} filterStatus = {this.state.filterStatus} />
        <br />
        <PokemonForm makePokemon = {this.makePokemon}/>
      </div>
    )
  }
}

export default PokemonPage
