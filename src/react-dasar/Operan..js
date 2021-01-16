import React, { Component } from 'react'

export default class Operan extends Component {
    render() {
        return (
            <div>
                <h2>Operan yang menjadi Props: {this.props.makanan}</h2>
                <button onClick={() => this.props.gantiMakanan("soto")}>Ganti Makanan</button>
            </div>
        )
    } 
}
