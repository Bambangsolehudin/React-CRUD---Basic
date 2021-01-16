import React from 'react'

const makanan = [
    {
        nama: 'soto',
        harga:20000
    },
    {
        nama: 'Daging',
        harga:3000
    },
    {
        nama: 'Burger',
        harga:90000
    }
]

// Reduce
const total_harga = makanan.reduce(( total_harga, makanan) => {
    return total_harga+makanan.harga;
}, 0 ); 

function Map() {
    return (
        <div>
            <h2>Map Sederhana</h2>
            <ul>
                {makanan.map((makanan, index) =>( 
                    <li>{index+1}. {makanan.nama} => Harga : {makanan.harga}</li> 
                ))}
                
            </ul>

            <h2>Filter</h2>
            <ul>
                {makanan.filter((makanan)=> makanan.harga > 11000)
                .map((makanan, index) =>( 
                    <li>{index+1}. {makanan.nama} => Harga : {makanan.harga}</li> 
                ))}
                
            </ul>

            <h3> Harga = {total_harga}</h3>
        </div>
    )
}

export default Map
