import React from 'react';

function Preloader(props) {
	return (
		<div class="loader">
			<div class="binding"></div>
			<div class="pad">
				<div class="line line1"></div>
				<div class="line line2"></div>
				<div class="line line3"></div>
			</div>
			<div class="text">
				<p class="heading subsection-heading">COMPILING...</p>
			</div>
		</div>
	);
}
	
export default Preloader;