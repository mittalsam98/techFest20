import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import BackDrop from './components/Backdrop/BackDrop';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Contact from './components/contact/Contact';
import Gallary from './components/Gallary/Gallary';
import About from './components/About/About';
import Sponsors from './components/Sponsor/Sponsors';
import Footer from './components/Footer/Footer'

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };




  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />
    }
    return (
      <div className="App">
        <Router>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Route exact path='/' component={Home} />
        <Route exact path='/sponsors' component={Sponsors} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/gallary' component={Gallary} />
        <Route exact path='/about' component={About} />
        <Footer/>
        </Router>
      </div>

    );
  }
}

export default App;
