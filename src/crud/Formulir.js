import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap';

const Formulir = ({nama, deskripsi, harga, handleChange, handleSubmit, id}) => {
    return (
        <div className="mt-5">
            <Row>
                <Col>
                    <h4>{id ? "Edit Data" : "Tambah Data"}</h4> 
                    <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form onSubmit= {handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>   Nama Makanan</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="nama" 
                        value={nama} 
                        onChange={(event)=>handleChange(event) } />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>   Deskripsi </Form.Label>
                        <Form.Control as="textarea" 
                        name="deskripsi"
                        value={deskripsi}
                        onChange={(event)=>handleChange(event) }/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        
                        <Form.Label>  Harga </Form.Label>
                        <Form.Control 
                        type="number" 
                        name="harga" 
                        value={harga} 
                        onChange={(event)=>handleChange(event) }/>
                    </Form.Group>

                
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Formulir
