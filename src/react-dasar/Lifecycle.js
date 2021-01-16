import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle'

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             makanan : 'baso',
             data: {},
             tampilHalamanSubs :  false
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((json) => {
            this.setState({
                data : json
            }) 
        })
    }

    ubahMakanan(value) {
        this.setState({makanan: value})
    }

    render() {
        return (
            <div>
               <h2>{this.state.data.title}</h2> 
               <h2>{this.state.makanan}</h2> 
               {this.state.tampilHalamanSubs && <Sublifecycle ubahMakanan={(value)=> this.ubahMakanan(value)}/>}
               <button onClick={()=>this.setState({tampilHalamanSubs: !this.state.tampilHalamanSubs})}>Tampilkam halaman</button>
            </div>
        )
    }
}

