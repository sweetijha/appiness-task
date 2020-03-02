const initState = {
  username: "",
  password: "",
  employeeList: []
};

export const appReducer = function(state = initState, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_EMP_LIST":
      return { ...state, employeeList: action.payload };
    default:
      return state;
  }
};
