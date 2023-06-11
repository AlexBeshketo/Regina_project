import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header = () => {

    return <>
        <header>
            <div className={h.header_container}>

                <div className={h.flex_list}>


                    {/*<Link to={`contacts/1`}>Your Name</Link>*/}
                    <div className={h.category}>
                        <ul>
                            <li><NavLink id="paveikslai"
                                         to='/'><span>Paveikslai</span></NavLink></li>
                            <li><NavLink id="aboutUs"
                                         to='/apieMus'><span>Apie mus</span></NavLink></li>
                            <li><NavLink id="kontaktai"
                                         to='/contactForm'><span>Kontaktai</span></NavLink></li>
                        </ul>


                    </div>


                    {/*<Categories/>*/}

                    {/*<NavLink to="/all">*/}
                    {/*    <div className={h.buy_icon}>*/}
                    {/*        <img className={h.buy_icon_greenBasket} src={BuyLogo} alt="BuyLogo"/>*/}
                    {/*    </div>*/}
                    {/*</NavLink>*/}

                    {/*/!*third block of icons *!/*/}
                    {/*<CurrencyAndShoppingCart/>*/}
                    {/*/!*<MiniCart/>*!/*/}

                </div>
            </div>

        </header>

    </>
};