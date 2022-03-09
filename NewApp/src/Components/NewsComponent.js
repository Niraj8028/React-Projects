import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsComponent extends Component {
  articles=[
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Brett Forrest",
      "title": "Russia Pummels Ukrainian Civilian Targets Ahead of Talks - The Wall Street Journal",
      "description": "Russian attacks face fierce Ukrainian resistance, as cease-fire talks are set to resume",
      "url": "https://www.wsj.com/articles/russia-pummels-ukrainian-civilian-targets-ahead-of-talks-11646645852",
      "urlToImage": "https://images.wsj.net/im-499318/social",
      "publishedAt": "2022-03-07T12:26:00Z",
      "content": "LVIV, UkraineRussia pursued a pressure campaign in its invasion of Ukraine with nighttime strikes on civilian targets as the war entered its 12th day, while Kyivs military held fast along several fro… [+326 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Sam Meredith, Chloe Taylor, Ted Kemp, Abigail Ng",
      "title": "Ukraine says Moscow seeking to 'manipulate' cease-fire agreement; oil prices soar to 13-year highs - CNBC",
      "description": "Ukraine says Moscow is seeking to manipulate its cease-fire arrangement by only allowing Ukrainian civilians to evacuate to Russia and Belarus.",
      "url": "https://www.cnbc.com/2022/03/07/possible-russian-energy-ban-sends-oil-soaring-poland-us-in-jet-talks.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107026034-1646634891584-gettyimages-1238974618-AFP_324K9AR.jpeg?v=1646634696",
      "publishedAt": "2022-03-07T12:11:00Z",
      "content": "Moscow is seeking to \"manipulate\" its cease-fire arrangement by only allowing Ukrainian civilians to evacuate to Russia and Belarus, a Ukrainian official has said.\r\nSpeaking at a press briefing in Ky… [+1963 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Lauren Thomas",
      "title": "Bed Bath & Beyond shares surge 65% after GameStop chairman reveals big stake, pushes turnaround - CNBC",
      "description": "Bed Bath & Beyond surged after GameStop Chairman Ryan Cohen revealed he had a nearly 10% stake in the retailer, through his investment company RC Ventures.",
      "url": "https://www.cnbc.com/2022/03/07/bed-bath-beyond-shares-surge-after-gamestop-chairman-reveals-big-stake.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106973593-1636570042341-gettyimages-166230604-74127580.jpeg?v=1636732646",
      "publishedAt": "2022-03-07T12:00:05Z",
      "content": "Bed Bath &amp; Beyond surged more than 65% in premarket trading Monday after GameStop Chairman Ryan Cohen revealed he had a nearly 10% stake in the retailer, through his investment company RC Venture… [+2229 chars]"
    }]
  constructor(){
    super();
    this.state={
      articles:this.articles,
      loading:'False'
      };
    }
  render() {
    
    return (
      <div className='container my-3'>

        <h2>NewsMonkey- Top Headlines</h2>
        <div className='row' >
        {this.state.articles.map((element)=>{
          
          return<div className='col-md-4' key={element.url}>
            <NewsItem tittle={element.title.slice(0,45)+"..."} description={element.description.slice(0,90)} url={element.urlToImage} newsUrl={element.url}/>
            
          </div>
          
        })}
        
          
          
          
        </div>

      </div>
    )
  }
}