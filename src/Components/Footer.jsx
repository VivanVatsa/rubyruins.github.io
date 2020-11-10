import React from 'react';

function Footer() {
	return (
			<footer className="footer footer-copyright text-center pt-4 pb-3">
				<span className="mx-0 px-2 nav-link" style={{display: 'inline'}} role="img" aria-label="hand">👋</span>
				<span className="mx-0 px-2 nav-link" style={{display: 'inline'}}><a href="https://drive.google.com/file/d/1g_aiKJ7qXKgrZXtPVI6ggUk5mkvbw4A4/view?usp=sharing" target="_blank" rel="noreferrer">RESUME</a></span>
				<span className="mx-0 px-2 nav-link" style={{display: 'inline'}}><a href="mailto:soumyaparekh.me@gmail.com" target="_blank" rel="noreferrer">EMAIL</a></span>
				<span className="mx-0 px-2 nav-link" style={{display: 'inline'}}><a href="https://github.com/rubyruins" target="_blank" rel="noreferrer">GITHUB</a></span>
				<span className="mx-0 px-2 nav-link" style={{display: 'inline'}}><a href="https://www.linkedin.com/in/soumya-parekh/" target="_blank" rel="noreferrer">LINKEDIN</a></span>
				<br></br>
				<p className="custom-tag">Made with <i className="fa fa-heart"></i> and <i className="fab fa-react"></i> © 2020 rubyruins.</p>
			</footer>
	);
}
	
export default Footer;