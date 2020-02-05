import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './pages/404';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PokemonNewContainer from './components/PokemonNewContainer'
import dotnev from 'dotenv';

dotnev.config();

const menus = [
  '/home',
  '/add',
  '/update',
  '/delete',
];

const App: React.FC = () => {
  return (
    <>
      <Navbar routes={menus} />
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/add" component={PokemonNewContainer} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
    
  );
}

export default App;
