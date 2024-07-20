import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import './NewsItems.css';

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "business",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  state = {
    articles: [],
    loading: false,
    page: 1,
    totalResults: 0,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async componentDidMount() {
    document.title = `newsApp - ${this.capitalizeFirstLetter(this.props.category)}`;
    this.fetchNews();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.category !== this.props.category) {
      document.title = `newsApp - ${this.capitalizeFirstLetter(this.props.category)}`;
      this.setState({ page: 1 }, this.fetchNews);
    }
  }

  fetchNews = async () => {
    const { country, pageSize, category } = this.props;
    const { page } = this.state;
    const url = `https://inshortsapi.vercel.app/news?category=${category}`;

    this.setState({ loading: true });
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      articles: data.data,
      totalResults: data.totalResults || data.data.length,
      loading: false,
    });
  };

  handlePrevButton = () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.fetchNews();
      window.scrollTo(0, 0);
    });
  };

  handleNextButton = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.fetchNews();
      window.scrollTo(0, 0);
    });
  };

  render() {
    const { loading, articles, page, totalResults } = this.state;
    const { category } = this.props;

    return (
      <div className="container" style={{ marginTop: '75px' }}>
        <div className="rounded mx-auto d-block">
          {loading && <Spinner />}
        </div>

        <div className="row">
          {articles.map((article) => (
            <div className="col-md-4 my-2" key={article.url}>
              <NewsItems
                title={article.title}
                description={article.content}
                newsUrl={article.url}
                imgUrl={article.imageUrl}
                date={article.date}
                author={article.author}
              />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between my-3">
          <button
            type="button"
            disabled={page <= 1}
            onClick={this.handlePrevButton}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={page + 1 > Math.ceil(totalResults / this.props.pageSize)}
            onClick={this.handleNextButton}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
