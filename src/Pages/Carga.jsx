import React from 'react'
import logo from '../img/logo.jpg';
import '../css/style.css';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'


const Carga = () => {

    const URL = 'https://backgomarket-production.up.railway.app/carga';

    //const URL = 'http://localhost:3001/carga';

    const [inputs, setInputs] = useState({
        nombre: "",
        precio: ""
    })

    const handleChange = async (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = async () => {

        await axios.post(URL, inputs)//enviamos datos
        setInputs({//limpiamos los inputs
            nombre: "",
            precio: ""
        })
    }

    return (
        <div className='section m-2'>
            <div className="row">
                <img src={logo} alt='logo' />
                <h1 className="text-center display-3">Carga de Producto</h1>
                {Object.keys(inputs).map((key, index) => (
                    <div className='col-md-12 m-2'>
                        <Form.Group key={index}>
                            <Form.Control
                                className="m-auto w-50"
                                placeholder={key}
                                name={key}
                                value={inputs[key]}
                                onChange={handleChange}
                                required
                            />
                            
                        </Form.Group>
                    </div>
                ))}
                <div className='text-center m-3'>
                    <Button className="w-25" variant="primary" type="submit" onClick={handleClick}>
                        Cargar Producto
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Carga;