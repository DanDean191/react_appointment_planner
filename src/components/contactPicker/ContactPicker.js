import React from "react";

// onChange={setContact} value={contact} contacts={contacts}

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange} placeholder="Contact" required>
      <option value="No Contact Selected" defaultValue>No Contact Selected</option>
      {contacts.map((contact, index) => <option key={index} value={contact.name}>{contact.name}</option>)}
    </select>
  );
};
