import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import teste from '../store/modules/auth/reduce';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = false//Teste padrão
  console.tron.log(signed)

  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  return (<Route
    {...rest}
    component={Component}
  />)
};