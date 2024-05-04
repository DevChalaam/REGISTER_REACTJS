import React, { Component } from "react";
import "./Register3.css";

class Register3 extends Component {
    render() {
        return(
            <div className="main-container">
                <h4 className="txt-register">register</h4>

                {/* CONTAINER FORM */}
                <form action="#" method="post" className="container-form" id="formID">
                    {/* INPUT FULL NAME */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icon-form"> 
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    <input type="text" className="fullname-class" id="fullnameID" placeholder="Example : somchai" />

                    {/* INPUT LAST NAME */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icon-form"> 
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    <input type="text" className="lastname-class" id="lastnameID" placeholder="Example : jaidai" />

                    {/* INPUT USER NAME */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon-form">
                    <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
                    <input type="text" className="username-class" id="usernameID" placeholder="Example : somchaiJaidai" />

                    {/* INPUT EMAIL */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon-form">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    <input type="email" className="email-class" id="emailID" placeholder="Example : somchai.jaidai@gmail.com" />

                    {/* INPUT PASSWORD */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icon-form">
                    <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                    <input type="password" className="password-class" id="passwordID" placeholder="Example : somchai@!00jaidai" />

                    {/* INPUT CONFIRM PASSWORD */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon-form">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                    <input type="password" className="cfpassword-class" id="cfpasswordID" placeholder="Example : somchai@!00jaidai" />

                    <label className="container">remember me
                    <input type="checkbox" checked="checked" />
                    <span className="checkmark"></span></label>

                    <div className="container-link">
                        <a href="#" className="link-forgot">forgot password</a>
                    </div>

                    <button type="button" className="button-btn" onClick={this.functionCheckValueInput}>sign in</button>
                </form>

                <div className="container-signup">
                    <p className="txt-already">am already to login an account? <a href="#" className="link-login">login</a></p>
                </div>
            </div>
        )
    }

    // Script
    functionCheckValueInput = () => {
        let fullnameID = document.getElementById("fullnameID").value;
        let lastnameID = document.getElementById("lastnameID").value;
        let usernameID = document.getElementById("usernameID").value;
        let emailID = document.getElementById("emailID").value;
        let passwordID = document.getElementById("passwordID").value;
        let cfpasswordID = document.getElementById("cfpasswordID").value;

        if (!fullnameID) {
            window.alert("Please! enter your try agin Fullname.");
        } else if (!lastnameID) {
            window.alert("Please! enter your try agin Lastname.");
        } else if (!usernameID) {
            window.alert("Please! enter your try agin Username.");
        } else if (!emailID) {
            window.alert("Please! enter your try agin Email.");
        } else if (!passwordID) {
            window.alert("Please! enter your try agin Password.");
        } else if (!cfpasswordID) {
            window.alert("Please! enter your try agin Confirm password.");
        } else if (passwordID != cfpasswordID) {
            window.alert("Please! enter you Password and Confirm password match.");
        } else {
            console.log(`Sent data your Fullname : ${fullnameID} Lastname : ${lastnameID} \n Username : ${usernameID} \n Email : ${emailID} \n Password : ${passwordID} \n Confirm password : ${cfpasswordID}`);
        }

        document.getElementById("fullnameID").value = "";
        document.getElementById("lastnameID").value = "";
        document.getElementById("usernameID").value = "";
        document.getElementById("emailID").value = "";
        document.getElementById("passwordID").value = "";
        document.getElementById("cfpasswordID").value = "";
    };
};

export default Register3;