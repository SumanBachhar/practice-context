import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "../reducer";
import questions from "../data/questions";
const JustDataContext = createContext();

export const useGlbalContext = () => {
  return useContext(JustDataContext);
};
const initialState = {
  questions: [],
};
export const JustDataProvider = ({ children }) => {
  const [data, setData] = useState(questions);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <JustDataContext.Provider value={{ ...state }}>
        {children}
      </JustDataContext.Provider>
    </>
  );
};
