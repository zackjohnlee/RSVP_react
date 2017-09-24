import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => 
	<table className="counter">
	  <tbody>
	    <tr>
	      <td>Attending:</td>
	      <td>{props.attending}</td>
	    </tr>
	    <tr>
	      <td>Unconfirmed:</td>
	      <td>{props.unconfirmed}</td>
	    </tr>
	    <tr>
	      <td>Total:</td>
	      <td>{props.total}</td>
	    </tr>
	  </tbody>
	</table>;


Counter.propTypes = {
	attending: PropTypes.number.isRequired,
	unconfirmed: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired
}

export default Counter;