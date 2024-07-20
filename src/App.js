import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Footer from "./components/Footer";
import NewsForm from './components/NewsForm';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News key="general" category="business" />} />
          <Route exact path="/business" element={<News key="business" category="business" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
          <Route exact path="/science" element={<News key="science" category="science" />} />
          <Route exact path="/sports" element={<News key="sports" category="sports" />} />
          <Route exact path="/technology" element={<News key="technology" category="technology" />} />
          <Route exact path="/submit" element={<NewsForm />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
