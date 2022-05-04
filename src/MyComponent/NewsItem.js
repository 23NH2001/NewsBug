import React, { Component } from 'react'

export class NewsItem extends Component {
    
render() {
      let {ImageURL,title,description,newsUrl} = this.props
    return (
      <>
      <div className="card my-3" style={{width: "18rem"}}>
  <img src={(ImageURL===null||ImageURL.length===0)?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTxOvNeaW13lBcHSvee9SHI2_re9JGmcKalPfpJU3fjQ&s':ImageURL} className="card-img-top" alt="Kakashi" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Read More</a>
  </div>
</div>
      </>
    )
  }
}

export default NewsItem