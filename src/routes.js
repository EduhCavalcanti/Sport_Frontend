import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './routes/Route';

import Main from './components/main/Main';
import Login from './components/login/Login';
import CadastroAtle from './components/form/CadastroAtleta';
import Cadastro from './components/Cadastro/Cadastro';
import Dashboard from './components/dashboard/Dashboard';

export default function src() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cadastromodalidade" component={Cadastro} />
        <Route path="/" exact component={Login} />
        <Route path="/main/:modalidade_id" component={Main} isPrivate />
        <Route path="/cadastroatleta" component={CadastroAtle} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
