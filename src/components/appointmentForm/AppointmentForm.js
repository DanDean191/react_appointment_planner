import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
   <form onSubmit={handleSubmit}>
    <label htmlFor="title">Appointment Description</label>
    <input id="title" type="text" onChange={setTitle} value={title} required></input>
    <label htmlFor="contact">Contact</label>
    <ContactPicker id="contact" contacts={contacts} onChange={setContact}/>
    <label htmlFor="date">Date</label>
    <input id="date" type="date" onChange={setDate} min={getTodayString()} value={date} required></input>
    <label htmlFor="time">Time</label>
    <input id="time" type="time" onChange={setTime} value={time} required></input>
    <input type="submit" value="Add Appointment"></input>
   </form>
  );
};
