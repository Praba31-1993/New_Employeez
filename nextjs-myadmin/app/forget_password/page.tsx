'use client'
import Link from "next/link";
import Image from 'next/image'
import logogif from '../assets/img/dc8146_6fdde6e188a24aa4a8e82abb8e76b330~mv2.gif';
import logo from '../assets/img/107.png';
import lock from '../assets/img/lock.png';
import React, { useState, useEffect } from 'react';
import Router from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/navigation";
import  "../assets/img/login.css";
export default function forgetpassword() {
   
    
    const router = useRouter()
    // Function to be executed when the button is clicked
    const handleClick = () => {
      // Your custom logic here (e.g., validate OTP, log analytics, etc.)
      console.log('OTP verification clicked')
  
      // Now manually navigate to the /setpassword page
      router.push('/set_password')
    }
    // State to control visibility of OTP input and Verify button
    const [otpVisible, setOtpVisible] = useState(false);
    const [timer, setTimer] = useState(30); // Timer state initialized to 30 seconds

    // Handler for Verify button click
    const handleVerifyClick = () => {
        setOtpVisible(true);
        setTimer(30); // Reset timer when OTP is shown
    };

    // Timer effect
    useEffect(() => {
        if (otpVisible && timer > 0) {
            const countdown = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);

            // Clear interval on unmount or when timer reaches 0
            return () => clearInterval(countdown);
        }
    }, [otpVisible, timer]);
    

        return  <section className="login">
            <div className="container-fluid d-flex align-items-center justify-content-center h-100" >
            <div className='row w-100'>
                <div className='col-sm-6 logogif'>
                    <Image src={logogif} alt={""} />
                </div>
                <div className='col-sm-6 align-items-center  d-flex' >
                    <div className='logincard ps-md-5 ms-md-5'>
                        <div className="logo">
                            <Image src={logo} alt={""} />
                        </div>
                        <h4 className='heading d-flex align-items-center pt-4'>Forgot password<Image src={lock} className="" alt={""} /> </h4>
                            <p className="shade para pt-1">Please enter your registered email or mobile no </p>
                            <div className="form_filed">
                                {/* Email/Phone input */}
                                <input className="ps-3 py-2 mt-2" type="text" placeholder="Enter your Verified email or Number" />

                                {/* Conditionally render OTP input based on otpVisible */}
                                {otpVisible && (
                                    <input className="ps-3 py-2 mt-2" type="text" placeholder="Enter OTP" />
                                )}

                                {/* Link to resend OTP, shown when OTP is visible */}
                                {otpVisible && (
                                    <div className=" pt-2 text-end timer">
                                        <h6 className="para mb-0 shade ">{timer > 0 ? `00:${timer < 10 ? `0${timer}` : timer}` : ''}</h6>
                                        <p className="forgetpassword mb-0 para text-end">
                                            {timer === 0 && (
                                                <Link href={""} >
                                                    <FontAwesomeIcon icon={faRotateLeft} /> Resend OTP
                                                </Link>
                                            )}
                                        </p>
                                    </div>
                                )}

                                {/* Verify button only shown when OTP is not visible */}
                                {!otpVisible && (
                                    <div
                                        className="mutlicolourbtn mt-3 py-1 text-center"
                                        onClick={handleVerifyClick}  // Trigger the state change on click
                                        style={{ cursor: "pointer" }}
                                    >
                                        Continue
                                    </div>
                                )}

                                {otpVisible && (
                                    <div
                                        className="mutlicolourbtn mt-3 py-1 text-center"
                                        style={{ cursor: "pointer" }}   onClick={handleClick}
                                    >
                                        Verify OTP
                                    </div>
                                )}
                            </div>
                            <div className="row pt-2">
                                <div className="col-12" style={{ alignSelf: "center" }}>
                                    <p className="forgetpassword mb-0 para text-end">
                                        <Link href="./login" >Revisit Login</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


  
};