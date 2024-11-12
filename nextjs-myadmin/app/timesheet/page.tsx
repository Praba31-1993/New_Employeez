"use client";

import "./timesheet.css";
import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import calendar from "../assets/img/calendar_icon.png";
import user from "../assets/img/Ellipse 14.png";
import carry from "../assets/img/carry_on_bag_icon.png";
import gift from "../assets/img/gift_icon.png";
import docs from "../assets/img/docs.png";
import Image from "next/image";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function Timesheet() {
  useEffect(() => {
    // Add the dashboard background className when the component mounts
    document.body.classList.add("dashboard-body");
    // Clean up the effect to remove the className when the component unmounts
    return () => {
      document.body.classList.remove("dashboard-body");
    };
  }, []);

  useEffect(() => {
    // Add the dashboard background className when the component mounts
    document.body.classList.add("dashboard-body");
    // Clean up the effect to remove the className when the component unmounts
    return () => {
      document.body.classList.remove("dashboard-body");
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
            <div className="col-lg-4 col-xxl-3 borderright">
              <div className="row">
                <div className="col-lg-12 col-sm-6">
                  <div className="calendar">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DateCalendar"]}>
                        <DateCalendar views={["year", "month", "day"]} />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                  <div className="d-flex pt-2 align-items-center">
                    <div
                      className="round mr-2"
                      style={{ backgroundColor: "#14E002" }}
                    ></div>
                    <p className="para mb-0 unselectcolor">
                      Total regular (Billable) hrs: 05
                    </p>
                  </div>
                  <div className="d-flex pt-2 align-items-center">
                    <div className="round mr-2"></div>
                    <p className="para mb-0 unselectcolor">
                      Total hrs (Summary view): 05
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-6">
                  {/* timesheet approver */}
                  <div className="timesheetdetails  align-items-center d-flex mt-4">
                    <Image src={calendar} alt={""} />
                    <p className="para ps-2 mb-0 unselectcolor">
                      Timesheet approver
                    </p>
                  </div>
                  <div className="approverlist  align-items-center d-flex mt-2">
                    <Image src={user} alt={""} />
                    <div className="roles">
                      <h5 className="para ps-2 mb-0 ">Timesheet approver</h5>
                      <p className="para2 ps-2 mb-0 mt-1 shade">
                        Timesheet approver
                      </p>
                    </div>
                  </div>
                  {/* list of holidays */}
                  <div className="timesheetdetails mb-1 align-items-center d-flex mt-4">
                    <Image src={gift} alt={""} />
                    <p className="para ps-2 mb-0 unselectcolor">
                      List of holidays
                    </p>
                  </div>
                  <div className="d-flex pt-1 align-items-center">
                    <div className="round mr-2"></div>
                    <p className="para mb-0 textheader">Diwali 31 Oct 2024</p>
                  </div>
                  <div className="d-flex pt-1 align-items-center">
                    <div className="round mr-2"></div>
                    <p className="para mb-0 textheader">Extended 01 Nov 2024</p>
                  </div>
                  {/* vacation */}
                  <div className="timesheetdetails mb-1 align-items-center d-flex mt-4">
                    <Image src={carry} alt={""} />
                    <p className="para ps-2 mb-0 unselectcolor">Vacations</p>
                  </div>
                  <div className="d-flex pt-1 align-items-center">
                    <div className="vacantionround mr-2"></div>
                    <p className="para mb-0 textheader">23 Oct 2024</p>
                  </div>
                  <div className="d-flex pt-1 align-items-center">
                    <div className="vacantionround mr-2"></div>
                    <p className="para mb-0 textheader">
                      26 Dec 2024 to 27 Dec 2024
                    </p>
                  </div>
                  {/* view files */}
                  <div
                    className="accordion accordion-flush mt-4"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header " id="flush-headingOne">
                        <button
                          className="accordion-button p-0 unselectcolor para collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          View file
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body py-2 px-3 mt-3">
                          <div className="timesheetdetails  align-items-center d-flex ">
                            <Image src={docs} alt={""} />
                            <p className="para ps-2 mb-0 unselectcolor">
                              Document
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* timesheet */}
            <div className="col-xxl-9 col-lg-8 col-md-12">
              <div className="row">
                <div className="col-8">
                  <div className="currentweek d-flex align-items-center">
                    <h5 className="heading me-3 textheader mb-0">
                      01-07 November 2024
                    </h5>
                    <div className="approvestatus px-3 py-1 para">Approved</div>
                  </div>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <button className="uploadbtn px-3 py-1">
                    Upload{" "}
                    <FontAwesomeIcon className="ms-2" icon={faCirclePlus} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* summary of period */}
        <div className="showpopup">
          <div className="container-fluid">
            <div className="row">
              <div className=""></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
