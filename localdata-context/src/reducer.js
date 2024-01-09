export const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW-DATA":
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
  }
};
