import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer"
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

class App extends Component {
  render() {
    return (
      <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </Switch>
            <Footer />
        </Router>
    );
  }
}

export default App;