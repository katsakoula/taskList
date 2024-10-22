export const sortTickets = (tickets, pref) => {
  switch (pref) {
    case "Descending":
      return [...tickets].sort((a, b) => b.priority.localeCompare(a.priority));
    case "Ascending":
      return [...tickets].sort((a, b) => a.priority.localeCompare(b.priority));
    default:
      return tickets;
  }
};
