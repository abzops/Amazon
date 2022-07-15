import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Amazon.com</title>
        <link
          rel="icon"
          type="image/png"
          href="https://icons.duckduckgo.com/ip3/www.amazon.com.ico"
        />
      </Helmet>
      <Header />
      <Home />
    </div>
  );
}

export default App;
