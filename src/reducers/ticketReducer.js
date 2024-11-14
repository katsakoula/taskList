const actionTypesEnum = {
  ADD_TICKET: "ADD_TICKET",
  UPDATE_TICKET: "UPDATE_TICKET",
  DELETE_TICKET: "DELETE_TICKET",
  SET_EDITING_TICKET: "SET_EDITING_TICKET",
  CLEAR_EDITING_TICKET: "CLEAR_EDITING_TICKET",
  SET_SORTING: "SET_SORTING",
};
export { actionTypesEnum };

export default function ticketReducer(state, action) {
  switch (action.type) {
    case actionTypesEnum.ADD_TICKET:
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };
    case actionTypesEnum.UPDATE_TICKET:
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
      };
    case actionTypesEnum.DELETE_TICKET:
      if (state.editingTicket && state.editingTicket.id === action.payload.id) {
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload.id
          ),
          editingTicket: null,
        };
      } else {
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload.id
          ),
        };
      }
    case actionTypesEnum.SET_EDITING_TICKET:
      return { ...state, editingTicket: action.payload };
    case actionTypesEnum.CLEAR_EDITING_TICKET:
      return { ...state, editingTicket: null };
    case actionTypesEnum.SET_SORTING:
      return { ...state, sortPreference: action.payload };
    default:
      return state;
  }
}
