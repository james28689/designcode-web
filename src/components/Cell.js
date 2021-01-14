import React from 'react'
import './Cell.css'

const Cell = props => (
    <div className="CellGroup">
        <img className="CellImage" src={props.image} />
        <div className="CellTitle">{props.title}</div>
    </div>
)

export default Cell