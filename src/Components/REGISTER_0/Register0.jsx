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