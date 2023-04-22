import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectStatusFilter = state => state.filter;

export const selectVisibleTasks = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, filter) => {
    const normalizedFilter = filter?.toLowerCase();
    return contacts?.filter(({ name }) =>
      name.toLowerCase()?.includes(normalizedFilter)
    );
  }
);

export const useContacts = () => {
  return useSelector(selectVisibleTasks);
};
