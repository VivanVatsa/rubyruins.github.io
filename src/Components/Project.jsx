import React from 'react';
import classnames from 'classnames';

function Project(props) {
	return (
	<div className={classnames("col-lg-4 col-md-6 pl-0 element-item flip-card ", props.categories)} data-category="post-transition">
		<div className="flip-card-inner">
	  		<div className="flip-card-front">
			  	<h5 className="heading subsection-heading">
			  		{props.title}
				</h5>
				<p className="main-content">{props.content}&nbsp;</p>
	 		</div>
	  		<div className="flip-card-back">
			  	{props.tags.map(tag => <span className="tag">{tag}</span>)}
				<br></br>
				<span class="ml-1 mt-3">Link:</span> <a href={props.url}><i className="fa fa-link"></i></a>
	  		</div>
		</div>
  	</div>
  );
}
	
export default Project;