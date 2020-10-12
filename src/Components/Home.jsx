import React from 'react';
import Project from './Project';
import Skill from './Skill'
import Certificate from './Certificate';
import Experience from './Experience';
import {featured, languages, machineLearningSkills, webDevelopmentSkills, tools, experience, certifications} from '../Data';


function Home() {
	return (
			<div className="content">
				<div className="section pt-3" id="soumya">
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
				<div className="section pt-3" id="featured">
					<h2 className="heading section-heading">Featured <strong className="color-one-only">projects</strong></h2>
					<p className="main-content">View all my work in the <a href="/archive">archive.</a></p>
						<div className="row">
						{featured.map(project => (
							<Project
								title={project.title}
								content={project.content}
								id={project.id}
								github={project.github}
								url={project.url}
								tags={project.tags}
								categories={project.categories}
							/>
						))}
					</div>
				</div>
				<div className="section pt-3" id="experience">
					<h2 className="heading section-heading">Work <strong className="color-one-only">experience</strong></h2>
					{/* <h5 className="heading subsection-heading link color-two-only">Internships</h5> */}
					{experience.map(item => (
						<Experience
							title={item.title}
							date={item.date}
							content={item.content}
							id={item.id}
						/>
					))}
					{/* <h5 className="heading subsection-heading link color-two-only">Certifications</h5>
					{certifications.map(certification => (
						<Certificate
							title={certification.title}
							courses={certification.courses}
							id={certification.id}
						/>
					))} */}
				</div>
				<div className="section pt-3" id="skills">
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
				<div className="section pt-3" id="about">
					<h2 className="heading section-heading">Who I <strong className="color-one-only">am</strong></h2>
					<p className="main-content">I'm a lover of numbers. Here are some stats for you.</p>
					{/* <div className="row">
						<div className="col-lg-8 waka">
							<figure><embed src="https://wakatime.com/share/@73a28611-63aa-430b-ac34-67ff9da9d32f/f57f3bc7-3c85-4686-a637-7c39d74c3f3c.svg"></embed></figure>
						</div>
					</div> */}
					{/* <div className="row">
						<div className="col-lg-12 p-5 pl-0 github">
							<img src="https://ghchart.rshah.org/9E2AD0/rubyruins" alt="Github"></img>
						</div>
					</div> */}
					<div className="row">
						<div className="col-lg-6 col-md-6">			
							<p className="main-content">In my free time, I love to read Greek mythology and listen to rock music. I'm a featured writer on <a href="https://github.com/rubyruins" className="link color-one">Wattpad</a>, where I write high fantasy novels for fun. You can find my work <a href="https://github.com/rubyruins" className="link color-one">@rubyruins.</a></p>
						</div>
						<div className="col-lg-6 col-md-6">
							<p className="main-content">
								I'm actively looking for internships and opportunities in machine learning + web dev. Do feel free to get in touch! The fastest way to contact me is by email at <br></br> <a href="https://github.com/rubyruins" className="link color-one">soumyaparekh.me@gmail.com. </a> 
								<br></br><br></br>
								<i className="fab fa-github fa-2x mr-4"></i>
								<i className="fab fa-linkedin fa-2x mr-4"></i>
								<i className="fab fa-instagram fa-2x mr-4"></i>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
	export default Home;