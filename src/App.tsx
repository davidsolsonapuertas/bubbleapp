import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { Context } from './context/context';

function App() {
  const context = useContext(Context);

  useEffect(() => {
    if (!context.user) {
      (async () => {
        console.log(context.login());
      })();
    }
    console.log(context.user);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path='/'>{/* <About /> */}</Route>
        <Route path='/user/:id'>{/* <UserDetail /> */}</Route>
      </Switch>
    </Router>
  );
}

export default App;
