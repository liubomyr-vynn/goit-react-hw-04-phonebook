import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storedContacts);

    if (storedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const checkNewName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkNewName) {
      Report.info(`Info`, `${name} is already in contacts.`, 'Ok');
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilter = event => {
    const { value } = event.target;
    setFilterValue(value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const onDeleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className="container">
      <ContactForm addContact={addContact} />

      <Filter filterValue={filterValue} handleFilter={handleFilter} />

      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
