import React from 'react';
import classnames from 'classnames';

function Project(props) {
	return (
	<div className={classnames("col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 pl-0 element-item", props.categories)} data-category="post-transition">
		<div className="custom-card">
	  		<div>
			  	<h5 className="heading subsection-heading" style={{textTransform:"capitalize"}}>
			  		{props.title}
				</h5>
				<p className="main-content">{props.content}&nbsp;</p>
	 		</div>
	  		<div>
			  	<span class="ml-1 pt-3 pb-3"><a href={props.github}><i className="fab fa-github"></i></a>{props.url.length > 0 && <a href={props.url}><i className="pl-3 fas fa-external-link-alt"></i></a>}</span> 
			  	<br></br>
			  	{props.tags.map(tag => <span className="custom-tag">{tag}</span>)}				
	  		</div>
		</div>
  	</div>
  );
}
	
export default Project;