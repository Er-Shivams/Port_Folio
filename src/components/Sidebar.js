import React from 'react';
import facebook from '../assets/icons/facebook.svg';
import github from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';
import tie from '../assets/icons/tie.svg';
import pin from '../assets/icons/pin.svg';
import image from '../assets/image.jpg';
import Resume from '../assets/Resume.pdf'

function Sidebar() {
    const mailhandle = () => {
        window.open("mailto:shivamscool11@gmail.com");
    };
    return (
        <div className="sidebar">
            <img src={image} alt="avatar" className="sidebar_avatar" />
            <div className="sidebar_name"> Shivam Kumar <span>Singh</span></div>
            <div className="sidebar_item sidebar_title">Web Devloper</div>
            <a href={Resume} download="Resume.pdf">
                <div className="sidebar_item sidebar_resume">
                    <img src={tie} alt="resume" className="sidebar_icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar_social-icons my-2">
                <a href="!#"> <img src={facebook} alt="facebook" className="sidebar_icon mr-3" /></a>
                <a href="!#"> <img src={instagram} alt="instagram" className="sidebar_icon" /></a>
            </figure>
            <div className="sidebar_contact">
                <div className="sidebar_item sidebar_github">
                    <a href="!#"><img src={github} alt="github" className="sidebar_icon mr-3" />GitHub</a>
                </div>
                <div className="sidebar_location">
                    <img src={pin} alt="location" className="sidebar_icon mr-1" />Agra, India
                </div>
                <div className="sidebar_item">shivamscool11@gmail.com</div>
                <div className="sidebar_item">9368060897,9456463734 </div>
            </div>
            <div className="sidebar_item sidebar_email" onClick={mailhandle}>Email me</div>
        </div>



    );
}
export default Sidebar;