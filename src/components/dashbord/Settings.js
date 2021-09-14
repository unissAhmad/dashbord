import React from 'react'
import './Settings.css';
export default function Settings(props) {
    return (
        <div>
            <h1 className="settingsHeading">Settings</h1>
            <div className="dashbordContainer">
            <div className="dashbordComponent">
                   <div className="item item1">
                        <div className="content"><p className="title">Push notifications</p></div>
                        <div className="button">
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                   </div>
                   <div className="item item2">
                        <div className="content"><p className="title">Cookie Settings</p></div>
                        <div className="button"><p className="description">Accept all cookies</p>
                        <label className="container">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>
                        </div>
                   </div>
                   
                    <div className="item item3">
                        <div className="content"><p className="smallTitle">Strictly Necessary</p>
                        <p className="description">These cookies are necessary for the website and can’t be deactivated.</p>
                        </div>
                        <div className="button">
                            <label className="switch">
                                <input type="checkbox"checked/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className="item item4">
                    <div className="content"><p className="smallTitle">Management and Analytics</p>
                        <p className="description">These cookies can be set by our advertising partners through our website.</p>
                    </div>
                    <div className="button">
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                    </div>
                    </div>
                    <div className="item item5">
                    <div className="content"><p className="smallTitle">Prefrences</p>
                        <p className="description">To individualize your content, we use tools that personalize your web experience.</p>
                    </div>
                    <div className="button">
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                    </div>
                    </div>
                    <div className="item item6">
                        <div className="content"><p className="title">Change Password</p></div>
                        <div className="button changebtn">
                            <button type="submit">Change</button>
                        </div>
                    </div>
                    <div className="savebtn">
                        <button type="submit">Save</button>
                    </div>
                   </div>
            </div>
        </div>
    )
}
