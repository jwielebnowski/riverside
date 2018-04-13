import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './components/welcome/mainPage';

export default (
	<Switch>
		<Route exact path="/" component={WelcomePage} />
	</Switch>
);
