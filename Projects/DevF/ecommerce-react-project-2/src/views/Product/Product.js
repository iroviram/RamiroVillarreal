import React, { useState, useEffect } from 'react'
import './product.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';

function Product() {

    const { id } = useParams();
    const [item, setItem] = useState({});
    const nullImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.pngsrc\images\no-image-available.png"

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        console.log(token)
        const config = {
            headers: {
                Authorization: `JWT ${token}`
            }
        }
        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${id}`, config)
            .then((response) => {
                setItem(response.data)
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }, [])

    return (
        <div>
            <Navbar />
            <div className="section">
                <div className="product-column">
                    <div className="product-row  text-light">
                        <div className="product-image-container">
                            <img className="product-img" src={item.image !== undefined ? item.image : nullImage} alt="" />
                        </div>
                        <p className="product-name">{item.product_name}</p>
                        <span className="product-brand">{item.brand}</span>
                        <span className="product-price">${item.price}.00 MXN</span>
                        <button type="button" className="btn btn-outline-primary">Buy</button>
                        <span className="product-description">Description:</span>
                        <span className="product-description">{item.description}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
