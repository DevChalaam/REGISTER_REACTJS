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