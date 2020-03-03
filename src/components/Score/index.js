import React from 'react'

const Score = (props) => {


    return (
        [<span> {props.message} </span>,
        <span> Score: {props.score} | Top Score: {props.topScore}</span>]

    )
}

export default Score
