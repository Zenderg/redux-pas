import React from 'react'
import PropTypes from 'prop-types'

import './user.scss'

export default class User extends React.Component {
  render() {
    const { name, error, isFetching } = this.props

    if (error) {
      return <p className="user">Во время запроса произошла ошибка</p>
    }

    if (isFetching) {
      return <p className="user">Загружаю...</p>
    }

    if (name) {
      return <p className="user">Пользователь: {name}</p>
    } else {
      return (
        <button className="btn-login" onClick={this.props.handleLogin}>
          Войти
        </button>
      )
    }
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
}
