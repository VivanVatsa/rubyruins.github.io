import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Project from './Components/Project';
import Skill from './Components/Skill'
import Internship from './Components/Internship';
import Organization from './Components/Organization'
import Certificate from './Components/Certificate';
import NotFound from "./Components/NotFound"
import {projects, languages, machineLearningSkills, webDevelopmentSkills, tools, internships, organizations, certifications} from './Data';


const App = () => (
	<BrowserRouter basename="/rubyruins.github.io">
		<div className="container">
		<Switch>
			<Route exact path="/" component={Navbar} />
			{/* <Route path="/about" render={() => <About title="About" />} /> */}
			<Route exact path="/footer" component={Footer} />
			{/* <Route path="/teachers/:topic/:name" component={Featured} /> */}
			{/* <Route path="/courses" component={Courses} /> */}
			<Route component={NotFound} />
		</Switch>
		</div>
	</BrowserRouter>
	);
	
	export default App;