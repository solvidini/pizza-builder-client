import React from 'react';
import PropTypes from 'prop-types';

import './PizzaIngredient.scss';

//SVGs
import Tomato from '../../../assets/ingredients/tomato.svg';
import Pepperoni from '../../../assets/ingredients/pepperoni.svg';
import Jalapeno from '../../../assets/ingredients/jalapeno.svg';

const PizzaIngredient = props => {
	let ingredient = null;

	switch (props.type) {
		case 'tomato':
			ingredient = (
				<div className="ingredient" style={props.ingredientStyle}>
					<img src={Tomato} alt="ingredient"/>
				</div>
			);
			break;
		case 'pepperoni':
			ingredient = (
				<div className="ingredient" style={props.ingredientStyle}>
					<img src={Pepperoni} alt="ingredient"/>
				</div>
			);
			break;
		case 'jalapeno':
			ingredient = (
				<div className="ingredient" style={props.ingredientStyle}>
					<img src={Jalapeno} alt="ingredient"/>
				</div>
			);
			break;
		default:
			ingredient = null;
	}

	return ingredient;
};

PizzaIngredient.propTypes = {
	type: PropTypes.string.isRequired,
};

export default PizzaIngredient;
