import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/user/User'
import Page from '../components/page/Page'
import { getPhotos } from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions'

import './App.scss'

class App extends Component {
  static mapStateToProps = store => ({
    user: store.user,
    page: store.page,
  })

  static mapDispatchToProps = dispatch => ({
    getPhotos: year => dispatch(getPhotos(year)),
    handleLogin: () => dispatch(handleLogin()),
  })

  render() {
    const { user, page, getPhotos, handleLogin } = this.props
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Топ фоток</h1>
          <User
            handleLogin={handleLogin}
            name={user.name}
            isFetching={user.isFetching}
            error={user.error}
          />
        </header>
        <main className="app__main">
          <Page
            year={page.year}
            photos={page.photos}
            getPhotos={getPhotos}
            error={page.error}
            isFetching={page.isFetching}
          />
        </main>
      </div>
    )
  }
}

export default connect(
  App.mapStateToProps,
  App.mapDispatchToProps
)(App)
