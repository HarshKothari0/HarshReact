import { useState,useEffect } from "react";
import Axios from "axios";
import React from 'react';

import HotelDetailsComponent from "./HotelDetailsComponent"
import { Form, Button ,Accordion} from 'react-bootstrap'

export default function HotelList() {
    
    var modid;
    var [mod,setmod]=useState("false");
    var [dataupdate,setupd]=useState("false");
    var [htt,sethtt]=useState(0);
    var [HotelList,SetHotelList]=useState([]);
    var [hid,sethid]=useState(0);
    var [hName,sethname]=useState(" ");
    var [hLocation,sethlocation]=useState(" ");
    var [hAddress,sethaddress]=useState(" ");
    var [doubleBed,setdoublebed]=useState(0);
    var [singleBed,setsinglebed]=useState(0);
    var [doublePrice,setdoubleprice]=useState(0);
    var [singlePrice,setsingleprice]=useState(0);
    var [imagePath,setimagepath]=useState(" ");

    useEffect(() => {
        var dataPromise = Axios.get("https://localhost:5001/api/Hotel/GetHotel");
        dataPromise.then((response) => {
            SetHotelList(response.data);
        })
    }, [dataupdate])

    useEffect(() => {

        sethid(htt.hid);
        setdoubleprice(htt.doublePrice);
        setdoublebed(htt.doubleBed);
        setsingleprice(htt.singlePrice);
        setsinglebed(htt.singleBed);
        sethname(htt.hName);
        sethlocation(htt.hLocation);
        sethaddress(htt.hAddress);
        setimagepath(htt.imagePath);
    }, [htt])

    function deleteHotel(event) {
        
        Axios.delete("https://localhost:5001/api/Hotel/DeleteHotel/" + event.target.id).then(() => {
            alert("Hotel is Deleted");
            
        })
        if(dataupdate=="false"){
            setupd("true");
        }
        else{
            setupd("false");
        }
       
    }

    function modifyHotel(event){
        modid=event.target.id;
        var dataPromises = Axios.get("https://localhost:5001/api/Hotel/GetHotel/"+modid);
        dataPromises.then((response) => {
            sethtt(response.data);
        })
        if(mod=="false"){
            setmod("true");
        }
        else{
            setmod("false");
        }
       
       
    }

    function handleChange(event){
        if (event.target.name === 'hid') {
            sethid(event.target.value)
        } else if (event.target.name === 'hname') {
            sethname(event.target.value)
        } else if (event.target.name === 'hlocation') {
            sethlocation(event.target.value)
        }else if (event.target.name === 'haddress') {
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

    function handleSubmit(event){
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
        
        Axios.put("https://localhost:5001/api/Hotel/EditHotel/"+hid, payload ).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
        
    return (
        <>
            <Accordion>

                <Accordion.Item eventKey="0">
                    <Accordion.Header>View Hotel List</Accordion.Header>
                    <Accordion.Body>
                        <h1>Hotel List is given Below:</h1>
                        {HotelList.map((Hotel) => {
                            return <HotelDetailsComponent key={Hotel.hid} {...Hotel} deleteHotel={deleteHotel} modifyHotel={modifyHotel}></HotelDetailsComponent>
                        })}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Modify Hotel</Accordion.Header>
                    <Accordion.Body>
                        <div className='h-100 d-flex justify-content-center align-items-center' >
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Hotel ID</Form.Label>
                                    <Form.Control style={{width:"400px"}} type="number" placeholder="Enter Hotel ID" name = "hid" value={hid} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Hotel Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Hotel Name" name = "hname" value={hName} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Hotel Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Hotel Address" name = "haddress" value={hAddress} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Hotel Location</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Hotel Location" name = "hlocation" value={hLocation} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Double Bed Rooms</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Double Bed Rooms" name = "doublebed" value={doubleBed} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Single Bed Rooms</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Single Bed Rooms" name = "singlebed" value={singleBed} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Double Bed Room Price</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Double Bed Rooms Price" name = "doubleprice" value={doublePrice} onChange={handleChange} />
                                </Form.Group>
                    
                                <Form.Group className="mb-3">
                                    <Form.Label>Single Bed Room Price</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Single Bed Rooms Price" value={singlePrice} name = "singleprice" onChange={handleChange} />
                                </Form.Group>
                                
                                <Form.Group className="mb-3">
                                    <Form.Label>Image Path</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Image Path" name="image"  value={imagePath} onChange={handleChange}/>
                                </Form.Group>
                    
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        </>
    )
}

