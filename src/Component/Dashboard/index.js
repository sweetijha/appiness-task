import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../action";
import { getEmployeeList } from "../../utils/dashboard";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const empList = getEmployeeList();
    this.props.setEmpolyeeList(empList);
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <table className="table" border={1}>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone No</th>
              </tr>
              {this.props.appState.employeeList.map(emp => (
                <tr>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phoneNo}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
