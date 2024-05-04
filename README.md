# REGISTER-REACTJS

🎓 THIS REGISTER WEBSITE WITH REACTJS USING FOR LEARNING AND PORTFOLIO AND CHALLENGES FOR GET CERTIFICATE ⚛️✨

###### RESULT WEBSITE REGISTER 0

![Register_0_website](https://github.com/DevChalaam/LOGIN_REACTJS/assets/124075393/d18e0fcd-1e6c-49d5-b497-d1ce21b83a94)

###### CODE REACTJS OR JAVASCRIPT EXTENTION

```jsx
import React from "react";
import { Component } from "react";
import "./Register0.css";

class Register0 extends Component {
    render() {
        return(
            <div className="main-container">
                <h4 className="txt-signup">sign up</h4>

                <form action="#" method="post" className="form-container">
                    <label htmlFor="#" className="txt-email">Email : </label>
                    <input type="email" className="input-email" id="eMail" />

                    <label htmlFor="#" className="txt-password">Password : </label>
                    <input type="password" className="input-password" id="passWord" />

                    <button className="button-btn" onClick={this.functionCheckValue}>sign up</button>
                </form>

                <p className="text-or">-------------------- OR --------------------</p>

                <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&hl=th&ifkv=AaSxoQzEYMxIDy75TEIsGRjX94D2ApNmT-q3Q4h9S-9QwilYR7yw4ym8KGTCmcYcmntMWuxleZlm&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S889367543%3A1714122267177017&theme=mn&ddm=0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="icon-google">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                </a>

                <a href="https://www.facebook.com/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon-facebook">
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                </a>

                <a href="https://twitter.com/?lang=th">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon-x-twitter">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                </a>
            </div>
        )
    }

    functionCheckValue = () => {
        let eMail = document.getElementById("eMail").value;
        let passWord = document.getElementById("passWord").value;

        if (!eMail) {
            window.alert("Please! enter your Email.");
        } else if (!passWord) {
            window.alert("Plases! enter your Password.");
        } else {
            console.log(`Sent data your Email : ${eMail} Password : ${passWord} successfuly.`);
        }

        document.getElementById("eMail").value = "";
        document.getElementById("passWord").value = "";
    };
};

export default Register0;
```

###### RESULT WEBSITE REGISTER 1

![REGISTER_1_WEBSITE](https://github.com/DevChalaam/LOGIN_REACTJS/assets/124075393/2751e5c6-f8a0-4224-8a73-d2637d1ec632)

###### CODE REACTJS OR JAVASCRIPT EXTENTION

```jsx
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
```

###### RESULT WEBSITE REGISTER 2

![REGISTER_2_WEBSITE](https://github.com/DevChalaam/LOGIN_REACTJS/assets/124075393/adf7b054-bdde-497f-9656-9a019c71ab8f)

###### CODE REACTJS OR JAVASCRIPT EXTENTION

```jsx
import React, { Component } from "react";
import "./Register2.css";

class Register2 extends Component {
    render() {
        return(
            <div className="main-container">
                <h1 className="txt-signup">sign up</h1>

                <form action="#" method="post" className="container-form" id="idForm-container">
                    <input type="text" className="input-username" id="userName" placeholder="Username" />

                    <input type="email" className="input-email" id="eMail" placeholder="Email" />

                    <input type="password" className="input-password" id="passWord" placeholder="Password" />

                    <input type="password" className="input-cfpassWord" id="cfpassWord" placeholder="Confirm password" />

                    <button type="button" className="button-btn" onClick={this.functionCheckInput}>create account</button>
                </form>
            </div>
        )
    }

    // SCRIPT REGISTER
    functionCheckInput() {
        let userName = document.getElementById("userName").value;
        let eMail = document.getElementById("eMail").value;
        let passWord = document.getElementById("passWord").value;
        let cfpassWord = document.getElementById("cfpassWord").value;

        if (!userName) {
            window.alert("Please! enter your try agin Username.");
        } else if (!eMail) {
            window.alert("Please! enter your try agin Email.");
        } else if (!passWord) {
            window.alert("Please! enter your try agin Password.");
        } else if (!cfpassWord) {
            window.alert("Please! enter your try agin Confirm password.");
        } else if (passWord != cfpassWord) {
            window.alert("Please enter your try agin Password and Confirm password match.");
        } else {
            console.log(`Sent data your Username ${userName} Email : ${eMail} Password :  ${passWord} Confirm password : ${cfpassWord} successfuly.`);
        }

        document.getElementById("userName").value = "";
        document.getElementById("eMail").value = "";
        document.getElementById("passWord").value = "";
        document.getElementById("cfpassWord").value = "";
    };
};

export default Register2;
```

###### RESULT WEBSITE REGISTER 3

![REGISTER_3_WEBSITE](https://github.com/DevChalaam/LOGIN_REACTJS/assets/124075393/9f305c3b-66fe-4e36-bf89-f408db24d648)

###### CODE REACTJS OR JAVASCRIPT EXTENTION
```jsx
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
```