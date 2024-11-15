'use client'


import "./timesheet.css"
import * as React from 'react';
import { useEffect } from 'react';
import Monthlycalendar from "./monthlycalendar";
import Summarydetails from "./summarydetails";
import Listofholidays from "./listofholidays";
import Timesheetcalendar from "./timesheetscalendar";
import Sidebar from "../sidebar/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import uploadicon from '../assets/img/upload-2-line.png';
import Outlinebutton from "../reusableComponent/outlinebtn";

export default function Timesheet() {


    useEffect(() => {
        // Add the dashboard background className when the component mounts
        document.body.classList.add('dashboard-body');
        // Clean up the effect to remove the className when the component unmounts
        return () => {
            document.body.classList.remove('dashboard-body');
        };
    }, []);


    return (
        <>
            <Sidebar>
                <section className="timesheet">
                    <div className="container-fluid mb-3">
                        <div className="row">
                            <div className="col-12 pt-3 pb-0">
                                <h2 className="heading textheader mb-0">Timesheet</h2>
                            </div>
                            <div className="col-lg-4 col-xxl-3 borderright" >
                                <div className="row">
                                    <div className="col-lg-12 col-sm-6">
                                        <div className="calendar">
                                            <Monthlycalendar />
                                        </div>
                                        <Summarydetails></Summarydetails>
                                    </div>
                                    <Listofholidays />
                                </div>
                            </div>
                            {/* timesheet */}
                            <div className="col-xxl-9 col-lg-8 col-md-12">
                                {/* timesheet */}
                                <Timesheetcalendar />
                                {/* hhhh */}
                            </div>
                        </div>
                    </div>

                </section>
                {/* <section className="showpopup showpopupactive">
                    <div className="summarysection">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 text-end">
                                    <FontAwesomeIcon className="my-2" icon={faXmark} />
                                </div>

                            </div>
                            <div className="row mt-3 px-5">
                                <div className="col-12 ">
                                    <div className="summarydetails p-3 m-2">
                                        <h5 className="para  textheader">Choose file </h5>
                                        <div className="fileupload py-4 d-flex align-items-center flex-column justify-content-center mt-3">
                                            <Image src={uploadicon} alt={""} />
                                            <h2 className="heading2 mt-2 textheader">Drag and drop your file here</h2>
                                            <p className="headindg unselectcolor">or</p>
                                            <Outlinebutton  color="#8C57FF" border="1px solid #8C57FF" text="Browse File" fontSize="12px"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </Sidebar>
        </>
    )
}



