import React from 'react';

function Skill(props) {
	return (
		<div>
			<p className="main-content mb-2">{props.title}</p>
				{/* <div className="progress">
					<div className="progress-bar" role="progressbar" style={{width: props.proficiency}}></div>
				</div> */}
		</div>
	);
}
	
export default Skill;