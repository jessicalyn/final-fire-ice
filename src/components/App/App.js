import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { storeHouseData, hasError, isLoading } from '../../actions'

class App extends Component {

  componentDidMount() {
    this.fetchHouseData()
  }
  
  fetchHouseData = async () => {
    const { isLoading, hasError, storeHouseData } = this.props
    const url = 'http://localhost:3001/api/v1/houses'
    try {
      isLoading(true)
      const response = await fetch(url)
      if (!response.ok) {
        throw Error
      }
      const houseData = await response.json()
      isLoading(false)
      storeHouseData(houseData)
      console.log("house data", houseData)
    } catch (error) {
        return hasError(error.message)
    }
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses,
  error: state.error,
  loading: state.loading
})

export const mapDispatchToProps = (dispatch) => ({
  storeHouseData: (houseData) => dispatch(storeHouseData(houseData)),
  hasError: (message) => dispatch(hasError(message)),
  isLoading: (boolean) => dispatch(isLoading(boolean))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
