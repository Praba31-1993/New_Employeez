import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import Outlinebutton from '../reusableComponent/outlinebtn';
import Uploadfiles from './uploadfiles';
import { useState } from 'react';


export default function Timesheetcalendar() {
    const [open, setOpen] = useState(false)

    const addclassname = () => {
        setOpen(true)
    }
    return (
        <>
            {open && <Uploadfiles show={open} close={()=>setOpen(false)}/>}
            <div className="row mt-3">
                <div className="col-8">
                    <div className="currentweek d-flex align-items-center">
                        <h5 className="heading me-3 textheader mb-0">01-07 November 2024</h5>
                        <div className="approvestatus px-3 py-1 para">Approved</div>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <button className="outlinebtn px-3 py-1">
                        Upload  <FontAwesomeIcon className="ms-2" icon={faCirclePlus} />
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <table className="timesheettable my-2">
                        <tbody>
                            <tr className="totalweeks">
                                <th>
                                </th>
                                <th>
                                    <p className="textheader px-1 mb-0 para">Nov 01 (Mon) </p>
                                </th>
                                <th>
                                    <p className="textheader px-1 mb-0 para">Nov 02 (Tue) </p>
                                </th>
                                <th>
                                    <p className="textheader px-1 mb-0 para">Nov 03 (Wed) </p>
                                </th>
                                <th>
                                    <p className="textheader px-1 mb-0 para">Nov 04 (Thu) </p>
                                </th>
                                <th>
                                    <p className="textheader px-1 mb-0 para">Nov 05 (Fri) </p>
                                </th>
                                <th>
                                    <p className="textheader px-1 mb-0 para">Nov 06 (Sat) </p>
                                </th>
                                <th>
                                    <p className="textheader px-1 mb-0 para">Nov 07 (Sun) </p>
                                </th>
                                <th>
                                    <p className=" mb-0 px-1 para">Week Total</p>
                                </th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                        <tbody className="">
                            <tr className="timesheetfield ">
                                <td className="timesheetlist px-3 py-3">
                                    <div className="projectlist px-2 py-1 d-flex justify-content-center align-items-center">
                                        <div className="projectround "></div> <div className=" ms-2 para2">Waiting for
                                            project</div>
                                    </div>
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                            </tr>
                            <tr className="timesheetfield holiday">
                                <td className="timesheetlist px-3 py-3">
                                    <div className="projectlist px-2 py-1 d-flex justify-content-center align-items-center">
                                        <div className="projectround "></div> <div className=" ms-2 para2">Holiday</div>
                                    </div>
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                            </tr>
                            <tr className="timesheetfield ">
                                <td className="timesheetlist px-3 py-3">
                                    <div className="projectlist px-2 py-1 d-flex justify-content-center align-items-center">
                                        <div className="projectround "></div> <div className=" ms-2 para2">LOP</div>
                                    </div>
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                                <td className="inputfield px-2 py-2">
                                    <input type="text" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-12 d-flex  justify-content-end mt-4">
                    <div className="ms-3" onClick={()=>setOpen(prev=>!prev)} >
                        <Outlinebutton color="#FFF" border="1px solid #8c57ff" text="I details" fontSize="12px" background="#8c57ff"  />
                    </div>
                    <div className="ms-3">
                        <Outlinebutton color="#FF6F6F" border="1px solid #FF6F6F" text="Save" fontSize="12px" background="transparent" />
                    </div>
                    <div className="ms-3">
                        <Outlinebutton color="#FFF" border="1px solid #FF6F6F" text="Submit" fontSize="12px" background="#FF6F6F" />
                    </div>
                </div>
            </div></>
    )
}