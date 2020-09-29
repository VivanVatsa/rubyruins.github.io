import React from 'react';

function Skill(props) {
	return (
		<div>
			<p className="main-content">{props.title}</p>
				<div className="progress">
					<div className="progress-bar" role="progressbar" style={{width: props.skill}}></div>
				</div>
		</div>
	);
}
	
export default Skill;