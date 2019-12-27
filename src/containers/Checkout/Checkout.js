import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const Checkout = props => {
	const checkoutCancelledHandler = () => {
		props.history.goBack();
	};

	const checkoutContinuedHandler = () => {
		props.history.replace('/checkout/contact-data');
	};

	useEffect(() => {
		if (props.purchased) {
			setTimeout(() => {
				props.history.push('/');
			}, 5000);
		}
	}, [props.purchased]);

	let summary = <Redirect to="/" />;
	if (props.ingredients) {
		summary = (
			<React.Fragment>
				<CheckoutSummary
					ingredients={props.ingredients}
					checkoutCancelled={checkoutCancelledHandler}
					checkoutContinued={checkoutContinuedHandler}
				/>
				<Route path={props.match.path + '/contact-data'} component={ContactData} />
			</React.Fragment>
		);
	}
	return summary;
};

const mapStateToProps = state => {
	return {
		ingredients: state.pizzaBuilder.ingredients,
		purchased: state.order.purchased,
	};
};

export default connect(mapStateToProps)(Checkout);
