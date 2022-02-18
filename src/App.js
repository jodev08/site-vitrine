import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';
import {Service1,Service2,Service3} from './pages/Services';




const App = () => {
  return(
  
  <Switch>
    <Route exact path="/" component={Accueil} />
    <Route exact path="/services1" component={Service1} />
    <Route exact path="/services2" component={Service2} />
    <Route exact path="/services3" component={Service3} />
   
   
    <Route exact path="/apropos" component={Apropos} />
    <Route exact path="/contact" component={Contact} />
    
    
    <Redirect to="/" />

  </Switch>
  );

};
 
export default App;