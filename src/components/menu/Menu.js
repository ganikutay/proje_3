//CLASS COMPONENT (Menu isimli component)
import React from "react";
import './Menu.css';
import MenuButton from "./MenuButton";
import PropTypes from 'prop-types';

export default class Menu extends React.Component {


// MenuButton.js fonksiyonu
    changeHash = (path) => {  //bidaha const yazmiyoruz cunku zaten MenuButton da tanimlandi.
        window.location.hash = path || "";
    }



    render(props) {

        const menuData = [] = this.props.menuData // hata yok. sadece bos oldugunu bildiriyor bize.

        return (
            <div className="Menu">
                {
                    menuData.map(item => (//burada hangisine tiklarsa item e o atanir ve buttonDataya aktarili
                        <MenuButton buttonData={item} onClick={this.changeHash} />//buttonData ya item. onClick olunca this.changeHash calisacak.
                    ))
                }
            </div>
        )
    }
}
//defaultProps, App.js ye yanlis data giderse devreye girmesi icin.
Menu.defaultProps = {
    menuData : [
        {
            "buttonName": "Button 1",
            "path": "#1"
        },
        {
            "buttonName": "Button 2",
            "path": "#2"
        }
    ]
}

Menu.propTypes = {
    menuButonlari: PropTypes.string
}