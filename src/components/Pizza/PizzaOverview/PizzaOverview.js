import React from 'react';
import './PizzaOverview.scss';

const PizzaOverview = props => (
	<div className="pizza-overview">
		<p className="pizza-overview__price">
			Current Price: <strong>{props.price.toFixed(2)} $</strong>
		</p>
		<div className="pizza-controls-container">{props.children}</div>
		<div className="center">
			<button className="btn btn--reset" disabled={!props.purchasable} onClick={props.reset}>
				RESET
			</button>
			<button className="btn btn--order" disabled={!props.purchasable} onClick={props.ordered}>
				ORDER NOW
			</button>
		</div>
	</div>
);

export default PizzaOverview;
