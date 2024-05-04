import React from "react";
import { Component } from "react";
import "./Register1.css";

class Register1 extends Component {
    render() {
        return(
            <div className="main-container">
                <h4 className="txt-createaccount">create account</h4>

                {/* FORM INPUT SIGN UP */}
                <form action="#" method="post" className="container-form">
                    <label htmlFor="#" className="text-fullname">full name </label>
                    <input type="text" className="input-fullname" id="fullName" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icon-fullname">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>

                    <label htmlFor="#" className="text-email">email address </label>
                    <input type="email" className="input-email" id="eMaill" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon-email">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>

                    <label htmlFor="#" className="text-phoneNumber">phone number : </label>
                    <input type="number" className="input-phoneNumber" id="phoneNumber" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon-phoneNumber">
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>

                    <label htmlFor="#" className="text-password">password : </label>
                    <input type="password" className="input-password" id="passWord" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon-password">
                    <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>

                    <label htmlFor="#" className="text-cfpassword">confirm password : </label>
                    <input type="password" className="input-cfpassword" id="cfpassWord" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon-cfpassWord">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>

                    {/* CHECKBOX */}
                    <label htmlFor="#" className="container">Agree with <b className="class-bold">Term & Conditons</b>
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span></label>

                    {/* BUTTON CREATE ACCOUNT */}
                    <button type="button" className="button-btn" onClick={this.functionCheckValue}>create account</button>
                </form>

                {/* LOGIN LINK */}
                <p className="txt-already">Already have an account? <a href="#" className="login-link">login</a></p>
            </div>
        )
    }

    functionCheckValue() {
        let fullName = document.getElementById("fullName").value;
        let eMaill = document.getElementById("eMaill").value;
        let phoneNumber = document.getElementById("phoneNumber").value;
        let passWord = document.getElementById("passWord").value;
        let cfpassWord = document.getElementById("cfpassWord").value;

        if (!fullName) {
            window.alert("Please! enter try agin your Fullname.");
        } else if (!eMaill) {
            window.alert("Please! enter try agin your Email.");
        } else if (!phoneNumber) {
            window.alert("Please! enter try agin your Phonenumber.");
        } else if (!passWord) {
            window.alert("Please! enter try agin your Password.");
        } else if (!cfpassWord) {
            window.alert("Please! enter try agin your Confirm password.");
        } else if (passWord != cfpassWord) {
            window.alert("Please! enter try your Password and Confirm password match.");
        } else {
            console.log(`Sent data your Fullname : ${fullName} Email : ${eMaill} Phonenumber : ${phoneNumber}
Password : ${passWord} Confirm password : ${cfpassWord} successfuly.`);
        }

        document.getElementById("fullName").value = "";
        document.getElementById("eMaill").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("passWord").value = "";
        document.getElementById("cfpassWord").value = "";
    };
};

export default Register1;