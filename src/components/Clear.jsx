import React from "react"
import '../stylesheets/Clear.css'

const Clear = (props) => (
    <div className="clear" 
    onClick={props.manageClear}>
        Clear
    </div>
)

export default Clear