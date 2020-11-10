import React from 'react';

function Project(props) {
	return (
		<div className="custom-card">
	  		<div>
			  	<h5 className="heading subsection-heading" style={{textTransform:"capitalize"}}>
			  		{props.title}
				</h5>
				<p className="main-content">{props.content}&nbsp;</p>
	 		</div>
	  		<div>
			  	<span className="ml-1 pt-3 pb-3"><a href={props.github} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>{props.url.length > 0 && <a href={props.url} target="_blank" rel="noreferrer"><i className="pl-3 fas fa-external-link-alt"></i></a>}</span> 
			  	<br></br>
			  	{props.tags.map(tag => <span className="custom-tag">{tag}</span>)}				
	  		</div>
		</div>
    );
}
	
export default Project;