import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
export default function Timesheetcalendar() {
    return (
        <><div className="row mt-3">
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
                <div className="col-12 text-end mt-4">
                    <button className="pinkbtn para2 me-3 px-3 py-1">
                        I details
                    </button>
                    <button className="outlinebtn me-3 px-3 py-1">
                        save
                    </button>
                    <button className="mutlicolourbtn me-3 para2 px-3 py-1">
                        Submit
                    </button>
                </div>
            </div></>
    )
}