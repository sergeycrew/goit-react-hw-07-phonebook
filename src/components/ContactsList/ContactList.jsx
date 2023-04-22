import { PhonebookList } from './ContactList.styled';
import { ListItem } from 'components/ListItem/Listitem';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Notification } from 'components/Notification/Notification';
import { selectError, selectIsLoading, useContacts } from 'redux/selectors';
import { fetchContacts } from '../../redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useContacts();

  //console.log(visibleContacts);

  return (
    <PhonebookList>
      {visibleContacts.length === 0 && (
        <Notification message="There are no contacts in your phone book. Please add a contact!" />
      )}
      {isLoading && !error && <Notification message="Request in progress..." />}
      {visibleContacts.map(({ id, name, number }) => (
        <ListItem key={id} id={id} name={name} number={number} />
      ))}
    </PhonebookList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};
