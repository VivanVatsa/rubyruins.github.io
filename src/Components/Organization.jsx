import React from 'react';

function showUrl(l) {
	if (l) {
		return (
			<span><a href={l}><i className="fas fa-external-link-alt"></i></a></span>
		)
	}
}

function Organization(props) {
	return (
        <div className="row">
            <div className="col-lg-12 collapse-heading">
                <button type="button" className="btn btn-link heading subsection-heading m-0" data-toggle="collapse" data-target={`#${props.id}`}>
                    <i className="fas fa-angle-down mr-2"></i>&nbsp;{props.title}
                </button>										
            </div>
            <div id={props.id} className="col-lg-12 collapse">
                <div className="main-content ml-4 mb-3">
                    <p className="heading subsection-heading color-one-text">{props.date}</p>
                    <p>{props.content}</p>
                    {showUrl(props.url)}
                </div>
            </div>
        </div>
	);
}
	
export default Organization;