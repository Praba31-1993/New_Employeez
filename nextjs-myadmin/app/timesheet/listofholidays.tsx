
import calendar from '../assets/img/calendar_icon.png';
import user from '../assets/img/Ellipse 14.png';
import carry from '../assets/img/carry_on_bag_icon.png';
import gift from '../assets/img/gift_icon.png';
import docs from '../assets/img/docs.png';
import Image from 'next/image';

export default function Listofholidays() {
    return (
        <div className="col-lg-12 col-sm-6">
            {/* timesheet approver */}
            <div className="timesheetdetails  align-items-center d-flex mt-4">
                <Image src={calendar} alt={""} />
                <p className="para ps-2 mb-0 unselectcolor">Timesheet approver</p>
            </div>
            <div className="approverlist  align-items-center d-flex mt-2">
                <Image src={user} alt={""} />
                <div className="roles">
                    <h5 className="para ps-2 mb-0 ">Timesheet approver</h5>
                    <p className="para2 ps-2 mb-0 mt-1 shade">Timesheet approver</p>
                </div>
            </div>
            {/* list of holidays */}
            <div className="timesheetdetails mb-1 align-items-center d-flex mt-4">
                <Image src={gift} alt={""} />
                <p className="para ps-2 mb-0 unselectcolor">List of holidays</p>
            </div>
            <div className="d-flex pt-1 align-items-center"><div className="round mr-2" ></div><p className="para mb-0 textheader">Diwali 31 Oct 2024</p></div>
            <div className="d-flex pt-1 align-items-center"><div className="round mr-2" ></div><p className="para mb-0 textheader">Extended 01 Nov 2024</p></div>
            {/* vacation */}
            <div className="timesheetdetails mb-1 align-items-center d-flex mt-4">
                <Image src={carry} alt={""} />
                <p className="para ps-2 mb-0 unselectcolor">Vacations</p>
            </div>
            <div className="d-flex pt-1 align-items-center"><div className="vacantionround mr-2" ></div><p className="para mb-0 textheader">23 Oct 2024</p></div>
            <div className="d-flex pt-1 align-items-center"><div className="vacantionround mr-2" ></div><p className="para mb-0 textheader">26 Dec 2024 to 27 Dec 2024</p></div>
            {/* view files */}
            <div className="accordion accordion-flush mt-4" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header " id="flush-headingOne">
                        <button className="accordion-button p-0 unselectcolor para collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            View file
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body py-2 px-3 mt-3">
                            <div className="timesheetdetails  align-items-center d-flex ">
                                <Image src={docs} alt={""} />
                                <p className="para ps-2 mb-0 unselectcolor">Document</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

