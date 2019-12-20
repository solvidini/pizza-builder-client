import React from 'react';
import './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Tomato', type: 'tomato' },
	{ label: 'Pepperoni', type: 'pepperoni' },
	{ label: 'Jalapeno', type: 'jalapeno' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Cucumber', type: 'cucumber' },
	{ label: 'Mushroom', type: 'mushroom' },
	{ label: 'Pineapple', type: 'pineapple' },
	{ label: 'Olive', type: 'olive' },
	{ label: 'Paprika', type: 'paprika' },
	{ label: 'Oregano', type: 'oregano' },
];

const BuildControls = props => (
	<div className="build-controls">
		{controls.map(ctrl => (
			<BuildControl
				key={ctrl.label}
				label={ctrl.label}
				added={() => props.ingredientAdded(ctrl.type)}
				removed={() => props.ingredientRemoved(ctrl.type)}
				disabledLess={props.disabledLess[ctrl.type]}
				disabledMore={props.disabledMore[ctrl.type]}
			/>
		))}
	</div>
);

export default BuildControls;
