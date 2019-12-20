import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	ingredients: {
		cheese: 0,
		pepperoni: 0,
		cucumber: 0,
		tomato: 0,
		jalapeno: 0,
		mushroom: 0,
		olive: 0,
		paprika: 0,
		pineapple: 0,
		oregano: 0,
	},
	totalPrice: 6,
	error: false,
	building: false,
};

const INGREDIENT_PRICES = {
	cheese: 0.5,
	pepperoni: 2.5,
	cucumber: 1.5,
	tomato: 0.75,
	jalapeno: 0.75,
	mushroom: 0.5,
	olive: 0.75,
	paprika: 1.5,
	pineapple: 1,
	oregano: 0.25,
};

const addIngredient = (state, action) => {
	const updatedIngredient = {
		[action.ingredientName]: state.ingredients[action.ingredientName] + 1,
	};
	const UpdatedIngredients = updateObject(state.ingredients, updatedIngredient);
	const updatedState = {
		ingredients: UpdatedIngredients,
		totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
		building: true,
	};
	return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
	return {
		...state,
		ingredients: {
			...state.ingredients,
			[action.ingredientName]: state.ingredients[action.ingredientName] - 1,
		},
		totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
		building: true,
	};
};

const resetIngredients = (state, action) => {
	return {
		...state,
		ingredients: initialState.ingredients,
		totalPrice: initialState.totalPrice,
		building: initialState.building,
		error: initialState.error
	}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.RESET_INGREDIENTS: return resetIngredients(state, action);
        default: return state;
    }
}

export default reducer;