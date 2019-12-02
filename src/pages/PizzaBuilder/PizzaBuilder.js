import React from 'react';

import Pizza from '../../components/Pizza/Pizza';

const PizzaBuilder = props => {
	const ingredients = {
		cheese: 1,
		pepperoni: 1,
		cucumber: 1,
		tomato: 1,
        jalapeno: 1,
        mushroom: 1,
        pineapple: 1,
        olive: 1,
        paprika: 1
	};
	return (
		<div>
			<Pizza ingredients={ingredients} />
		</div>
	);
};

export default PizzaBuilder;
