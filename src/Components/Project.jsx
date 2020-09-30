import React from 'react';
import classnames from 'classnames';

function Project(props) {
	return (
		<div className={classnames("col-lg-4 col-md-6 px-0 element-item ", props.categories)} data-category="post-transition">
			<div className="collapse-heading">
				<h5 className="heading subsection-heading">
					<button type="button" className="btn btn-link" data-toggle="collapse" data-target={`#${props.id}`}>
						<i className="fa fa-plus "></i>&nbsp;&nbsp;{props.title}
					</button>	
				</h5>
			</div>
			<div id={props.id} className="collapse">
				<p className="main-content">{props.content}&nbsp;<a href={props.url}><i className="fa fa-link"></i></a></p>
			</div>
			{props.tags.map(tag => <span className="tag">{tag}</span>)}
		</div>
	);
}
	
export default Project;