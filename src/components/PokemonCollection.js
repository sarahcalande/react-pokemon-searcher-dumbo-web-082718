import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    let pokemonCards = this.props.pokemon.map(pokemonobject => < PokemonCard key = {pokemonobject.id} name = {pokemonobject.name}
      hp = {pokemonobject.stats} imagefront = {pokemonobject.sprites.front} imageback = {pokemonobject.sprites.back} />)
      console.log(this.props.filterStatus);
      let filteredpokemon = this.props.filterStatus.map(pokemonobject => < PokemonCard key = {pokemonobject.id} name = {pokemonobject.name}
        hp = {pokemonobject.stats} imagefront = {pokemonobject.sprites.front} imageback = {pokemonobject.sprites.back} />)

    return (
      <div>
      {this.props.filterStatus ? (
        <Card.Group itemsPerRow={6}>
        {filteredpokemon}
          <h1>Hello From Pokemon Collection</h1>
        </Card.Group>
      ) : (
      <Card.Group itemsPerRow={6}>
      {pokemonCards}
        <h1>Hello From Pokemon Collection</h1>
      </Card.Group>
    )}
    </div>
  )
  }
}

export default PokemonCollection
