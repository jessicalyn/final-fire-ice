import React, { Component } from 'react';
import { connect } from 'react-redux';
import HouseCard from '../HouseCard/HouseCard'

export class CardContainer extends Component {

  render() {
    const { houses } = this.props
    const cardsToDisplay = houses.map(house => {
      return <HouseCard key={ house.id } {...house} />
    })
    return (
      <div className="Container">
        { cardsToDisplay }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses
})

export default connect(mapStateToProps)(CardContainer)