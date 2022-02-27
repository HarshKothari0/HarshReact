import { useState, useEffect } from "react";
import Axios from "axios";
import React from 'react';
import HotelDetailsComponent from "./HotelDetailsComponent"


export default function HotelList(props) {

    var [HotelList, SetHotelList] = useState([]);

    useEffect(() => {
        var dataPromise = Axios.get("https://localhost:5001/api/Hotel/GetHotel");
        dataPromise.then((response) => {
            SetHotelList(response.data);
        })
    }, [])

    function deleteHotel(event) {
        Axios.delete("https://localhost:5001/api/Hotel/DeleteHotel/" + event.target.id).then(() => {
            alert("Hotel is Deleted");

        })
    }

    function modifyHotel(event) {
        var hid = event.target.id;
        props.history.push("/update/" + hid);
    }

    return (
        <>
            <h1>Hotel List is given Below:</h1>
            {HotelList.map((Hotel) => {
                return <HotelDetailsComponent key={Hotel.hid} {...Hotel} deleteHotel={deleteHotel} modifyHotel={modifyHotel}></HotelDetailsComponent>
            })}
        </>
    )
}

