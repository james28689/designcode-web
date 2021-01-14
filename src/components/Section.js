import React from 'react'
import './Section.css'
import Wave from './Wave';

const Section = props => (
    <div className="SectionGroup">
        <div className="WaveTop"><Wave /></div>
        <img className="SectionBackground" src={props.image} />
        <img className="SectionLogo" src={props.logo} />
        <div className="SectionTitleGroup">
            <h3 className="SectionTitle">{props.title}</h3>
            <p className="SectionText">{props.text}</p>
        </div>
        <div className="WaveBottom"><Wave /></div>
    </div>
)

export default Section;