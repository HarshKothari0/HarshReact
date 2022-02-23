import axios from 'axios'
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
export default class FormHotel extends Component {
    constructor() {
        super()
        this.state = {    
                imagePath: "",
                hName : "",
                hLocation: "",
                hAddress: "",
                doubleBed: 0,
                singleBed: 0,
                doublePrice: 0,
                singlePrice: 0,
                hid: 0
        }
    }

    handleChange = (event) => {
        if (event.target.name === 'hid') {
            this.setState({
                hid: event.target.value
            });
        } else if (event.target.name === 'hname') {
            this.setState({
                hName: event.target.value
            });
        } else if (event.target.name === 'hlocation') {
            this.setState({
                hLocation: event.target.value
            })
        }
        else if (event.target.name === 'haddress') {
            this.setState({
                hAddress: event.target.value
            })
        } else if (event.target.name === 'doublebed') {
            this.setState({
                doubleBed: event.target.value
            })
        } else if (event.target.name === 'singlebed') {
            this.setState({
                singleBed: event.target.value
            })
        } else if (event.target.name === 'doubleprice') {
            this.setState({
                doublePrice: event.target.value
            })
        } else if (event.target.name === 'singleprice') {
            this.setState({
                singlePrice: event.target.value
            })
        } else if (event.target.name === 'image') {
            this.setState({
                imagePath: event.target.value
            })
        }
        
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            
                "hid": parseInt(this.state.hid),
                "hName": this.state.hName,
                "hLocation": this.state.hLocation,
                "hAddress": this.state.hAddress,
                "doubleBed": parseInt(this.state.doubleBed),
                "singleBed": parseInt(this.state.singleBed),
                "doublePrice": parseInt(this.state.doublePrice),
                "singlePrice": parseInt(this.state.singlePrice),
                "imagePath": this.state.imagePath
              
        }
        this.setState({
            imagePath: "",
                hName : "",
                hLocation: "",
                hAddress: "",
                doubleBed: 0,
                singleBed: 0,
                doublePrice: 0,
                singlePrice: 0,
                hid: 0
        })
        axios.post(`https://localhost:5001/api/Hotel/AddHotel`, payload ).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
  render() {
      var styleObject={
        divstyle:{
            border:"2px solid black",margin:"50px",padding:"10px",color:"white",backgroundColor:"black"
        }
      };
    return (
        <div style={styleObject.divstyle}>
            <h1 style={{textAlign:"center"}}>Enter Hotel Info</h1>
            <br></br>
        <div className='h-100 d-flex justify-content-center align-items-center' >
            <Form onSubmit={this.handleSubmit} >
            <Form.Group className="mb-3">
                <Form.Label>Hotel ID</Form.Label>
                <Form.Control style={{width:"400px"}} type="number" placeholder="Enter Hotel ID" name = "hid" value={this.state.hid} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Hotel Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Hotel Name" name = "hname" value={this.state.hName} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Hotel Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Hotel Address" name = "haddress" value={this.state.hAddress} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Hotel Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Hotel Location" name = "hlocation" value={this.state.hLocation} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Double Bed Rooms</Form.Label>
                <Form.Control type="number" placeholder="Enter Double Bed Rooms" name = "doublebed" value={this.state.doubleBed} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Single Bed Rooms</Form.Label>
                <Form.Control type="number" placeholder="Enter Single Bed Rooms" name = "singlebed" value={this.state.singleBed} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Double Bed Room Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Double Bed Rooms Price" name = "doubleprice" value={this.state.doublePrice} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Single Bed Room Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Single Bed Rooms Price" value={this.state.singlePrice} name = "singleprice" onChange={this.handleChange} />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Image Path</Form.Label>
                <Form.Control type="text" placeholder="Enter Image Path" name="image"  value={this.state.imagePath} onChange={this.handleChange}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
        </div>
        
    )
  }
}

