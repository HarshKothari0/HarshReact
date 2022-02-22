import ReactDOM from "react-dom";
import App from "./components/EmployeeListComponent";
import employeeList from "./data/employeeList"




ReactDOM.render(<App empList={employeeList}></App>, document.getElementById("root"))