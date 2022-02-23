import EmployeeDetailsComponent from "./EmployeeDetailsComponent";
import React, { Component } from "react";

export default class EmployeeListComponent extends Component {
    constructor(){
        super();
        this.state = {
            name: ""
        }
    }
    nameChange = event => {
      
        this.setState({
            name: event.target.value
        })
    }
    ChildComponent=()=>{
       
        if(this.state.name==""){
            return ( 
                <>
                    {this.props.empList.map(function(employee) {
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
                    {this.props.empList.map((employee)=> {
                        if(employee.name.includes(this.state.name)){
                        return (
                            <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
                        )
                        }
                    })}
                </>
            )
        }
    }
    render(){
        
    return (
        <div style={{margin:"0 20px",backgroundColor:"black"}} >
                <table style={{margin:"auto"}}>
                <tr>
                <td>
                <h2 style={{color:"white"}}>Enter name :   </h2>
                </td>
                <td>  
                <input style={{height:"30px",width:"400px"}} onChange={this.nameChange} />
                </td>
                </tr>
                </table>
            <hr style={{border:"1px solid white"}}></hr>
         {this.ChildComponent()} 
            
        </div>
    )
    }
}

