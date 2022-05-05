import React from 'react'
import InputField from "./InputField";
import {BsTelephoneFill,BsPhoneFill} from 'react-icons/bs';
import {MdLocationOn,MdEmail} from 'react-icons/md';

function Contact() {
    return (
        <div className="contact">
            <div className="contactP">
                <p><b><i>Phone <BsTelephoneFill/></i></b> 011 5555 222 <b><i>or</i></b> <BsPhoneFill/> 061 111222</p>
                <p><b><i>Address <MdLocationOn/></i></b> Vojvode Stepe 132</p>
                <p><b><i>E-mail <MdEmail/></i></b> booksforyou@gmail.com </p>
                <InputField/>
            </div>
            
        </div>
    )
}

export default Contact
