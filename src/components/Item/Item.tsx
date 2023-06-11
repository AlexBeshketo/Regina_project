import React from 'react';
import c from './Item.module.css';
import Carousel from "nuka-carousel";
import {NavLink, useParams} from "react-router-dom";
import {products} from "../Content/Content";


export const Item = () => {


    const {name} = useParams()

    const product = products.find(el => el.name === name)
    if (!product) {
        return <div>No content!!!!!!</div>
    }


    return (
        <div className={c.container}>
            <div className={c.photo}>

                <Carousel wrapAround={true}>
                    <img src={product.img}/>
                </Carousel>
            </div>
            <div className={c.info_container}>
                <div className={c.about_name}>{product.name}</div>
                <div className={c.about_title}>{product.about.title}</div>
                <div className={c.about_size}>{product.size}</div>
                <div className={c.about_price}>{product.price}€</div>
                <button className={c.button}><NavLink id="kontaktai"
                                                      to='/contactForm'>Užsakyti</NavLink></button>
            </div>


        </div>
    )
}