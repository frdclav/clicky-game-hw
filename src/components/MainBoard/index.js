import React, { useState } from 'react'
import Piece from '../Piece'
import Score from '../Score'


const MainBoard = () => {
    const loadPieces = [
        {
            id: 1,
            imageUrl: `/assets/1.png`
        }, {
            id: 2,
            imageUrl: `/assets/2.png`
        }, {
            id: 3,
            imageUrl: `/assets/3.png`
        }, {
            id: 4,
            imageUrl: `/assets/4.png`
        }, {
            id: 5,
            imageUrl: `/assets/5.png`
        }, {
            id: 6,
            imageUrl: `/assets/6.png`
        }, {
            id: 7,
            imageUrl: `/assets/7.png`
        }, {
            id: 8,
            imageUrl: `/assets/8.png`
        }, {
            id: 9,
            imageUrl: `/assets/9.jpg`
        }, {
            id: 10,
            imageUrl: `/assets/10.png`
        }, {
            id: 11,
            imageUrl: `/assets/11.png`
        }, {
            id: 12,
            imageUrl: `/assets/12.png`
        },
    ]
    const [pieces, setPieces] = useState(loadPieces);
    const [mscore, setScore] = useState(0);
    const [mtopScore, setTopScore] = useState(0);
    const [mmessage, setMessage] = useState(`Click an image to begin!`);
    const [clickedPieces, setClickedPieces] = useState([]);

    // Fisher-Yates shuffle from https://javascript.info/task/shuffle

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

            // swap elements array[i] and array[j]
            // we use "destructuring assignment" syntax to achieve that
            // you'll find more details about that syntax in later chapters
            // same can be written as:
            // let t = array[i]; array[i] = array[j]; array[j] = t
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    const increaseScore = () => {
        if (mscore === mtopScore) {
            setTopScore(mscore + 1)
        }
        setScore(mscore + 1);
        shuffle(pieces)
        setPieces(pieces)
        setMessage(`You got a point!`)
    }
    const resetScore = () => {
        setScore(0);
        setMessage(`You clicked wrong...`)
        shuffle(pieces)
        setPieces(pieces);
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
