import React from 'react';

function showLinks(pg) {
	if (pg === '/') {
		return (
			<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
				<li className="nav-item">
					<a className="nav-link" href="#featured">Projects</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#experience">Experience</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#skills">Skills</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#about">About</a>
				</li>
			</ul>
		)
	} else if (pg === '/archive') {
		
	}
}

function Navbar() {
	var page = window.location.pathname
	return (
			<nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<a className="navbar-brand pl-4" href="/"><span role="img" aria-label="home"><strong>Soumya Parekh</strong></span></a>
					{showLinks(page)}
				</div>
				<li className="navbar-brand ml-auto toggler"><i className="far fa-sun fa-3x"></i></li>
			</nav>
	);
}
	
export default Navbar;