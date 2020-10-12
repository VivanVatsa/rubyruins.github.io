import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Project from './Components/Project';
import Skill from './Components/Skill'
import Internship from './Components/Internship';
import Organization from './Components/Organization'
import Certificate from './Components/Certificate';
import {projects, languages, machineLearningSkills, webDevelopmentSkills, tools, internships, organizations, certifications} from './Data';


function App() {
	return (
		<div className="App">
		<Navbar />
			<div className="content">
				<div className="section" id="soumya">
					<br></br>
					<h1 className="heading top-heading">Hi, I'm Soumya.</h1>
					<h4 className="heading subsection-heading">Also known as <strong className="color-one-only">@rubyruins</strong> on the internet.</h4>
					<br></br>
					<p className="main-content">
						<span role="img" aria-label="laptop">💻&nbsp;</span><strong>Who I am: </strong>ML practitioner + <a href="https://github.com/rubyruins" className="link color-one">open source</a> contributer + third year CS undergrad.
						<br></br><br className="hide-space"></br>
						<span role="img" aria-label="contact">💬&nbsp;</span><strong>Where I am: </strong>You can find me on <a href="https://github.com/rubyruins" className="link color-one">GitHub</a> and <a href="https://github.com/rubyruins" className="link color-one">LinkedIn.</a>Shoot me a quick <a href="https://github.com/rubyruins" className="link color-one">email</a> or download my resume <a href="https://github.com/rubyruins" className="link color-one">here.</a>
						<br></br><br className="hide-space"></br>
						<span role="img" aria-label="star">🌟&nbsp;</span><strong>What I love: </strong>Hackathons, neural networks and web scraping. I'm currently expanding my knowledge of natural language processing and sequence models. Always exploring new ways to unite my love for coding + <span id="typed"></span>.
					</p>
					<br></br> 
				</div>
				<div className="section" id="projects">
					<h2 className="heading section-heading">What I <strong className="color-one-only">made</strong></h2>
					<p className="main-content">Here's what I've been up to.</p>
					<div className="button-group filters-button-group">
						<button className="button is-checked" data-filter=".feature">Featured</button>
						<button className="button" data-filter=".ml">Machine Learning</button>
						<button className="button" data-filter=".fulldev">Full Stack</button>
						<button className="button" data-filter=".misc">Misc.</button>
						<button className="button" data-filter="*">All</button>
					</div>
					<div className="isotopeGrid">
						<div className="row">
						{projects.map(project => (
							<Project
								title={project.title}
								content={project.content}
								id={project.id}
								url={project.url}
								tags={project.tags}
								categories={project.categories}
							/>
							))}
						</div>
					</div>
				</div>
				<div className="section" id="skills">
					<h2 className="heading section-heading">What I <strong className="color-one-only">know</strong></h2>
					<p className="main-content">Although, Socrates says that <em>the only true wisdom is in knowing you know nothing.</em><span role="img" aria-label="books">📚</span></p>
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<h5 className="heading subsection-heading link color-two-only">Languages</h5>
							{languages.map(language => (
							<Skill
								title={language.title}
								skill={language.skill}
							/>
							))}
						</div>
						<div className="col-lg-3 col-md-6">
							<h5 className="heading subsection-heading link color-two-only">ML</h5>
							{machineLearningSkills.map(machineLearningSkill => (
							<Skill
								title={machineLearningSkill.title}
								skill={machineLearningSkill.skill}
							/>
							))}
						</div>
						<div className="col-lg-3 col-md-6">
							<h5 className="heading subsection-heading link color-two-only">Web Dev</h5>
							{webDevelopmentSkills.map(webDevelopmentSkill => (
							<Skill
								title={webDevelopmentSkill.title}
								skill={webDevelopmentSkill.skill}
							/>
							))}
						</div>
						<div className="col-lg-3 col-md-6">
							<h5 className="heading subsection-heading link color-two-only">Tools</h5>
							{tools.map(tool => (
							<Skill
								title={tool.title}
								skill={tool.skill}
							/>
							))}
						</div>
					</div>
				</div>
				<div className="section" id="experience">
					<h2 className="heading section-heading">What I <strong className="color-one-only">did</strong></h2>
					
					<h5 className="heading subsection-heading link color-two-only">Internships</h5>
					
					{internships.map(internship => (
						<Internship
							title={internship.title}
							content={internship.content}
							id={internship.id}
						/>
					))}
					
					<h5 className="heading subsection-heading link color-two-only">Organizations</h5>
					
					{organizations.map(organization => (
						<Organization
							title={organization.title}
							content={organization.content}
							id={organization.id}
						/>
					))}

					<h5 className="heading subsection-heading link color-two-only">Certifications</h5>
					
					{certifications.map(certification => (
						<Certificate
							title={certification.title}
							courses={certification.courses}
							id={certification.id}
						/>
					))}
					
				</div>
				<div className="section" id="about">
					<h2 className="heading section-heading">Who I <strong className="color-one-only">am</strong></h2>
					<p className="main-content">I'm a lover of numbers. Here are some stats for you.</p>
					<div className="row">
						<div className="col-lg-8 waka">
							<figure><embed src="https://wakatime.com/share/@73a28611-63aa-430b-ac34-67ff9da9d32f/f57f3bc7-3c85-4686-a637-7c39d74c3f3c.svg"></embed></figure>
						</div>
					</div>
					<div class="row">
						<div className="col-lg-12 p-5 pl-0 github">
							<img src="https://ghchart.rshah.org/9E2AD0/rubyruins" alt="Github"></img>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 col-md-6">			
							<p className="main-content">In my free time, I love to read Greek mythology and listen to rock music. I'm a featured writer on <a href="https://github.com/rubyruins" className="link color-one">Wattpad</a>, where I write high fantasy novels for fun. You can find my work <a href="https://github.com/rubyruins" className="link color-one">@rubyruins.</a></p>
						</div>
						<div className="col-lg-6 col-md-6">
							<p className="main-content">
								I'm actively looking for internships and opportunities in machine learning + web dev. Do feel free to get in touch! The fastest way to contact me is by email at <br></br> <a href="https://github.com/rubyruins" className="link color-one">soumya.parekh@somaiya.edu. </a> 
								<br></br><br></br>
								<i className="fab fa-github fa-2x mr-4"></i>
								<i className="fab fa-linkedin fa-2x mr-4"></i>
								<i className="fab fa-instagram fa-2x mr-4"></i>
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
		);
	}
	
	export default App;