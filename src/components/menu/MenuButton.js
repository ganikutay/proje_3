import React from "react";
import './MenuButton.css';

/* const changeHash = (path) => {
    window.location.hash = path || "";
} */

const MenuButton = (props) => {
    
    return (
        <div className="MenuButton">
            <p onClick={ () => props.onClick(props.buttonData.path)} >{props.buttonData.buttonName}</p>  {/* buradaki path ve buttonName .json daki isimler */}
        </div>//onClick ile tiklandiginda, changeHash funciton ile window.location.hash i ordaki path neyse ona donustu veya bossa bos olur.
    );
}

export default MenuButton;
