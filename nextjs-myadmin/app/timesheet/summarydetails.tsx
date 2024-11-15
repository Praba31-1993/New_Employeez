import { useState } from "react";
import training from '../assets/img/model_training.png';
import sick from '../assets/img/sick.png';
import casual from '../assets/img/energy_savings_leaf.png';
import dollar from '../assets/img/dollar.png';
import bag from '../assets/img/carry_on_bag.png';
import maternity from '../assets/img/pregnancy.png';
import paternity from '../assets/img/account_child_invert.png';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Summarycards from "./summarycards";
export default function Summarydetails() {
    // State to control the popup active class
    const [isPopupActive, setIsPopupActive] = useState(false);

    // Toggle the active class when the div is clicked
    const handlePopupClick = () => {
        setIsPopupActive(!isPopupActive);
    }

    const LeaveTypes = [
        { name: 'LOP', noOfLeave: "2", img: dollar },
        { name: 'Maternity leave', noOfLeave: "2", img: maternity },
        { name: 'Sick leave', noOfLeave: "2", img: sick },
        { name: 'Comp Off', noOfLeave: "2", img: dollar },
        { name: 'Holiday', noOfLeave: "2", img: bag },
        { name: 'Traning', noOfLeave: "2", img: training },
        { name: 'Earned leave', noOfLeave: "2", img: sick },
        { name: 'Paternity leave', noOfLeave: "2", img: paternity },
        { name: 'Casual leave', noOfLeave: "2", img: casual },

    ]
    return (
        <><div className="d-flex pt-2 align-items-center" style={{ cursor: "pointer" }} onClick={handlePopupClick}><div className="round mr-2" style={{ backgroundColor: "#14E002" }}></div><p className="para mb-0 unselectcolor">Total regular (Billable) hrs: 05</p></div><div className="d-flex pt-2 align-items-center"><div className="round mr-2"></div><p className="para mb-0 unselectcolor">Total hrs (Summary view): 05</p></div>
            {/* summary of period */}
            <section className={`showpopup ${isPopupActive ? 'showpopupactive' : ''}`}>
                <div className="summarysection">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 text-end">
                                <FontAwesomeIcon className="my-2" icon={faXmark} onClick={handlePopupClick} />
                            </div>
                            <div className="col-12">
                                <div className="summary py-3 d-flex justify-content-between align-items-center">
                                    <h5 className="heading me-3 textheader mb-0">Summary for period</h5>
                                    <h5 className="heading me-3 textheader mb-0">01-07 November 2024</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            {
                                LeaveTypes.map((leave, index) => (
                                    <div key={index} className="col-lg-3 py-2">
                                        <Summarycards leaveData={leave} />
                                    </div>
                                ))

                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
