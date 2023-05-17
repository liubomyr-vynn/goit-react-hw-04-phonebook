import React from 'react';

const ContactList = ({ contacts, handleDeleteContact }) => {
  const handleDelete = contactId => {
    handleDeleteContact(contactId);
  };
  return (
    <div className="section__list">
      <ul className="contact__list">
        {contacts.map(contact => (
          <li className="contact__item" key={contact.id}>
            <p className="contact__text">
              {contact.name}: {contact.number}
            </p>
            <button
              type="button"
              className="contact__button"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
