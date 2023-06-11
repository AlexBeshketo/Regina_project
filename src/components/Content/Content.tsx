import React from 'react';
import c from './Content.module.css';
import {NavLink} from "react-router-dom";
import {Item} from "../Item/Item";


import Aguonos from '../../image/aguonos.jpg'
import Auksinė_Harmonija from '../../image/auksine_harmonija.jpg'
import pavasario_žiedai from '../../image/pavasario_žiedai_1_1.jpg'
import vandenynas from '../../image/vandenynas.jpg'
import purpurinis_Vakaras from '../../image/purpurinis vakaras2.jpg'
import lietaus_nupraustos from '../../image/lietaus_nnupraustos_1.jpg'


export const products = [
    {
        id: 1,
        name: "Aguonos",
        price: 70,
        img: 'https://files.fm/thumb_show.php?i=9bh64xn93',
        size: '90x65',
        about: {
            title: "Drobė ant porėmio , akrilas, struktūrine pasta, aukso kontūrai"
        }
    },

    {
        id: 2,
        name: "Auksinė harmonija",
        price: 70,
        img: 'https://files.fm/thumb_show.php?i=hmkhqkyge',
        size: '40x40',
        about: {
            title: "Akrilas,aukso dazai,dekoratyviniai akmenukai"
        }
    },

    {
        id: 3,
        name: "Auksinė žaluma",
        price: 90,
        img: 'https://files.fm/thumb_show.php?i=kcc6843um',
        size: '60x80',
        about: {
            title: "Akrilas,struktūrinė pasta,dekoratyvinė perlamutrinė pasta"
        }
    },
    {
        id: 4,
        name: "Vandenynas",
        price: 90,
        img: vandenynas,
        size: '34x70',
        about: {
            title: "Akrilas,spec kartonas"
        }
    },

    {
        id: 5,
        name: "Purpurinis vakaras",
        price: 90,
        img: purpurinis_Vakaras,
        size: '50x70',
        about: {
            title: "Akrilas,drobė"
        }
    },

    {
        id: 6,
        name: "Lietaus nupraustos",
        price: 80,
        img: lietaus_nupraustos,
        size: '60x60',
        about: {
            title: "Akrilas,struktūrinė pasta,dekoratyviniai akmenukai"
        }
    },

]

export const Content = () => {



    return (
        <div className={c.container_wrapper}>


            {
                products.map((el: any, index) => {

                return (


                    <div className={c.items_bottom_margin}>
                        <div className={c.items_container}>

                            <NavLink onClick={() => <Item key={el.id} />} to={'/paveikslai/' + el.name}>
                                <div className={c.items_flex}>

                                    <div className={c.items_photo}>

                                        <ul className={c.hover_effect_scale}>
                                            <li>

                                                <img src={el.img} alt=""/>
                                                <div>
                                                    <h3>{el.name}</h3>
                                                    <a href="">Plačiau</a>
                                                </div>

                                            </li>
                                        </ul>

                                    </div>
                                    <div className={c.items_text}>
                                        <div className={c.items_name}><span>{el.name}</span></div>
                                        <div className={c.items_title}><span>{el.about.title}</span></div>
                                        <div className={c.items_price}> {el.price}€</div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                )
                })
            }


        </div>
    )
}