import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { updateMembers } from '../../actions';
import { connect } from 'react-redux'

export class HouseCard extends Component {

  fetchSwornMembers = () => {
    const { swornMembers, name, updateMembers } = this.props
    let members = []
    swornMembers.map(async url => {
      const response = await fetch(url)
      const result = await response.json()
      members.push(result.name)
      updateMembers({members, name})
    })
  }

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
        <button onClick={ this.fetchSwornMembers }>Add Sworn Members</button>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  updateMembers: (members, name) => dispatch(updateMembers(members, name))
})

export default connect(null, mapDispatchToProps)(HouseCard)

HouseCard.propTypes = {
  name: PropTypes.string,
  founded: PropTypes.string,
  seats: PropTypes.array,
  titles: PropTypes.array,
  coatOfArms: PropTypes.string,
  ancestralWeapons: PropTypes.array,
  words: PropTypes.string,
  swornMembers: PropTypes.array
}