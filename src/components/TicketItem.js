import React from "react";
import { priorityClass } from "../utilities/constants";
import { actionTypesEnum } from "../reducers/ticketReducer";

export default function TicketItem({ ticket, dispatch }) {
  const { id, title, description, priority } = ticket;

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[priority]}`}></div>

      <h3>{title}</h3>
      <p>{description}</p>

      <button
        className="button"
        onClick={() =>
          dispatch({ type: actionTypesEnum.DELETE_TICKET, payload: { id } })
        }
      >
        Delete
      </button>

      <button
        className="button"
        onClick={() =>
          dispatch({
            type: actionTypesEnum.SET_EDITING_TICKET,
            payload: ticket,
          })
        }
      >
        Edit
      </button>
    </div>
  );
}
