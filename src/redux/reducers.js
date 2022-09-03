import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const contactsReducer = createReducer(initialContacts, {
  [addContact]: (state, action) => {
    const isDublicate = state.find(el => el.name === action.payload.name);
    if (isDublicate) {
      alert(`${action.payload.name} is already in contacts`);
      return state;
    }
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) =>
    state.filter(el => el.id !== action.payload),
});


const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export { contactsReducer, filterReducer };
