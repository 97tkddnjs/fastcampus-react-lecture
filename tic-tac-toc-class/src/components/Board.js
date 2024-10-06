import React from 'react'
import Square from './Square'

export class Board extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            squares : Array(9).fill(null),
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice()
        squares[i]='X'
        this.setState({squares:squares})
    }

    renderSQure(i){
        return <Square value={this.state.squares[i]}
            onClick = {()=>this.handleClick(i)}
        ></Square>
    }

    render() {

        return (
            <div>
                <div className='status'> Next Player ~</div>
                <div className='board-row'>
                    {this.renderSQure(0)}
                    {this.renderSQure(1)}
                    {this.renderSQure(2)}
                </div>
                <div className='board-row'>
                    {this.renderSQure(3)}
                    {this.renderSQure(4)}
                    {this.renderSQure(5)}
                </div>
                <div className='board-row'>
                    {this.renderSQure(6)}
                    {this.renderSQure(7)}
                    {this.renderSQure(8)}
                </div>
            </div>
        )
    }

} 