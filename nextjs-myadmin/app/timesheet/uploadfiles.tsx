
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import uploadicon from '../assets/img/upload-2-line.png';
import Outlinebutton from "../reusableComponent/outlinebtn";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useEffect, useState } from "react";
import Listicon from "../reusableComponent/listicon";




export default function Uploadfiles({show,close }:any) {
      
   

    const [files, setFiles] = useState<File[]>([]); // Explicitly define type as File[]
    // State to control the popup active class
    const [isPopupActive, setIsPopupActive] = useState(false);

    // Toggle the active class when the div is clicked
    const addclassname = () => {
        setIsPopupActive(!isPopupActive);
    }
    // Handle file selection
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files); // Convert FileList to an array
            setFiles((prevFiles) => [...prevFiles, ...selectedFiles]); // Update state
            console.log("files", selectedFiles);
        }
        console.log("files", files);

    };
    // Handle file removal
    const handleRemoveFile = (index: any) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

console.log("show",show);

    return (<section className={`showpopup ${show ? 'showpopupactive' : ''}`}>
        <div className="summarysection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-end">
                        <FontAwesomeIcon className="my-2" icon={faXmark} onClick={close} />
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
                                <Outlinebutton color="#8C57FF" border="1px solid #8C57FF" text="Browse File" fontSize="12px" />
                                <input
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                    style={{ display: "block", marginBottom: "1rem" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2 ps-3">
                        <h4 className="para textheader">Number of files: <span className="text-black fs-6">04</span></h4>
                    </div>
                    <div className="col-12">

                        {files.map((file, index) => (
                            <Listicon key={index} text={file.name} remove={() => handleRemoveFile(index)} />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}