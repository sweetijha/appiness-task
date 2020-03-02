export const mapStateToProps = state => {
  return {
    appState: state
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    changeUsername: val => dispatch({ type: "SET_USERNAME", payload: val }),
    changePassword: val => dispatch({ type: "SET_PASSWORD", payload: val }),
    setEmpolyeeList: val => dispatch({ type: "SET_EMP_LIST", payload: val })
  };
};
