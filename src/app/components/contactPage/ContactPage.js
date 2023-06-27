"use client"; // obligation de le mettre depuis next v13 👈🏽
import React from 'react';
import '../../../../public/css/Contact.css';
import Typed from "react-typed";

const ContactPage = () => {

    return (
        <div id='contactContainer'>
            <section>
                <header>
                    <div style={{background:'#940303'}}></div>
                    <div style={{background:'#DCC600'}}></div>
                    <div style={{background:'#299F00'}}></div>
                </header>
                <div>
                    <Typed strings={[`
                    \/ /____/ v. 2.36.0<br></br>
                    Copyright (c) 2023 Ezechiel.Felten</><br></br>
                    ezechiel@ezeflt ~ % pwd<br></br>
                    /Users/ezechiel/portfolio<br></br>
                    Email : <a href="mailto:feltenezechiel1@gmail.com">feltenezechiel1@gmail.com</a><br></br>
                    Téléphone: <a href="tel:+33749964039">+33749964039</a><br></br>
                    Localisation : <span>Île de France</span><br></br>
                    __________________________<br></br>
                    N’hésitez pas à me contacter pour plus de détails.<br></br>
                     >cmd
                    `]} startDelay={100} typeSpeed={8} showCursor={true}><p></p></Typed>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;