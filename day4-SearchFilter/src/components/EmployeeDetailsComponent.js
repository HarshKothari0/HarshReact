export default function EmployeeDetailsComponent(props) {

    var styleObject =  {
        containerStyle: {
            width: "18rem", 
            margin: "15px", 
            display: "inline-block",
            border: "2px solid black",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 15,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 15,
            background:"white"
        }, 
        imageStyling: {
            width: "96%",
            height: "auto",
            margin:"2%",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 15,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 15,
        }, 
        centertext :{
            textAlign:"center"
        }
    };

    return (
          <div className="card" style={styleObject.containerStyle}>
              <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" style={styleObject.imageStyling} className="card-img-top" alt={props.name} />
              <div className="card-body">
                  <>
                   <h3 style={styleObject.centertext} className="card-title"> {props.name}</h3>
                   <p style={styleObject.centertext} className="card-text">Employee ID : <b>{props.id}</b> </p>
                  </>
              </div>
          </div>
    )
}