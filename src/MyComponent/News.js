import React, { Component } from 'react'
import NewsItem from './NewsItem';
import articles from './sampleData';

export default class News extends Component {
    
    constructor(){
        super();
        this.state = {
            article : articles,
            loading:true,
            page:1,
            element:articles.length
        }
        
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2c330d6d024146d68dd6b5cc8d427224`
        let data = await (await fetch(url)).json();
        this.setState({totalResult:data.totalResults})
        this.setState({article:data.articles})   
    }

    onNextClick = async (decision)=>{
        let url='';
        if(this.state.page===1){
            this.setState({element:0});
        }
        switch (decision) {
            case 'next':
                url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2c330d6d024146d68dd6b5cc8d427224&page=${this.state.page+1}`;
                this.setState({page:this.state.page+1,
                                element:this.state.element+this.state.article.length                
                })
                break;
        
            default:
                url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2c330d6d024146d68dd6b5cc8d427224&page=${this.state.page-1}`;
                this.setState({page:this.state.page-1,
                    element:this.state.element-this.state.article.length})
                break;
        }
        let data = await (await fetch(url)).json();
        this.setState({article:data.articles})
 
    }


    render() {

    return (
        <>
          <h1>Top Headlines</h1>

      <div className='container my-3'>
          <div className="row">
              {this.state.article.map((element)=>{
                  
                  return <div className="col-md-3" key={element.url}>        
                    <NewsItem ImageURL={element.urlToImage} title={element.title} description={element.description} newsUrl={element.url}/>
                    
                </div>
                  
              })}
              
            <div className="d-flex justify-content-evenly">
                <button className='btn btn-primary' disabled={this.state.page===1?true:false} onClick={()=>{this.onNextClick('prev')}}>Previous</button>

                <button className='btn btn-primary' disabled={this.state.element>=this.state.totalResult?true:false} onClick={()=>{this.onNextClick('next')}} >Next</button>
            </div>
          </div>
      </div>
        </>
    )
  }
}
