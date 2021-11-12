import React from 'react'
import {BrowserRouter as Router,Route,Switch, Link} from 'react-router-dom';
import './items.css';
import { useItemContext } from '../../context/ItemContext';

const Items = ({
    key,
    name,
    image,
    brand,
    price
}) => {

    const context = useItemContext();

    if(image == null){
        image = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.pngsrc\images\no-image-available.png"
    }

    return (
        <Router>
            <Switch>
                <li className="item-container">
                    <div className="item-row">
                        <div className="image-container">
                            <img className="item-image" src={image} alt="" /> 
                        </div>
                        <p className="item-name">{name}</p>
                        <span className="item-brand">{brand}</span>
                        <span className="item-price">${price}.00 MXN</span>
                    </div>
                </li>
            </Switch>
        </Router>
    )
}

export default Items
