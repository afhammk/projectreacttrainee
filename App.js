import React from 'react';
import Routes from './components/routes/Routes'
import { Provider } from 'react-redux'
import { useStore } from './components/redux/store'
import './globle.scss'
import ThemeComponent from './components/common/theme'
import {
  BrowserRouter as Router,
  
} from "react-router-dom";



export default function App(props) {
  const store = useStore()  

  return (
    <Router>
    <Provider store={store}>
      <ThemeComponent />
      <Routes />
    </Provider>
    </Router>
  );
}