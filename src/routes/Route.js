import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux'

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const isAutentic = useSelector(state => state.auth.signed)

  if (!isAutentic && isPrivate) {
    return <Redirect to="/" />
  }
  if (isAutentic && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  return (<Route
    {...rest}
    component={Component}
  />)
};