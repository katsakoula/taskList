import { sortingEnum } from "./constants";

export const sortTickets = (tickets, pref) => {
  switch (pref) {
    case sortingEnum.DESC:
      return [...tickets].sort((a, b) => b.priority.localeCompare(a.priority));
    case sortingEnum.ASC:
      return [...tickets].sort((a, b) => a.priority.localeCompare(b.priority));
    default:
      return tickets;
  }
};
