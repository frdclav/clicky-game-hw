import React, { useState } from 'react'
import Piece from '../Piece'
import Score from '../Score'


const MainBoard = () => {
    const pieces = [
        {
            id: 1,
            imageUrl: `https://www.fillmurray.com/200/200`
        }, {
            id: 2,
            imageUrl: `https://www.fillmurray.com/200/200`
        }, {
            id: 3,
            imageUrl: `https://www.fillmurray.com/200/200`
        }, {
            id: 4,
            imageUrl: `https://www.fillmurray.com/200/200`
        }, {
            id: 5,
            imageUrl: `https://www.fillmurray.com/200/200`
        }, {
            id: 6,
            imageUrl: `https://www.fillmurray.com/200/200`
        }, {
            id: 7,
            imageUrl: `https://www.fillmurray.com/200/200`
        }, {
            id: 8,
            imageUrl: `https://www.fillmurray.com/200/200`
        }, {
            id: 9,
            imageUrl: `https://www.fillmurray.com/200/200`
        }, {
            id: 10,
            imageUrl: `https://www.fillmurray.com/200/200`
        }, {
            id: 11,
            imageUrl: `https://www.fillmurray.com/200/200`
        }, {
            id: 12,
            imageUrl: `https://www.fillmurray.com/200/200`
        },
    ]
    const [mscore, setScore] = useState(0);
    const [mtopScore, setTopScore] = useState(0);
    const [mmessage, setMessage] = useState(`Click an image to begin!`);
    const [clickedPieces, setClickedPieces] = useState([]);

    const increaseScore = () => {
        if (mscore === mtopScore) {
            setTopScore(mscore + 1)
        }
        setScore(mscore + 1);

        setMessage(`You got a point!`)
    }
    const resetScore = () => {
        setScore(0);
        setMessage(`You clicked wrong...`)
        setClickedPieces([]);
    }

    const clickPiece = (id) => {
        console.log('clickedPieces', clickedPieces, 'id', id, clickedPieces.includes(id))
        if (clickedPieces.includes(id)) {
            resetScore();
        } else {
            let newArr = clickedPieces.concat([id])
            console.log(newArr)
            setClickedPieces(newArr)
            increaseScore();
        }
    }
    return (
        [<nav className='navbar navbar-light  border-dark ' >
            <span className='navbar-brand'>Clicky Game</span>
            <Score score={mscore} topScore={mtopScore} message={mmessage} />
        </nav>,
        <header className='jumbotron'>
            <h1 className='display-4 text-center'>Clicky Game!</h1>
            <p className='lead text-center'> Click on an image to earn points, but don't click on any more than once!</p>
        </header>,
        <div className='container d-flex flex-wrap justify-content-center'>
            {
                pieces.map(piece => <Piece key={piece.id} imgUrl={piece.imageUrl} click={() => clickPiece(piece.id)} />)
            }



        </div>]
    )
}

export default MainBoard
