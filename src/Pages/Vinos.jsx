import React from 'react'
import vino from '../img/vino.jpg';
import '../css/style.css';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'
import axios from 'axios'


const Vinos = () => {

    const URL = 'https://backgomarket-production.up.railway.app';

    //const URL = 'http://localhost:3001';
    
    const [productos, setProductos] = useState([]);

    const getProductos = async () => {
        try {
            const { data } = await axios.get(`${URL}/datos`);
            setProductos(data.productos);
            console.log(data.productos);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        getProductos();
    }, []);


    return (
        <>
            <div className="section m-2">
                <div className="row">
                    <img src={vino} alt='vino' />
                    <h1 className="text-center display-3">Listado de Vinos</h1>
                    <div className="col-md-8 m-auto">
                        <Table striped bordered hover id='prod'>
                            <thead>
                                <tr>
                                    <th className='text-center'>Nombre de producto</th>
                                    <th className='text-center'>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productos.map(dato =>
                                    <tr>
                                        <td className='text-center'>{dato.nombre}</td>
                                        <td className='text-center'>${dato.precio}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vinos;