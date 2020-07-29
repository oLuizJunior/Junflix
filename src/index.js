import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CasdastroVideo from "./pages/cadastro/vídeo";
import CasdastroCategoria from './pages/cadastro/categoria';



const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CasdastroVideo} />
      <Route path="/cadastro/categoria" component={CasdastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
 
  document.getElementById('root')
);

