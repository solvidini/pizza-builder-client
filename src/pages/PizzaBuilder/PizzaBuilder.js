import React from 'react';

import Pizza from '../../components/Pizza/Pizza';

const PizzaBuilder = props => {
    const ingredients = {
        pepperoni: 1,
        tomato: 2,
        jalapeno: 1
    }
    return (
        <div>
            <Pizza ingredients={ingredients} />
        </div>
    );
}

export default PizzaBuilder;