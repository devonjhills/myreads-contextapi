import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SearchResults from "./components/SearchResults";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import BookContextProvider from "./context/BookContext";
import SearchContextProvider from "./context/SearchContext";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <BookContextProvider>
            <Homepage />
          </BookContextProvider>
        </Route>
        <Route path="/search">
          <BookContextProvider>
            <SearchContextProvider>
              <SearchResults />
            </SearchContextProvider>
          </BookContextProvider>
        </Route>
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

export default App;
