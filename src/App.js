import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  static mapStateToProps = store => {
    console.log(store) // посмотрим, что же у нас в store?
    return {
      user: store.user,
      page: store.page,
    }
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">
            Топ фоток за {this.props.page.year} год
          </h1>
          <p className="app__name">Пользователь: {this.props.user.name}</p>
        </header>
        <main>
          <p>Кажется у тебя их {this.props.page.photos.length}</p>
        </main>
      </div>
    )
  }
}

export default connect(App.mapStateToProps)(App)
