import React, { Component } from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent'

class App extends Component {
  
  state = {
    isFiltered: false,
    pendingGuest: "",
    nextKey: 1,
    guests: []
  };

  toggleGuestPropertyAt = (property, id) => 
    this.setState({
      guests: this.state.guests.map(guest => {
        if(id === guest.id){
          return{
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  toggleConfirmationAt = id =>
    this.toggleGuestPropertyAt("isConfirmed", id);

  toggleEditingAt = id =>
    this.toggleGuestPropertyAt("isEditing", id);

  removeGuestAt = id =>
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });



  setNameAt = (name, id) => 
    this.setState({
      guests: this.state.guests.map(guest => {
        if(id === guest.id){
          return{
            ...guest,
            name
          };
        }
        return guest;
      })
    });

  toggleFilter = () =>
    this.setState({isFiltered: !this.state.isFiltered});

  handleNameInput = (e) =>
    this.setState({pendingGuest: e.target.value});

  handleGuestSubmit = (e) => {
    e.preventDefault();
    return(
      this.setState(prevState => ({
        guests: [
          {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id: this.state.nextKey,
          },
          ...prevState.guests
        ],
        pendingGuest: '',
        nextKey: this.state.nextKey + 1
      }))
    );
  };

  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => this.state.guests.filter(guests => guests.isConfirmed).length;
  getUnconfirmedGuests = () => this.state.guests.filter(guests => !guests.isConfirmed).length;

  render() {

    const total = this.getTotalInvited();
    const attending = this.getAttendingGuests();
    const unconfirmed = this.getUnconfirmedGuests();

    return (
      <div className="App">
      <Header 
        newGuestSubmitHandler={this.handleGuestSubmit}
        pendingGuest={this.state.pendingGuest}
        handleNameInput={this.handleNameInput}/>

      <MainContent
        toggleFilter={this.toggleFilter}
        isFiltered={this.state.isFiltered}
        attending={attending}
        unconfirmed={unconfirmed}
        total={total}
        guests={this.state.guests}
        toggleConfirmationAt={this.toggleConfirmationAt}
        toggleEditingAt={this.toggleEditingAt}
        setNameAt={this.setNameAt}
        removeGuestAt={this.removeGuestAt}
        pendingGuest={this.state.pendingGuest}
      />
    </div>
    );
  }
}

export default App;
