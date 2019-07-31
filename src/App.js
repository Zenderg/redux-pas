import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './components/User'
import Page from './components/Page'
import { setYear } from './actions/PageActions'

import './containers/App.css'

class App extends Component {
  static mapStateToProps = store => ({
    user: store.user,
    page: store.page,
  })

  static mapDispatchToProps = dispatch => ({
    setYear: year => dispatch(setYear(year)),
  })

  render() {
    const { user, page, setYear } = this.props
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Топ фоток</h1>
          <User name={user.name} />
        </header>
        <main>
          <Page year={page.year} photos={page.photos} setYear={setYear} />
        </main>
      </div>
    )
  }
}

export default connect(
  App.mapStateToProps,
  App.mapDispatchToProps
)(App)
