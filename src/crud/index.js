import React, { Component } from 'react';
import Formulir from './Formulir';
import NavbarComponent from './NavbarComponent';
import Tabel from './Tabel';

export default class index extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             makanan : [],
             nama: "",
             deskripsi:"",
             harga: 0,
             id: ""
        }
    }
    
    handleChange = (event) => {
       this.setState({
           [event.target.name] : event.target.value
       })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.id === "") {
            
        this.setState({
            makanan: [
                ...this.state.makanan,
                {
                    id: this.state.makanan.length+1,
                    nama: this.state.nama,
                    deskripsi: this.state.deskripsi,
                    harga: this.state.harga

                }
            ]
        })
        }else{
            const makananSelainDipilih = this.state.makanan
            .filter((makanan) => makanan.id !== this.state.id)
            .map((filterMakanan) => {
                return filterMakanan
            })

            this.setState({
                makanan: [
                    ...makananSelainDipilih,
                    {
                        id: this.state.makanan.length+1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
    
                    }
                ]
            })

        }


        this.setState({
    
                    id: "",
                    nama: "",
                    deskripsi: "",
                    harga: 0
        })

     }


     editData = (id) => {
        //console.log(id)
        const makananYangDipilih = this.state.makanan
        .filter((makanan) => makanan.id === id)
        .map((filterMakanan) => {
            return filterMakanan
        })
    
        // console.log(makananYangDipilih);



        this.setState({
            nama : makananYangDipilih[0].nama,
            deskripsi :makananYangDipilih[0].deskripsi,
            harga : makananYangDipilih[0].harga,
            id : makananYangDipilih[0].id,
        })

    }

    hapusData = (id) => {
        // console.log(id);
        const makananBaru = this.state.makanan
        .filter((makanan) => makanan.id !== id)
        .map((filterMakanan) => {
            return filterMakanan
        })

        this.setState({
            makanan:makananBaru
        })

    }


     

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4">
                <Tabel makanan = {this.state.makanan} editData = {this.editData} hapusData={this.hapusData} />
                <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>


                </div>
            </div>
        )
    }
}
