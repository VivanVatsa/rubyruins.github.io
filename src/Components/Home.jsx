import React from 'react';
import Preloader from './Preloader';
import Project from './Project';
import Skill from './Skill'
import Certificate from './Certificate';
import Experience from './Experience';
import Organization from './Organization';
import {featured, skills, experience, organizations, certifications} from '../Data';


function Home() {
	return (
			<div className="content">
				<div className="section py-5 page-loader">
					<Preloader />
				</div>
				<div className="section py-5" id="soumya">
					<br></br>
					<h1 className="heading top-heading">Hi, I'm Soumya.</h1>
					<h4 className="heading subsection-heading">Also known as <strong className="color-one-only">@rubyruins</strong> on the internet.</h4>
					<br></br>
					<p className="main-content">
						<span role="img" aria-label="laptop">💻&nbsp;</span><strong className="heading subsection-heading">Who I am. </strong>ML practitioner + passionate software developer + third year CS undergrad.
						<br></br><br className="hide-space"></br>
						<span role="img" aria-label="contact">💬&nbsp;</span><strong className="heading subsection-heading">Where I am. </strong>You can find me on <a href="https://github.com/rubyruins" className="link color-one" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://www.linkedin.com/in/soumya-parekh/" className="link color-one" target="_blank" rel="noreferrer">LinkedIn.</a> Shoot me a quick <a href="mailto:soumyaparekh.me@gmail.com" className="link color-one" target="_blank" rel="noreferrer">email</a> or check out my resume <a href="https://drive.google.com/file/d/1g_aiKJ7qXKgrZXtPVI6ggUk5mkvbw4A4/view?usp=sharing" className="link color-one" target="_blank" rel="noreferrer">here.</a>
						<br></br><br className="hide-space"></br>
						<span role="img" aria-label="laptop">🎯&nbsp;</span><strong className="heading subsection-heading">What I do. </strong>Python, neural networks and web scraping. I'm deeply interested in natural language processing and am currently expanding my knowledge of sequence models. 
						<br></br><br className="hide-space"></br>
						<span role="img" aria-label="star">🌟&nbsp;</span><strong className="heading subsection-heading">What I love. </strong>Finding new, innovative solutions to everyday problems with a passion for learning new tech stacks. 
						Always exploring new ways to unite my love for coding + <span id="typed"></span>
					</p>
					<br></br> 
				</div>
				<div className="section py-5" id="featured">
					<h2 className="heading section-heading">Featured <strong className="color-one-only">projects</strong></h2>
					<p className="main-content">View all my work in the <a href="/archive" className="link color-one">archive.</a></p>
						<div className="row">
						{featured.map(project => (
							<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 pl-0">
								<Project
									title={project.title}
									content={project.content}
									id={project.id}
									github={project.github}
									url={project.url}
									tags={project.tags}
									categories={project.categories}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="section py-5" id="experience">
					<h2 className="heading section-heading">Professional <strong className="color-one-only">experience</strong></h2>
					{/* <h5 className="heading subsection-heading link color-two-only">Internships</h5> */}
					{experience.map(item => (
						<Experience
							title={item.title}
							date={item.date}
							content={item.content}
							tech={item.tech}
							url={item.url}
							github={item.github}
							id={item.id}
						/>
					))}
				</div>
				<div className="section py-5" id="skills">
					<h2 className="heading section-heading">What I <strong className="color-one-only">know</strong></h2>
					<p className="main-content">Although, Socrates says that the only true wisdom is in knowing you know nothing.</p>
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<h5 className="heading subsection-heading">Languages</h5>
							{skills[0].map(skill => (
							<Skill
								title={skill.title}
								proficiency={skill.proficiency}
							/>
							))}
						</div>
						<div className="col-lg-3 col-md-6">
							<h5 className="heading subsection-heading">ML / DL</h5>
							{skills[1].map(skill => (
							<Skill
								title={skill.title}
								proficiency={skill.proficiency}
							/>
							))}
						</div>
						<div className="col-lg-3 col-md-6">
							<h5 className="heading subsection-heading">Frameworks</h5>
							{skills[2].map(skill => (
							<Skill
								title={skill.title}
								proficiency={skill.proficiency}
							/>
							))}
						</div>
						<div className="col-lg-3 col-md-6">
							<h5 className="heading subsection-heading">Tools</h5>
							{skills[3].map(skill => (
							<Skill
								title={skill.title}
								proficiency={skill.proficiency}
							/>
							))}
						</div>
					</div>
					<h5 className="heading subsection-heading">Certifications</h5>
					{certifications.map(certification => (
						<Certificate
							title={certification.title}
							courses={certification.courses}
							id={certification.id}
						/>
					))}
				</div>
				<div className="section py-5" id="organizations">
					<h2 className="heading section-heading">Other <strong className="color-one-only">activities</strong></h2>
					{/* <h5 className="heading subsection-heading link color-two-only">Internships</h5> */}
					{organizations.map(item => (
						<Organization
							title={item.title}
							date={item.date}
							content={item.content}
							url={item.url}
							id={item.id}
						/>
					))}
				</div>			
				<div className="section py-5" id="about">
					<h2 className="heading section-heading">Who I <strong className="color-one-only">am</strong></h2>
					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-10 px-0" id="chart-2">			
							<canvas id="languagesChart"></canvas>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 col-md-6">			
							<p className="main-content">In my free time, I love to contribute to open source and work on my side projects. I'm also a featured writer on Wattpad, where my high fantasy novels have collectively amassed over half a million reads. You can find my work <a href="https://www.wattpad.com/user/rubyruins" className="link color-one">@rubyruins.</a></p>
						</div>
						<div className="col-lg-6 col-md-6">
							<p className="main-content">
								I'm actively looking for internships and opportunities in the field of machine learning and deep learning. Do feel free to get in touch! The fastest way to contact me is by email at <br></br> <a href="mailto:soumyaparekh.me@gmail.com" className="link color-one">soumyaparekh.me@gmail.com. </a> 
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
	export default Home;