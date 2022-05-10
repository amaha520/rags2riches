import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Render } from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Coinpage from "./Pages/Coinpage";
import Homepage from "./Pages/Homepage";

function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    }
  }));

  const classes = useStyles()


class App extends React.Component {
  render() {
    return (
      // <BrowserRouter>
        <div className={classes.App}>
          <Header/>
          <Route path= '/' component={<Homepage />} exact/>
          <Route path= '/coins/:id' component={<Coinpage />}/>
        </div>
      // </BrowserRouter>
    );
  }
  }
}
  
render(<App/>, document.getElementById('root'));

export default App;
