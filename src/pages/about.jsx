import "./about.css"
import { useState } from 'react';

function About(){

    const [visible, setVisible] = useState(false);

    function toggleEmail(){
        setVisible(!visible);
    }

    function getEmail(){
        return visible ? 'camexpert@gmail.com' : '+1 (800) 531-314';
    }


    return(
        <div className="about">
            <h1 className="">About us</h1>
            <h3>Cam Expert</h3>
            <div className="desc">
                <h4>We specialize in selling Canon products with the best customer service</h4>
                <img className="img-width" src="./images/canon-img.jpg" alt="" />
            </div>
            <div className="ship">
                <h4>We have shipments all over the world.</h4>
            </div>
            
            <div className="button-marg">
                <h4>{getEmail()}</h4>
                <button className="btn btn-outline-dark" onClick={toggleEmail}>Show contact info</button>
            </div>


        </div>
    );
}

export default About;