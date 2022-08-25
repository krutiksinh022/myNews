import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner'

export class News extends Component {


    constructor(props) {

        super(props)
        console.log("This is news item constructor")
        this.state = {
            articles: [],
            isLoading: false,
            page: 1

        }
        document.title = this.props.category + " News"
    }
    async componentDidMount() {
        this.props.setProgress(10)
        this.setState({ isLoading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d63adb7c6d284268a524b9290c86567a&page=1&pagesize=18`;
        let fetchUrl = await fetch(url)
        this.props.setProgress(70)
        let jsonData = await fetchUrl.json()
        this.props.setProgress(100)
        this.setState({
            articles: jsonData.articles,
            totalResult: this.state.totalResults,
            isLoading: false
        })
    }
    handlePrebutton = async () => {
        this.props.setProgress(10)
        this.setState({ isLoading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d63adb7c6d284268a524b9290c86567a&page=${this.state.page - 1}&pagesize=18`;
        let fetchUrl = await fetch(url)
        this.props.setProgress(50)
        let jsonData = await fetchUrl.json()
        this.props.setProgress(100)
        this.setState({
            articles: jsonData.articles,
            page: this.state.page - 1,
            isLoading: false

        })

    }
    handleNextbutton = async () => {
        this.props.setProgress(10)
        this.setState({ isLoading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d63adb7c6d284268a524b9290c86567a&page=${this.state.page + 1}&pagesize=18`;
        let fetchUrl = await fetch(url)
        this.props.setProgress(70)
        let jsonData = await fetchUrl.json()
        this.props.setProgress(100)
        this.setState({
            articles: jsonData.articles,
            page: this.state.page + 1,
            isLoading: false
        })
    }
    render() {
        return (
            <div>
                <div className="container" >
                    <h2>Today's best News from {this.props.category} </h2>
                    {this.state.isLoading && <Spiner />}


                    <div className="row">
                        {!this.state.isLoading && this.state.articles.map((element) => {
                            //console.log(element)

                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : " "} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt} />
                            </div>
                        })}



                    </div>
                    <div className="container d-flex justify-content-between pt-5 pb-5">
                        <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrebutton}>Previous</button>
                        <button type="button" class="btn btn-dark" onClick={this.handleNextbutton}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
