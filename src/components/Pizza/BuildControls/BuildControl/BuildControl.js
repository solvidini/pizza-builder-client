import React from 'react';
import './BuildControl.scss';

const BuildControl = props => (
	<div className="build-control">
		<div className="build-control__label">{props.label}</div>
		<button
			className="btn btn--less"
			onClick={props.removed}
			disabled={props.disabledLess}
		>
			Less
		</button>
		<button
			className="btn btn--more"
			onClick={props.added}
			disabled={props.disabledMore}
		>
			More
		</button>
	</div>
);

export default BuildControl;
