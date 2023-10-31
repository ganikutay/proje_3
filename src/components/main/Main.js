//FONKSIYON COMPONENT (Main isimli component)
import React from "react";
import './Main.css';

const Main = (props) => {
    console.log(props);
    document.title = props.title;
    //document.title ile sayfanin basligini degistirdik. Burada props.title yerine " " string degeride girebilirdik.
    // <p> etiketleri arasina da gelen metni yazdirdik.
    return (
        <div className="Main">
            <p>{props.text}</p>
        </div>
    );
}

export default Main;