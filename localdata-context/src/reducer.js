export const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW-DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
  }
};
