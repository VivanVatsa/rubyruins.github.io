import React from 'react';

function Footer() {
	return (
			<footer className="footer footer-copyright text-center pt-4 pb-3">
				<span className="mx-0 px-2 nav-link" style={{display: 'inline'}} role="img" aria-label="hand">👋</span>
				<span className="mx-0 px-2 nav-link" style={{display: 'inline'}}>RESUME</span>
				<span className="mx-0 px-2 nav-link" style={{display: 'inline'}}>EMAIL</span>
				<span className="mx-0 px-2 nav-link" style={{display: 'inline'}}>GITHUB</span>
				<span className="mx-0 px-2 nav-link" style={{display: 'inline'}}>LINKEDIN</span>
				<br></br>
				<p className="custom-tag">Made with <i className="fa fa-heart"></i> and <i className="fab fa-react"></i> © 2020 rubyruins.</p>
			</footer>
	);
}
	
export default Footer;