import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from'./common/header/index';
import Home from './pages/home';
import Detial from './pages/detial';
import store from './store';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store = {store}>
        <Header />
        <BrowserRouter>
        <div>
           <Route path = '/' exact  component = {Home}></Route>
           <Route path = '/detial' exact  component = {Detial}></Route>
        </div>
          
        </BrowserRouter>
      </Provider>
       
      </div>
    );
  }
}

export default App;
