import React from 'react'
import './SubmitSuccess.css';
import Vector from '../images/Vector.png';
import Vector2 from '../images/Vector2.png';
import Vector3 from '../images/Vector3.png';
import Vector4 from '../images/Vector4.png';

export default function SubmitSuccess() {
    return (
        <div>
            <div className="submitBody">
                <div className="submitItem1">
                    <img src={Vector4} className="headImg" alt="img" />
                    <img src={Vector} className="bodyImg" alt="img" />
                    <p className="thankyou">Thank you</p>
                    <p className="submitDescription p1">Your Application was successfully submitted.</p>
                </div>
                <div className="submitItem2">
                
                    <img src={Vector2} className="tickImg" alt="tick" />
                    <img src={Vector3} className="circleImg" alt="tick" />
                    <p className="thankyou">Application Submitted!</p>
                    <div className="desc">
                        <p className="smallTitle">Successfully submitted on 13/09/2021</p>
                        <p className="submitDescription">Your Application number is PS09878</p>
                    </div>
                        <p className="smallText">You can check the status of this application by visiting “Application” in the main menu bar.</p>
                </div>
            </div>
        </div>
    )
}
