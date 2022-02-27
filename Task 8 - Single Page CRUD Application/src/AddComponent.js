import { useState } from "react";
import Axios from "axios";
import React from 'react';

import { Form, Button } from 'react-bootstrap'

export default function AddHotel(props) {
    
    var [hid, sethid] = useState(0);
    var [hName, sethname] = useState(" ");
    var [hLocation, sethlocation] = useState(" ");
    var [hAddress, sethaddress] = useState(" ");
    var [doubleBed, setdoublebed] = useState(0);
    var [singleBed, setsinglebed] = useState(0);
    var [doublePrice, setdoubleprice] = useState(0);
    var [singlePrice, setsingleprice] = useState(0);
    var [imagePath, setimagepath] = useState(" ");
    var styleObject = {
        divstyle: {
            border: "2px solid black",
            margin: "50px",
            padding: "10px",
            color: "white",
            backgroundColor: "black"
        }
    };

    function handleChange(event) {
        if (event.target.name === 'hid') {
            sethid(event.target.value)
        } else if (event.target.name === 'hname') {
            sethname(event.target.value)
        } else if (event.target.name === 'hlocation') {
            sethlocation(event.target.value)
        } else if (event.target.name === 'haddress') {
            sethaddress(event.target.value)
        } else if (event.target.name === 'doublebed') {
            setdoublebed(event.target.value)
        } else if (event.target.name === 'singlebed') {
            setsinglebed(event.target.value)
        } else if (event.target.name === 'doubleprice') {
            setdoubleprice(event.target.value)
        } else if (event.target.name === 'singleprice') {
            setsingleprice(event.target.value)
        } else if (event.target.name === 'image') {
            setimagepath(event.target.value)
        }
    }

    function handleSubmit(event) {
        var payload = {
            "hid": parseInt(hid),
            "hName": hName,
            "hLocation": hLocation,
            "hAddress": hAddress,
            "doubleBed": parseInt(doubleBed),
            "singleBed": parseInt(singleBed),
            "doublePrice": parseInt(doublePrice),
            "singlePrice": parseInt(singlePrice),
            "imagePath": imagePath
        }

        Axios.post("https://localhost:5001/api/Hotel/AddHotel", payload).then(res => {
            console.log(res);
            console.log(res.data);
        })

        props.history.push("/");
    }

    return (
        <div style={styleObject.divstyle}>
            <h1 style={{ textAlign: "center" }}>Enter New Hotel Info</h1>
            <br></br>
            <div className='h-100 d-flex justify-content-center align-items-center' >
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Hotel ID</Form.Label>
                        <Form.Control style={{ width: "400px" }} type="number" placeholder="Enter Hotel ID" name="hid" value={hid} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Hotel Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Hotel Name" name="hname" value={hName} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Hotel Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Hotel Address" name="haddress" value={hAddress} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Hotel Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter Hotel Location" name="hlocation" value={hLocation} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Double Bed Rooms</Form.Label>
                        <Form.Control type="number" placeholder="Enter Double Bed Rooms" name="doublebed" value={doubleBed} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Single Bed Rooms</Form.Label>
                        <Form.Control type="number" placeholder="Enter Single Bed Rooms" name="singlebed" value={singleBed} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Double Bed Room Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter Double Bed Rooms Price" name="doubleprice" value={doublePrice} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Single Bed Room Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter Single Bed Rooms Price" value={singlePrice} name="singleprice" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Image Path</Form.Label>
                        <Form.Control type="text" placeholder="Enter Image Path" name="image" value={imagePath} onChange={handleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

