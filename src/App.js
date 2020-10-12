import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Archive from './Components/Archive';
import NotFound from "./Components/NotFound"


const App = () => (
	<BrowserRouter basename="/rubyruins.github.io">
		<Navbar />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/archive" component={Archive} />
			<Route component={NotFound} />
		</Switch>
		<Footer />
	</BrowserRouter>
	);
	
	export default App;