import React, { Component } from 'react';
import './App.css';
import Page from './containers/page'
import Loading from './components/loading'
import $ from 'jquery'

class App extends Component {
  constructor(){
    super()
    this.state = {
      loading: true
    }
  }
  doneLoading(){
    this.setState({
      loading: false
    })
  }
  fade(){
    $('.App').toggleClass('fade-out')
  }
  componentDidMount(){
    setTimeout(this.fade, 2300);
    setTimeout(this.doneLoading.bind(this), 2900);
  }
  componentDidUpdate() {
    this.fade()
  }

  render() {
    var page = <Page />
    if (this.state.loading){
      page = <Loading />
    }
    return (
      <div className="App full-height">
        {page}
      </div>
    );
  }
}

export default App;
