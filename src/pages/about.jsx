import "./about.css"
import { useState } from 'react';

function About(){

    const [visible, setVisible] = useState(false);
    const [phoneVisible, setPhoneVisible] = useState(false);

    function toggleEmail(){
        setVisible(!visible);
    }

    function getEmail(){
        return visible ? 'ornelas.brayan@uabc.edu.mx' : '';
    }

    function validateCode(e){
        const text = e.target.value;
        
        if (text.toLowerCase() === "brayan"){
            setPhoneVisible(true);
        }else{
            setPhoneVisible(false);
        }
    }

    function getNumber(){
        return phoneVisible ? '471238484' : '';
    }


    return(
        <div className="about">
            <h1>About me</h1>
            <h3>Brayan Ornelas</h3>
            <h4>{getEmail()}</h4>
            <button className="btn btn-outline-dark" onClick={toggleEmail}>Show email</button>

            <hr />
            <p>Type the code to see my phone number</p>
            <input onChange={validateCode} placeholder="code" />
            <h6 className="mt-3">{getNumber()}</h6>
        </div>
    );
}

export default About;