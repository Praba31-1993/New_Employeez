'use client'


import "./timesheet.css"
import * as React from 'react';
import { useEffect } from 'react';
import Monthlycalendar from "./monthlycalendar";
import Summarydetails from "./summarydetails";
import Listofholidays from "./listofholidays";
import Timesheetcalendar from "./timesheetscalendar";

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
                            <Timesheetcalendar/>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}



