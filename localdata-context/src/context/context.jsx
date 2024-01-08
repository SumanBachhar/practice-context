import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer";
const JustDataContext = createContext();

export const useGlbalContext = () => {
  return useContext(JustDataContext);
};
const initialState = {
  data: [],
};
export const JustDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <JustDataContext.Provider value={{ ...state }}>
        {children}
      </JustDataContext.Provider>
    </>
  );
};
