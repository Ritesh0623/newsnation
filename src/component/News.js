import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country : "in",
        pageSize : 6,
        category : 'general'
    }
    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }
    constructor(){
        super();
        console.log('constructor');
        this.state = {
            articles : this.articles,
            loading  : false,
            page: 1
        }
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c85f4590845c466eadb4cbb4b8771e2f&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedDate = await data.json();
        this.setState({
            articles : parsedDate.articles,
            totalResults : parsedDate.totalResults,
            loading : false
        })
    }

    handleNextBtn = async () => {
        console.log('N');
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=c85f4590845c466eadb4cbb4b8771e2f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading : true});
            let data = await fetch(url);
            let parsedDate = await data.json();
            this.setState({
                page : this.state.page + 1,
                articles : parsedDate.articles,
                loading : false
            });
        }
    }
    handlePrevBtn = async () => {
        console.log('P');
        let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=c85f4590845c466eadb4cbb4b8771e2f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedDate = await data.json();
        this.setState({
            page : this.state.page - 1,
            articles : parsedDate.articles,
        })
    }
    render() {
        return (
            <>
                <div className='container my-3'>
                    <h3>News Nation - Top Headlines</h3>
                    {this.state.loading && <Spinner />}
                    <div className='row'>
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className='col-md-4 mt-3' key={element.url}>
                                        <NewsItem title={element.title?element.title.slice(0, 35):""} description={element.description?element.description.slice(0, 60):""} imageUrl={element.urlToImage} url={element.url} />
                                    </div>
                        })}
                    </div>
                </div>
                    <div className='container d-flex justify-content-between'>
                        <button type='button' disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePrevBtn}>&larr; Previous</button>
                        <button type='button' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextBtn}>Next &rarr;</button>
                    </div>
            </>
        )
    }
}

export default News
