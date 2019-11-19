import React, { Component } from 'react';
import { Provider } from 'react-redux'
import AppHeader from './layout/NavBar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import store from '../store'

import error from './layout/error'
import table from './user/table'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

class App extends Component {

  render() {

    return (
     
      <Provider store={store}>

        <AppHeader setting={store.getState().settings.AppHeader}/>
        
        <Grid container>
       
          <Typography component="div" style={{ backgroundColor: '#eeeeee', height: '88vh', width: '100%', overflow: 'auto' }} >

            <Router>

              <Switch>
              
                <Route path='/' component={table} />
                                
                <Route component={error} />
              
              </Switch>

            </Router>

          </Typography>
        
        </Grid>

      </Provider>

    );

  }

}

export default App;