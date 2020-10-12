import React from 'react';
import Project from './Project';
import {projects} from '../Data';


function Archive() {
	return (
			<div className="content">
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
					<div className="isotopeGrid p-0 m-0">
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
            </div>
		);
	}
	
	export default Archive;