import React from "react"
import * as ReactDOMClient from "react-dom/client"
import App from "./components/App"
import "./css/main.css"


// ReactDOM.render(React.createElement("input",{
//     placeholder: "Help text",
//     onClick: () => console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse Over") 
// }), document.getElementById("app"))

// ReactDOM.render(<input placeholder = "Help text"/>, document.getElementById("app"))

// const inputclick = () => console.log("Clicked")
// const mouseOver = () => console.log("Mouse Over")
// const el = <input placeholder = "Help text" onClick={inputclick} onMouseEnter={mouseOver}/>
// const app = document.getElementById("app")
// ReactDOM.render(el, app )

const app = document.getElementById("app")

// ReactDOMClient.render(el, app )

const dopApp = ReactDOMClient.createRoot(app)
dopApp.render(<App/>)