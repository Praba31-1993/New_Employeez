'use client'
import Link from "next/link";
import Image from 'next/image'
import logogif from '../assets/img/dc8146_6fdde6e188a24aa4a8e82abb8e76b330~mv2.gif';
import logo from '../assets/img/107.png';
import * as React from 'react';
import  "../assets/img/login.css";
export default function FirstTimepassword() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return <section className="login">
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
                        <h4 className='heading d-flex align-items-center pt-4'>First-time password update</h4>
                        <p className="shade para pt-1">Please setup your password</p>
                        <div className="form_filed">
                        <input className="ps-3 py-2 mt-2" type="text" placeholder="Current password" />
                            <input className="ps-3 py-2 mt-2" type="text" placeholder="New password" />
                            <input className="ps-3 py-2 mt-2" type="text" placeholder="Conform password" />
                            <div className="orangebtn mt-3 py-1 text-center">Set password</div>
                        </div>
                        <div className="row pt-2">
                                <div className="col-12" style={{ alignSelf: "center" }}>
                                    <p className="forgetpassword mb-0 para text-end">
                                        <Link href="./logincomponent" >Revisit Login</Link>
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}