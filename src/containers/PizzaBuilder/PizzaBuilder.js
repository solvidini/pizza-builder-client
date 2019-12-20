import React, { useState, useEffect, Fragment, useCallback } from 'react';
import { connect } from 'react-redux';

import Pizza from '../../components/Pizza/Pizza';
import PizzaOverview from '../../components/Pizza/PizzaOverview/PizzaOverview';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';
import * as actions from '../../store/actions/index';

const PizzaBuilder = props => {
	const [purchasing, setPurchasing] = useState(false);

	const updatePurchaseState = ingredients => {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		return sum > 0;
	};

	const disabledLessInfo = {
		...props.ingredients,
	};
	for (let key in disabledLessInfo) {
		disabledLessInfo[key] = disabledLessInfo[key] <= 0;
	}
	const disabledMoreInfo = {
		...props.ingredients,
	};
	for (let key in disabledMoreInfo) {
		disabledMoreInfo[key] = disabledMoreInfo[key] >= 4;
	}

	let pizza = props.error ? <p>Ingredients can't be loaded!</p> : 'loading...';
	if (props.ingredients) {
		pizza = (
			<PizzaOverview
				price={props.price}
				//   ordered={purchaseHandler}
				//   isAuth={isAuthenticated}
				purchasable={updatePurchaseState(props.ingredients)}
				reset={props.onResetIngredients}
			>
				<BuildControls
					ingredientAdded={props.onIngredientAdded} //props
					ingredientRemoved={props.onIngredientRemoved} //props
					disabledLess={disabledLessInfo}
					disabledMore={disabledMoreInfo}
				/>
				<Pizza ingredients={props.ingredients} />
			</PizzaOverview>
		);
	}

	return <Fragment>{pizza}</Fragment>;
};

const mapStateToProps = state => {
	return {
		ingredients: state.pizzaBuilder.ingredients,
		price: state.pizzaBuilder.totalPrice,
		error: state.pizzaBuilder.error,
		// isAuthenticated: state.auth.token !== null
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIngredientAdded: ingredientName => dispatch(actions.addIngredient(ingredientName)),
		onIngredientRemoved: ingredientName => dispatch(actions.removeIngredient(ingredientName)), //dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingredientName })
		onResetIngredients: () => dispatch(actions.resetIngredients()), 
		// onInitPurchase: () => dispatch(actions.purchaseInit()),
		// onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBuilder);
