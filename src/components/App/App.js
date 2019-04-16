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
    console.log("fetch data")
    const url = 'http://localhost:3001/api/v1/houses'
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw Error
      }
      const houses = await response.json()
      console.log("house data", houses)
    } catch (error) {
        return error.message
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
