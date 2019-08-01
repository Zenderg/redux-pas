import React from 'react'
import PropTypes from 'prop-types'

import './page.scss'

export default class Page extends React.Component {
  onBtnClick = e => {
    const val = +e.currentTarget.innerText

    this.props.setYear(val)
  }

  render() {
    const { year, photos } = this.props
    console.log(year, typeof year)
    return (
      <div className="main__wrapper">
        <div className="years">
          <button
            className={`year ${year === 2018 ? 'year-active' : ''}`}
            onClick={this.onBtnClick}
          >
            2018
          </button>
          <button
            className={`year ${year === 2017 ? 'year-active' : ''}`}
            onClick={this.onBtnClick}
          >
            2017
          </button>
          <button
            className={`year ${year === 2016 ? 'year-active' : ''}`}
            onClick={this.onBtnClick}
          >
            2016
          </button>
          <button
            className={`year ${year === 2015 ? 'year-active' : ''}`}
            onClick={this.onBtnClick}
          >
            2015
          </button>
          <button
            className={`year ${year === 2014 ? 'year-active' : ''}`}
            onClick={this.onBtnClick}
          >
            2014
          </button>
        </div>
        <p className="info">
          {photos.length} фото за {year} год
        </p>
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired,
}
