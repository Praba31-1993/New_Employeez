"use client";
import Link from "next/link";
import Image from "next/image";
import logogif from "../assets/img/dc8146_6fdde6e188a24aa4a8e82abb8e76b330~mv2.gif";
import handwave from "../assets/img/hi.png";
import logo from "../assets/img/107.png";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import "../assets/img/login.css";
import { useRouter } from "next/navigation";
// import { useColor } from '../ColorContext/page';

export default function Login() {
  // const { selectedColor } = useColor();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const router = useRouter();
  // Function to be executed when the button is clicked
  const handleClick = () => {
    // Your custom logic here (e.g., validate OTP, log analytics, etc.)
    console.log("OTP verification clicked");
    document.cookie = "auth=true; path=/; max-age=86400"; // Cookie expires in 1 day (86400 seconds)

    // Now manually navigate to the /setpassword page
    router.push("/sidemenu");
  };
  return (
    <section className="login">
      <div className="container-fluid d-flex align-items-center justify-content-center h-100">
        <div className="row w-100">
          <div className="col-sm-6 logogif">
            <Image src={logogif} alt={""} />
          </div>
          <div className="col-sm-6 align-items-center  d-flex">
            <div className="logincard ps-md-5 ms-md-5">
              <div className="logo">
                <Image src={logo} alt={""} />
              </div>
              <h4 className="heading d-flex align-items-center pt-4">
                Welcome to EmployEZ1!{" "}
                <Image src={handwave} className="ms-2" alt={""} />{" "}
              </h4>
              <p className="shade para pt-1">
                Please sign-in to your account and start the adventure{" "}
              </p>
              <div className="form_filed">
                <input
                  className="ps-3 py-2 mt-2"
                  type="text"
                  placeholder="User ID"
                />
                <input
                  className="ps-3 py-2 mt-3"
                  type="text"
                  placeholder="Password"
                />
                <div className="row pt-2">
                  <div className="col-6">
                    <p className="shade mb-0 para ">
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />{" "}
                      Remember me
                    </p>
                  </div>
                  <div className="col-6" style={{ alignSelf: "center" }}>
                    <p className="forgetpassword mb-0 para text-end">
                      <Link href="./forget_password">Forget password?</Link>
                    </p>
                  </div>
                </div>
                <div
                  className="mutlicolourbtn mt-2 py-1 text-center"
                  onClick={handleClick}
                >
                  Login
                </div>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
