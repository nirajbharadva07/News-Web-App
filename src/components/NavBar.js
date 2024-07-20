import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: true,
      lastScrollY: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      this.setState({ showNavbar: false });
    } else {
      this.setState({ showNavbar: true });
    }

    this.setState({ lastScrollY: currentScrollY });
  };

  render() {
    const { showNavbar } = this.state;
    const navbarStyle = {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'top 0.3s',
      top: showNavbar ? '0' : '-60px',
    };

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={navbarStyle}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="usernews.html">Add your News</a>
                </li>
                

              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
