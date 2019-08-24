import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import GqlTool from "../pages/GqlTool";
import { Router } from "@reach/router";
import "./custom.scss";
import HomeNav from "../nav/HomeNav";
import { Helmet } from "react-helmet";


const App: React.FC = () => {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Litvan collective studio</title>
        <meta name="description" content="Litvan collective studio"/>
        <meta name="keywords" content="HTML,CSS,XML,JavaScript"/>
        <meta name="author" content="Ivan Litovchenko"/>
      </Helmet>
      <HomeNav/>
      <Router>
        <GqlTool path="/"/>
      </Router>
    </div>
  );
};

export default App;
