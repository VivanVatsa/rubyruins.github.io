import React from 'react';

function Navbar() {
	return (
			<nav className="navbar navbar-expand-lg navbar-light fixed-top">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<a className="navbar-brand" href="#soumya"><span role="img" aria-label="home">~/home</span></a>
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item">
							<a className="nav-link color-one-only" href="#projects">~/projects</a>
						</li>
						<li className="nav-item">
							<a className="nav-link color-one-only" href="#skills">~/skills</a>
						</li>
						<li className="nav-item">
							<a className="nav-link color-one-only" href="#experience">~/experience</a>
						</li>
						<li className="nav-item">
							<a className="nav-link color-one-only" href="#about">~/about</a>
						</li>
					</ul>
				</div>
				<li className="navbar-brand ml-auto toggler"><i className="far fa-sun"></i></li>
			</nav>
	);
}
	
export default Navbar;