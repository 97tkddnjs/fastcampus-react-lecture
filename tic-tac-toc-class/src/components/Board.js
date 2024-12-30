import React, { useState } from 'react'
import Square from './Square'

const Board = () =>{

    const [squares, setSqurares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true); // true : 'X' , false 'O'
    

    const calculateWinner = ()=>{

        const lines =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]

        for (let index = 0; index < lines.length; index++) {
            const [a,b,c] = lines[index];
            if(squares[a] && squares[a]==squares[b] && squares[a]==squares[c])
                return squares[a];
        }
        return null;
    }

    const winner = calculateWinner(squares);
    
    let status = null;

    if(winner){
        status =' Winner : '+winner;
    }else{
        status  = `Next Player : ${xIsNext ? 'X' : 'O'}`
    }
    
    const handleClick = (i) => {
        const newSquares = squares.slice()
        if(calculateWinner(newSquares) || newSquares[i])
            return;
        
        newSquares[i]= xIsNext ? 'X' : 'O';
        setXIsNext(!xIsNext);
        setSqurares(newSquares);    // set 함수 안에 인자를 쓸 경우 과거 데이터 가능 prev => !prev  이렇게도 가능

    }

    const renderSQure = (i)=> {
        return <Square value={squares[i]}
            onClick = {()=>handleClick(i)}
        ></Square>
    }

    
    return (
        <div>
            <div className='status'> {status}</div>
            <div className='board-row'>
                {renderSQure(0)}
                {renderSQure(1)}
                {renderSQure(2)}
            </div>
            <div clasName='board-row'>
                {renderSQure(3)}
                {renderSQure(4)}
                {renderSQure(5)}
            </div>
            <div clasName='board-row'>
                {renderSQure(6)}
                {renderSQure(7)}
                {renderSQure(8)}
            </div>
        </div>
    )
    

}


export default Board;
