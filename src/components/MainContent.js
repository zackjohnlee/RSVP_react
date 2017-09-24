import React from 'react';
import PropTypes from 'prop-types';

import ConfirmedFilter from './ConfirmedFilter';
import GuestList from './GuestList';
import Counter from './Counter';

const MainContent = props => 
  <div className="main">
    <ConfirmedFilter
          toggleFilter={props.toggleFilter}
          isFiltered={props.isFiltered}
    />

    <Counter 
      attending={props.attending}
      unconfirmed={props.unconfirmed}
      total={props.total} />

    <GuestList 
      guests={props.guests}
      toggleConfirmationAt={props.toggleConfirmationAt}
      toggleEditingAt={props.toggleEditingAt}
      setNameAt={props.setNameAt}
      isFiltered={props.isFiltered}
      removeGuest={props.removeGuestAt}
      pendingGuest={props.pendingGuest}
      />
  </div>


MainContent.propTypes = {
	toggleFilter:  PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  attending: PropTypes.number.isRequired,
  unconfirmed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}

export default MainContent;