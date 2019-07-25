import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  static mapStateToProps = store => {
    console.log(store) // посмотрим, что же у нас в store?
    return {
      user: store.user,
    }
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Мой топ фоток за 2007 год</h1>
          <p className="app__name">Пользователь: {this.props.user}</p>
        </header>
      </div>
    )
  }
}

export default connect(App.mapStateToProps)(App)
