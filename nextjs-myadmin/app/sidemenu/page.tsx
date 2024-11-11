'use client'
import Link from "next/link";
import Image from 'next/image'
import logo from '../assets/img/107.png';
import multicolor from '../assets/img/Group 9244.png';
import "../sidemenu/sidemenu.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { relative } from "path";
import React, { useState, useEffect } from 'react';

export default function Sidemenu() {
   
   

    // Function to handle color click
    const handleColorClick = (classname: string) => {
        console.log("classname",classname);
        
        document.body.className = classname;
    };
    const handleColorClicks = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedColor = event.target.value; // Get the color from the input
        console.log("classname",selectedColor);
        
      };
      
      
    return <section className="sidemenu">
        <div className="container-fluid " style={{ position: "relative" }}>
            <div className='row w-100 p-2 ' >
                <div className="col-9 ">
                    <Image className=" ps-2 logoimg" src={logo} alt={""} />
                </div>
                <div className="col-3 px-0 text-end" style={{ alignSelf: "center" }}>
                    <FormControlLabel value="" control={<Radio />} label={undefined} />
                </div>
            </div>
            <div className='row w-100 p-2  ' >
                <div className="col-3"  style={{ alignSelf: 'center' }} onClick={() => handleColorClick('red')}>
                    <h1 className="red para">Red</h1>
                </div>
                <div className="col-3 px-0 text-end" style={{ alignSelf: 'center' }} onClick={() => handleColorClick('yellow')}>
                    <h1 className="yellow para">Yellow</h1>
                </div>
                <div className="col-3 px-0  text-end" style={{ alignSelf: 'center',position:"relative" }}>
                <Image className=" ps-2 w-100 logoimg" src={multicolor} alt={""} />
                <input style={{position:"absolute",opacity:"0",left:"0px",top:"0px"}} className="w-100 h-100  z-1111"
      type="color"
      id="favcolor"
      name="favcolor"
      onChange={handleColorClicks} // Use onChange to trigger when color changes
    />
                </div>
              
            </div>
        </div>
    </section>
}