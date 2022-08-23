import React from "react"
import "./Desk.scss"

function Desk({title, description, icon}:any){
    return (
        <div className="desk">
            <div className="desk-content">
                <div className="desk-icon">
                    {icon}
                </div>
                <div className="desk-content-desk">
                    <div className="desk-title">{title}</div>
                    <div className="desk-text">{description}</div>
                </div>
            </div>
        </div>
    )
}

export default Desk;
