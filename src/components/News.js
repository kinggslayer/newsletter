import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
    static defaultProps = {
        country: "in",
        pagesize: 6,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }
    cap=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        console.log("cons")
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalresults: 0,
        }
        document.title=`${this.cap(this.props.category)} - Newsletter`
    }
    async updatenews(){
        this.props.setprogress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        let data = await fetch(url);
        this.props.setprogress(30)
        let parsedData = await data.json();
        this.props.setprogress(70)
        console.log(parsedData);
        this.setState({ articles: parsedData.articles , totalresults:parsedData.totalResults,loading:true})
        this.props.setprogress(100)
    }
    
    async componentDidMount() {
         this.updatenews()
    }
    // nextclick=async ()=> {
    //     this.setState({ page:this.state.page+1, loading:false })
    //     this.updatenews()
    // }
    // prevclick=async ()=> {
    //     this.setState({ page:this.state.page-1, loading:false })
    //     this.updatenews()
    // }
    fetchMoreData =async () => {
        this.setState({page:this.state.page+1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: this.state.articles.concat(parsedData.articles) , totalresults:parsedData.totalResults});
      };
    render() {
        return (
            <div className='container my-3'>
                <h1> NewsLetter - Top {this.cap(this.props.category)} HeadLines</h1>
                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalresults}
          loader={<Spinner/>}
        >
            <div className="container">
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} desc={element.description} img={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                            </div>
                        )
                    }) }
                </div>
                </div>
                </InfiniteScroll>
            </div>
        )
    }
}
