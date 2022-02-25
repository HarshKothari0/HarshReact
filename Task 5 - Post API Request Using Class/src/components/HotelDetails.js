import "./style.css"

export default function HotelDetails(props) {
    
    
    return (
          <>
              <div className="row">
                    <div className="column">
                        <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" alt="no data" height="250" width="250"/>
                    </div>
                    <div className="column" >
                        <b>Hotel ID</b> : {props.hid} <br/>
                        <b>Hotel Name</b> : {props.hName} <br/>
                        <b>Address</b> : {props.hAddress}<br/>
                        <b>City</b> : {props.hLocation}
                    </div>
                    <div className="column" >
                        <b>Double Bed Rooms</b> : {props.doubleBed}<br/>
                        <b>Double Bed Room Price</b> : {props.doublePrice}<br/>
                        <b>Single Bed Rooms</b> : {props.singleBed}<br/>
                        <b>Single Bed Room Price</b> : {props.singlePrice}
                    </div>
                    <div className="column" >
                    <input type="button" id={props.hid} className="btn btn-primary" value="Delete" onClick={props.deleteHotel} />
                    ||
                    <input type="button" id={props.hid} className="btn btn-primary" value="Modify" onClick={props.modifyHotel} />
                    
                    </div>
                </div>
                <br/>
          </>
    )
}