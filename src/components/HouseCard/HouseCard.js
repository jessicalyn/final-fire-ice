import React, { Component } from 'react';

export default class HouseCard extends Component {
  render () {
    const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words } = this.props
    return (
      <div className="Card">
        <h2>{ name }</h2>
        <h3>{ words }</h3>
        <h3>Founded: { founded } </h3>
        <p>Seats: { seats }</p>
        <p>Titles: { titles }</p>
        <p>Coat of Arms: { coatOfArms }</p>
        <p>Ancenstral Weapons: { ancestralWeapons}</p> 
      </div>
    )
  }
}