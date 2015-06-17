import React from 'react';
import Router from 'react-router';

let {DefaultRoute, Route, Link, RouteHandler} = Router;

window.React = React;

var About = React.createClass({
	render: function () {
		return <h2>About</h2>;
	}
});

var Index = React.createClass({
	render: function () {
		return <h2>Index</h2>;
	}
});

var App = React.createClass({
	render: function () {
		return (
			<div>
				<header>
					<Link to="/">Index</Link>
					<Link to="/about">About</Link>
				</header>
				<RouteHandler/>
			</div>
		);
	}
});

var routes = (
	<Route handler={App} path="/">
		<DefaultRoute handler={Index}/>
		<Route path="about" handler={About}/>
	</Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
	React.render(<Root/>, document.getElementById('content'));
});
