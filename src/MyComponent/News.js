import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div style={{display:'ruby-base-container' ,border:'2px solid red'}}>
          <NewsItem/>
      </div>
    )
  }
}
