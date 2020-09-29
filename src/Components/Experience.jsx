import React from 'react';

function Experience(props) {
	return (
        <div className="row">
            <div className="col-lg-12 collapse-heading">
                <button type="button" className="btn btn-link" data-toggle="collapse" data-target={`#${props.id}`}>
                    <i className="fa fa-plus"></i>&nbsp;{props.title}
                </button>										
            </div>
            <div id={props.id} className="col-lg-12 collapse">
                <div className="main-content">
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
	);
}
	
export default Experience;