import EmployeeDetailsComponent from "./EmployeeDetailsComponent";
import React, { Component } from "react";

export default class EmployeeListComponent extends Component {
    constructor(){
        super();
        this.state = {
            name: ""
        }
    }
    nameChange(event){
        this.setState({
            name: event.target.value
        })
    }
    render(){
    return (
        <div style={{margin:"0 20px"}} >
            <div style={{backgroundColor:"greenyellow",border:"2px solid black"}}>
                <table style={{margin:"auto"}}>
                <tr>
                <td>
                <h2>Enter name :   </h2>
                </td>
                <td>  
                <input style={{height:"30px",width:"400px"}} onChange={(event) => this.nameChange(event)} />
                </td>
                </tr>
                </table>
            </div>
            <br></br>
            <div style={{backgroundColor:"#336699",border:"2px solid black"}}>
                <ChildComponent name={this.state.name} empList={this.props.empList} ></ChildComponent>
            </div>
        </div>
    )
    }
}

function ChildComponent(props){
    if(props.name==""){
        return ( 
            <>
                {props.empList.map(function(employee) {
                    return (
                        <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
                    )
                })}
            </>         
        )
    }
    else{
        return (
            <>
                {props.empList.map(function(employee) {
                    if(employee.name.includes(props.name)){
                    return (
                        <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
                    )
                    }
                })}
            </>
        )
    }
}