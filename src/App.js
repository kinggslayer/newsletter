import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News'; // Corrected import statement
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pagesize = 10;
  apikey="5e73113c36a34ad18c1506836fa5b47a"
  state = {
    progress:0,
  }
  setprogress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
          <Routes>
            <Route exact path="/" element={<News setprogress={this.setprogress} apikey={this.apikey} key='general' pagesize={this.pagesize} country='in' category='general' />} />
            <Route exact path="/business" element={<News setprogress={this.setprogress} apikey={this.apikey} key='business' pagesize={this.pagesize} country='in' category='business' />} />
            <Route exact path="/technology" element={<News setprogress={this.setprogress} apikey={this.apikey} key='technology' pagesize={this.pagesize} country='in' category='technology' />} />
            <Route exact path="/sports" element={<News setprogress={this.setprogress} apikey={this.apikey} key='sports' pagesize={this.pagesize} country='in' category='sports' />} />
            <Route exact path="/science" element={<News setprogress={this.setprogress} apikey={this.apikey} key='science' pagesize={this.pagesize} country='in' category='science' />} />
            <Route exact path="/health" element={<News setprogress={this.setprogress} apikey={this.apikey} key='health' pagesize={this.pagesize} country='in' category='health' />} />
            <Route exact path="/general" element={<News setprogress={this.setprogress} apikey={this.apikey} key='general' pagesize={this.pagesize} country='in' category='general' />} />
            <Route exact path="/entertainment" element={<News setprogress={this.setprogress} apikey={this.apikey} key='entertainment' pagesize={this.pagesize} country='in' category='entertainment' />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
