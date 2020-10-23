import React from 'react';
import classnames from 'classnames';
import Project from './Project';
import {projects} from '../Data';


function Archive() {
	return (
			<div className="content">
			<div className="section py-5 page-loader">
				<div class="loader">
					<div class="binding"></div>
					<div class="pad">
						<div class="line line1"></div>
						<div class="line line2"></div>
						<div class="line line3"></div>
					</div>
					<div class="text">
						<p class="main-content">Compiling...</p>
					</div>
				</div>
			</div>
				<div className="section" id="projects">
					<h2 className="heading section-heading">Everything <strong className="color-one-only">else</strong></h2>
					<p className="main-content">A comprehensive list of all my work.</p>
					<div className="button-group filters-button-group">
						<button className="filter-buttons button" data-filter=".ml">Machine Learning</button>
						<button className="filter-buttons button" data-filter=".fulldev">Full Stack</button>
						<button className="filter-buttons button" data-filter=".misc">Misc.</button>
						<button className="filter-buttons filter-buttons-click button is-checked" data-filter="*">All</button>
					</div>
					<div className="isotopeGrid mt-3">
						<div className="row">
							{projects.map(project => (
								<div className={classnames("col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 pl-0 element-item", project.categories)} data-category="post-transition">
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
				</div>
            </div>
		);
	}
	
	export default Archive;