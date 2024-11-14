"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logogif from "../assets/img/loginanimation.gif";
import handwave from "../assets/img/hi.png";
import logo from "../assets/img/employeez.png";
import Checkbox from "@mui/material/Checkbox";
import "../assets/img/login.css";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  validateUserId,
  validatePassword,
} from "../reusableComponent/validation";
import { Messages } from "../reusableComponent/messages";

export default function Login() {
  const [checked, setChecked] = React.useState(false);
  const [userId, setUserId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({
    userId: "",
    password: "",
    checkbox: "",
  });
  const router = useRouter();

  useEffect(() => {
    // Check if a userId was stored in localStorage
    const rememberedUserId = localStorage.getItem("rememberedUserId");
    if (rememberedUserId) {
      setUserId(rememberedUserId);
      setChecked(true); // Set "Remember Me" as checked
    }
  }, []);

  const successMessage = () => toast.success(Messages.success.submitted);

  // Handle checkbox change
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setErrors((prevErrors) => ({ ...prevErrors, checkbox: "" }));
    }
  };

  // Handle input change and set state
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "userId") setUserId(value);
    if (name === "password") setPassword(value);
  };

  // Validate inputs and submit form
  const handleSubmit = () => {
    // Validate userId and password
    const userIdError = validateUserId(userId);
    const passwordError = validatePassword(password);
    const checkboxError = checked
      ? ""
      : "You must agree to Remember Me to proceed.";

    setErrors({
      userId: userIdError,
      password: passwordError,
      checkbox: checkboxError,
    });

    // Check if there are any errors
    if (!userIdError && !passwordError && !checkboxError) {
      // Store userId in localStorage if checkbox is checked
      localStorage.setItem("rememberedUserId", userId);
      document.cookie = "auth=true; path=/; max-age=86400"; // Cookie expires in 1 day
      successMessage();
      router.push("/dashboard");
    }
  };

  return (
    <section className="login">
      <div className="container-fluid d-flex align-items-center justify-content-center h-100">
        <div className="row w-100">
          <div className="col-sm-6 logogif">
            <Image src={logogif} alt="" />
          </div>
          <div className="col-sm-6 align-items-center d-flex">
            <div className="logincard ps-md-5 ms-md-5">
              <div className="logo">
                <Image src={logo} alt="" />
              </div>
              <h4 className="heading d-flex align-items-center pt-4">
                Welcome to EmployEZ1!{" "}
                <Image src={handwave} className="ms-2" alt="" />{" "}
              </h4>
              <p className="shade para pt-1">
                Please sign-in to your account and start the adventure{" "}
              </p>
              <div className="form_filed">
                <input
                  className="ps-3 py-2 mt-2"
                  type="text"
                  placeholder="User ID"
                  name="userId"
                  value={userId}
                  onChange={handleInputChange}
                />
                {errors.userId && (
                  <p className="error-text mt-1">{errors.userId}</p>
                )}

                <input
                  className="ps-3 py-2 mt-3"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <p className="error-text mt-1">{errors.password}</p>
                )}

                <div className="row pt-2">
                  <div className="col-6">
                    <p className="shade mb-0 para">
                      <Checkbox
                        checked={checked}
                        onChange={handleChangeCheckbox}
                        inputProps={{ "aria-label": "controlled" }}
                      />{" "}
                      Remember me
                    </p>
                    {/* {errors.checkbox && (
                      <p className="error-text mt-1 ">{errors.checkbox}</p>
                    )} */}
                  </div>
                  <div className="col-6" style={{ alignSelf: "center" }}>
                    <p className="forgetpassword mb-0 para text-end">
                      <Link href="./forget_password">Forget password?</Link>
                    </p>
                  </div>
                </div>
                <div
                  className="mutlicolourbtn mt-2 py-1 text-center"
                  onClick={handleSubmit}
                >
                  Login
                </div>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
