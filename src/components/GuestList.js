import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest'

const GuestList = props => 
	<ul>
    <PendingGuest name={props.pendingGuest} />
    {
    	props.guests
        .filter(guest => !props.isFiltered || guest.isConfirmed)
        .map((guest, index) =>
      <Guest 
        key={guest.id} 
        name={guest.name} 
        isConfirmed={guest.isConfirmed}
        isEditing={guest.isEditing}
        handleConfirmation={() => props.toggleConfirmationAt(guest.id)}
        handleEditing={() => props.toggleEditingAt(guest.id)}
        setName={text => props.setNameAt(text, guest.id)}
        handleRemoveGuest={() => props.removeGuest(guest.id)}
        />
  	)}
  </ul>

GuestList.propTypes = {
	guests: PropTypes.array.isRequired,
  pendingGuest: PropTypes.string,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuest: PropTypes.func.isRequired,
}

export default GuestList