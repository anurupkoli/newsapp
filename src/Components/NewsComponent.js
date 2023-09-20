import React, { Component } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsComponent extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    const apiKey = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=56a7101a40e24c4297be98f6fa4539e9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(30)
    this.setState({ loading: true });
    let data = await fetch(apiKey);
    this.props.setProgress(50)
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews();
  }

  capitalized = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  fetchMoreData = async () => {
    const apiKey = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apikey=56a7101a40e24c4297be98f6fa4539e9&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(apiKey);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: this.state.page + 1,
    });
  };

  render() {
    return (
      <>
        <h1
          className="text-center mb-4"
          id="head"
        >{`Todays's Top Headlines(${this.capitalized(
          this.props.category ? this.props.category : "general"
        )})`}</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((ele) => {
                return (
                  <div key={ele.url} className="col-md-4 mb-4">
                    <NewItem
                      title={ele.title ? ele.title : ""}
                      description={ele.description ? ele.description : ""}
                      imgUrl={
                        ele.urlToImage
                          ? ele.urlToImage
                          : "https://images.food52.com/DODECUusj9BzJ87Un6x3NrhXI3s=/fit-in/1200x1200/da172357-394b-4662-9de8-439b24537cf5--Untitled_design_2023-09-01T103900.298.jpg"
                      }
                      newsUrl={ele.url}
                      author={ele.author ? ele.author : "Unknown"}
                      publishedAt={ele.publishedAt}
                      source={ele.source.name ? ele.source.name : "Unknown"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
