import { v4 as uuidv4 } from "uuid";

export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EACHBOOK":
      return [
        ...state,
        {
          title: action.eachBook.title,
          author: action.eachBook.author,
          id: uuidv4(),
        },
      ];

    case "REMOVE_EACHBOOK":
      return state.filter((eachBook) => eachBook.id !== action.id);
    default:
      return state;
  }
};
