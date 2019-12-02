import React from 'react';

import './Pizza.scss';

import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

const Pizza = props => {
	let transformedIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			//POSITION ALGORITHM
			let positionY = 420;
			let positionX = 90;
			let rotate = 0;

			return [...Array(props.ingredients[igKey])].map((_, i) => {
				const multipleIngredients = [];

				for (let x = 0; x < 5; x++) {
					positionY = 420 - x * 100;
					positionX = Math.floor(Math.random() * 350) + 20;
					rotate = Math.floor(Math.random() * 360);
					multipleIngredients.push(
						<PizzaIngredient
							key={igKey + i + x}
							type={igKey}
							ingredientStyle={{
								transform: `scale(.25) translate(-${positionX}%, -${positionY}%) rotate(${rotate}deg)`,
							}}
						/>
					);
				}
				for (let x = 0; x < 5; x++) {
					positionX = 420 - x * 100;
					positionY = Math.floor(Math.random() * 350) + 20;
					rotate = Math.floor(Math.random() * 360);
					multipleIngredients.push(
						<PizzaIngredient
							key={igKey + i + x}
							type={igKey}
							ingredientStyle={{
								transform: `scale(.25) translate(-${positionX}%, -${positionY}%) rotate(${rotate}deg)`,
							}}
						/>
					);
				}
				return multipleIngredients;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients!</p>;
	}
	return <div className="pizza">{transformedIngredients}</div>;
};

export default Pizza;
