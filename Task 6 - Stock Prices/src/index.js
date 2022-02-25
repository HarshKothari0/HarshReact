import ReactDOM from "react-dom";
import App from "./classComponent/Stock";
import apilinks from "./data/apilinks";

console.log(apilinks)
ReactDOM.render((
    <div>
        {apilinks.map((apiurl) =>{
            return <App apiurl={apiurl}></App>
        })}
    </div>
), document.getElementById("root"))
