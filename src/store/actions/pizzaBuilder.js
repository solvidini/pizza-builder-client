import * as actionTypes from './actionTypes';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const resetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENTS
    }
}

export const setIngredients = (ing) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ing
    }
}