import React from 'react';
import Axios from "axios";
import '../styles/car.css';


export default class Stock extends React.Component {
    constructor() {
        super();
        this.state = {
            stockList: {}
            
        }
       
    }
    

    render() {
    
        return (
            <>
                <div className="row">
                    <div className="column">
                        <img src="https://www.kindpng.com/picc/m/78-788160_transparent-stock-market-icon-png-png-download.png" alt="no data" height="250" width="250"/>
                    </div>
                    <div className="column" >
                        <b>Company Name : {this.state.stockList.DISPID}</b><br/><br/>
                        <b>Previous Closing Price : {this.state.stockList.priceprevclose}</b><br/><br/>
                        <b>Total Buy Quantity : {this.state.stockList.tot_buy_qty}</b><br/><br/>
                        <b>Lower Circuit Limit : {this.state.stockList.lower_circuit_limit}</b>
                    </div>
                    <div className="column" >
                        <b>Current Price : {this.state.stockList.pricecurrent} </b><br/>  <br/> 
                        <b>Price Change : {this.state.stockList.pricechange}</b><br/><br/>
                        <b>Total Sell Quantity : {this.state.stockList.tot_sell_qty} </b><br/><br/>
                        <b>Upper Circuit Limit : {this.state.stockList.upper_circuit_limit} </b>
                    </div>
                </div>
            </>
        
    
        )
    }



    componentDidMount() {
        
        setInterval(() => {
            Axios.get(this.props.apiurl).then((response) => {

                this.setState({ stockList: response.data.data })
                console.log(this.state.stockList)
            });
        }, 1000);
    }
}
