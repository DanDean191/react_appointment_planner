import React, { useState, useEffect } from "react";

import { ContactForm } from '../../components/contactForm/ContactForm'
import { TileList } from '../../components/tileList/TileList'

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (duplicateName) return;
    addContact(name, phone, email);
    setName('')
    setPhone('')
    setEmail('')
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(()=> {
    if(contacts.find(element => element.name === name)){
      setDuplicateName(true)
    }
    else setDuplicateName(false)    
  },[name, contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={(e) => setName(e.target.value)} phone={phone} setPhone={(e) => setPhone(e.target.value)} email={email} setEmail={(e) => setEmail(e.target.value)} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}/>
      </section>
    </div>
  );
};
