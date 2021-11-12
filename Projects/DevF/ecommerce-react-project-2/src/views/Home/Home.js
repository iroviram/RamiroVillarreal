import React,{useState} from 'react';
import './home.css';
import Navbar from '../../Components/Navbar/Navbar';
import { useItemContext } from '../../context/ItemContext';
import {Link} from 'react-router-dom';

const Home = ()=>{

    const context = useItemContext();
    const nullImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.pngsrc\images\no-image-available.png"

    return (
        <div>
            <Navbar/>

            <section>
                {
                    context.items.length === 0
                        ? <h1>Loading</h1>
                        : context.items.map((item) => (
                            <Link to={'/product/'+item._id}  key={item._id} className="item-container card bg-dark">
                                <div className="item-row card-body text-light">
                                    <div className="image-container">
                                        <img className="item-image" src={item.image == null ? nullImage : item.image} alt="" />
                                    </div>
                                    <p className="item-name">{item._name}</p>
                                    <span className="item-brand">{item.brand}</span>
                                    <span className="item-price">${item.price}.00 MXN</span>
                                </div>
                            </Link>
                        ))
                }
            </section>
        </div>
    )
}



export default Home
