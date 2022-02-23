import React from 'react';
import Axios from "axios";
import '../styles/car.css';


export default class EmployeeListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            sbiList: {},
            nlcList:{}
        }
    }

    render() {
        

        return (
            <div className="App p-5" >
                <div className="container p-5" style={{width:"80%",margin:"-4% 10%"}}>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">


                    <div class="carousel-item">
                        <img src="https://media.istockphoto.com/vectors/vector-grunge-textured-background-beautiful-abstract-decorative-red-vector-id1225740014?k=20&m=1225740014&s=612x612&w=0&h=HPhbN1L4GrzASzoewYMl_8avVBriyP2Q83v85eZ6W9M=" class="d-block w-100" alt="..." />
                        <div class="carousel-caption top" style={{margin:"auto"}}>
                            <h1 class="top">SBI</h1>
                        </div>
                        <div class="carousel-caption center" style={{backgroundColor:"white"}}>  
                        <table>
                            <tr>
                                <td>
                                    <b>Company Name : </b>
                                
                                
                                    <b>{this.state.sbiList.DISPID}</b>
                                </td>
                                <td>
                                    <b>Current Price : </b>
                                
                                
                                    <b>{this.state.sbiList.pricecurrent} </b>
                                    </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Previous Closing Price : </b>
                                
                                
                                    <b>{this.state.sbiList.priceprevclose}</b>
                                    </td>
                                <td>
                                    <b>Price Change : </b>
                                
                                    <b>{this.state.sbiList.pricechange} </b>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Total Buy Quantity : </b>
                                
                                    <b>{this.state.sbiList.tot_buy_qty}</b>
                                </td>
                                <td>
                                    <b>Total Sell Quantity : </b>
                                
                                    <b>{this.state.sbiList.tot_sell_qty} </b>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Lower Circuit Limit : </b>
                                
                                    <b>{this.state.sbiList.lower_circuit_limit}</b>
                                </td>
                                <td>
                                    <b>Upper Circuit Limit : </b>
                                
                                    <b>{this.state.sbiList.upper_circuit_limit} </b>
                                </td>
                            </tr>
                        </table>
                        </div>
                    </div>



                    <div class="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg?size=626&ext=jpg"  style={{height:"517px"}} class="d-block w-100" alt="..." />
                        <div class="carousel-caption left">
                        <h5>SBI Stock Info</h5>
                        </div>
                        <div class="carousel-caption right">
                        <h5>NLC Stock Info</h5>
                        </div>
                    </div>



                    <div class="carousel-item">
                        <img src="https://media.istockphoto.com/vectors/vector-grunge-textured-background-beautiful-abstract-decorative-red-vector-id1225740014?k=20&m=1225740014&s=612x612&w=0&h=HPhbN1L4GrzASzoewYMl_8avVBriyP2Q83v85eZ6W9M=" class="d-block w-100" alt="..." />
                        <div class="carousel-caption top" style={{margin:"auto"}}>
                            <h1 class="top">NLC</h1>
                        </div>
                        <div class="carousel-caption center" style={{backgroundColor:"white"}}>
                            
                        <table>
                            <tr>
                                <td>
                                    <b>Company Name : </b>             
                                    <b>{this.state.nlcList.DISPID}</b>
                                </td>
                                <td>
                                    <b>Current Price : </b>
                                    <b>{this.state.nlcList.pricecurrent} </b>
                                    </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Previous Closing Price : </b>
                                    <b>{this.state.nlcList.priceprevclose}</b>
                                    </td>
                                <td>
                                    <b>Price Change : </b>
                                    <b>{this.state.nlcList.pricechange} </b>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Total Buy Quantity : </b>
                                
                                    <b>{this.state.nlcList.tot_buy_qty}</b>
                                </td>
                                <td>
                                    <b>Total Sell Quantity : </b>
                                
                                    <b>{this.state.nlcList.tot_sell_qty} </b>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Lower Circuit Limit : </b>
                                
                                    <b>{this.state.nlcList.lower_circuit_limit}</b>
                                </td>
                                <td>
                                    <b>Upper Circuit Limit : </b>
                                
                                    <b>{this.state.nlcList.upper_circuit_limit} </b>
                                </td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
                </div> 
    
        )
    }



    componentDidMount() {
        this.getData();
    }

    getData = () => {
        var dataPromise = Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
        dataPromise.then((response) => {
            this.setState({
                sbiList: response.data.data
            })
        })
        var dataPromises = Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC");
        dataPromises.then((response) => {
            this.setState({

                nlcList: response.data.data
                
            })
        })
    }
}
