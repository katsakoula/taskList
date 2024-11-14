import React, { useEffect, useState } from "react";
import { actionTypesEnum } from "../reducers/ticketReducer";
import { priorityLabels } from "../utilities/constants";

export default function TicketForm({ dispatch, editingTicket }){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  useEffect(() => {
    if (editingTicket) {
      setTitle(editingTicket.title);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
    } else {
      clearForm();
    }
  }, [editingTicket]);

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketData = {
      id: editingTicket ? editingTicket.id : new Date().toISOString(),
      title,
      description,
      priority,
    };

    dispatch({
      type: editingTicket
        ? actionTypesEnum.UPDATE_TICKET
        : actionTypesEnum.ADD_TICKET,
      payload: ticketData,
    });
    clearForm();
    dispatch({ type: actionTypesEnum.CLEAR_EDITING_TICKET });
  };
  const handleCancel = (e) => {
    e.preventDefault();
    clearForm();
    dispatch({ type: actionTypesEnum.CLEAR_EDITING_TICKET });
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div>
        <label>Title</label>
        <input
          type="text"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          className="form-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {Object.entries(priorityLabels).map(([value, label]) => (
          <label key={value} className="priority-label">
            <input
              className="priority-input"
              type="radio"
              value={value}
              checked={priority === value}
              onChange={(e) => setPriority(e.target.value)}
            ></input>
            {label}
          </label>
        ))}
      </fieldset>

      <button type="submit" className="button">
        Submit
      </button>
      {editingTicket && (
        <button type="button" className="button" onClick={handleCancel}>
          Cancel Edit
        </button>
      )}
    </form>
  );
}
