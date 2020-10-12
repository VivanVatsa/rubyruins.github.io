import React from 'react';
import classnames from 'classnames';

function Project(props) {
	return (
	<div className={classnames("col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 pl-0 element-item", props.categories)} data-category="post-transition">
		<div className="custom-card">
	  		<div>
			  	<h5 className="heading subsection-heading">
			  		{props.title}
				</h5>
				<p className="main-content">{props.content}&nbsp;</p>
	 		</div>
	  		<div>
			  	{props.tags.map(tag => <span className="tag">{tag}</span>)}
				<br></br>
				<span class="ml-1 pt-5"><a href={props.url}><i className="fa fa-link"></i></a></span> 
	  		</div>
		</div>
  	</div>
  );
}
	
export default Project;