import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {AboutUs} from "./components/AboutUs/AboutUs";
import {Route, Routes, Navigate} from "react-router-dom";
import {Item} from "./components/Item/Item";
import {ContactForm} from "./components/Contacts/ContactForm";



function App() {
    return (
        <>
            <div className="main_width100">
                <div className="container_width80">


                    <Header/>
                    <Routes>

                        <Route path={'/'}  index element={<Content/>}/>
                        <Route path={'/apieMus'} element={<AboutUs/>}/>
                        <Route path="/paveikslai/:name" element={<Item/>} />
                        <Route path="/contactForm" element={<ContactForm/>} />
                        <Route path='/404' element={<h1>Page not Found</h1>}/>

                        <Route path='*' element={<Navigate to='/'/>}/>
                    </Routes>





                    {/*<HomePage/>*/}
                    {/*<CartOfProduct/>*/}
                    {/*<ShoppingCart/>*/}

                </div>
            </div>
        </>
    );
};

export default App;
