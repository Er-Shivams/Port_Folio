import React from 'react';
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
import Bar from './Bar';


const languages = [
    {
        icon: python,
        name: 'C',
        level: '70'
    },
    {
        icon: react,
        name: 'C++',
        level: '60'
    },
    {
        icon: react,
        name: 'HTML',
        level: '75'
    },
    {
        icon: react,
        name: 'CSS',
        level: '60'
    },
    {
        icon: react,
        name: 'React',
        level: '70'
    },
    {
        icon: react,
        name: 'javascript',
        level: '65'
    },
    
    {
        icon: react,
        name: 'Python',
        level: '70'
    }

]

const tools = [

    {
        icon: react,
        name: 'GCP',
        level: '70'
    },
    {
        icon: react,
        name: 'OBS Studio',
        level: '45'
    },
    {
        icon: react,
        name: 'Git',
        level: '60'
    },
    {
        icon: react,
        name: 'Matlab',
        level: '45'
    },

]


const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card_heading">
                        Education
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                            Computer Science and Enginnering
                        </h5>
                        <p className="resume-card_name">
                           <i> Indian Institute of Information and Technology, Kota, Rajasthan (Mnit-Campus).</i>
                        </p>
                        <p className="resume-card_details">
                           <strong><i>Hello</i>, I am 2nd year student (Sophomore), persuing B.tech in Computer Science Engineering from <i>IIITkota</i></strong>
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card_heading">
                        Experience
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                            Intern as a Campus Ambassador
                        </h5>
                        <p className="resume-card_name">
                            <i>At International Model United Nation Online-mode (jun-july)</i>
                            
                        </p>
                        <p className="resume-card_details">
                            <strong>I work as a campus Ambassador for 1-2 months in IMUN for learning new concepts and  to interact with diversity</strong>
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language_heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language_heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;