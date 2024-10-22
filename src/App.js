import { useReducer } from "react";
import "./App.css";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import ticketReducer from "./reducers/ticketReducer";
import "./styles.css";
import { sortTickets } from "./utilities/sortingUtilities";

function App() {
  const initialState = {
    tickets: [],
    editingTicket: null,
    sortPreference: "Ascending",
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);
  const sotredTickets = sortTickets(state.tickets, state.sortPreference);

  return (
    <div className="App">
      <div className="container">
        <h1>Task List</h1>
        <TicketForm
          dispatch={dispatch}
          editingTicket={state.editingTicket}
        ></TicketForm>

        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>

            <select
              value={state.sortPreference}
              onChange={(e) => {
                dispatch({ type: "SET_SORTING", payload: e.target.value });
              }}
            >
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>

            <TicketList
              tickets={sotredTickets}
              dispatch={dispatch}
            ></TicketList>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
