import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {



state = {
  imagefront: true
}


clickToggler= ()=>{
  this.setState({
    imagefront: !this.state.imagefront
  })
}



  render() {
      const statsToHp = this.props.hp.find(element => element.name === "hp")

    return (
      <Card>
        <div>
        { this.state.imagefront? (
          <div className="image">
            <img onClick = {this.clickToggler}  src = {this.props.imagefront} />
            </div>
          ) : (
            <div className="image">
            <img onClick = {this.clickToggler}  src = {this.props.imageback} />
          </div>
                )
              }
          <div className="content">
            <div className="header"> {this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {statsToHp.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
