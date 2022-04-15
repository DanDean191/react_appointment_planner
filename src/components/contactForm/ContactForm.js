import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" onChange={setName} value={name} required></input>
      <label htmlFor="tel">Tel No.</label>
      <input id="tel" type="tel" onChange={setPhone} value={phone} required></input>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" onChange={setEmail} value={email} required></input>
      <input type="submit" value="Add Contact"></input>
    </form>
  );
};
