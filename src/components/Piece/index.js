import React from 'react'

const Piece = (props) => {



    return (
        <div role="img" className='click-item m-3' onClick={props.click} style={{
            backgroundImage: `url("${props.imgUrl}")`, width: 200, height: 200
        }}>

        </div >
    )
}

export default Piece
