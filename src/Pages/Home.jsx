import React from 'react'
import GoMarket from '../img/GoMarket.jpg';
import logo from '../img/logo.jpg';
import tragos from '../img/tragos.jpg';
import Card from 'react-bootstrap/Card';
import imgcard from '../img/card.jpg';
import '../css/style.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {

    const [productos, setProductos] = useState([]);

    const URL = 'https://backgomarket-production.up.railway.app/datos';

    //const URL = 'http://localhost:3001/datos';

    const getProductos = async () => {
        try {
            const { data } = await axios.get(URL);
            setProductos(data.productos);
            console.log(data.productos);
        } catch (error) {
        console.error(error);
        }
    }

    useEffect(() => {
        getProductos()
    }, []);

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={GoMarket}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={tragos}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12' >
                    {productos.slice(-4).map(dato =>
                        <Card  style={{ width: '18rem', display:'inline-block', padding: 0, margin: 15}}>
                        <Card.Img variant="top" src={imgcard} />
                        <Card.Body>
                            <Card.Title>{dato.nombre}</Card.Title>
                            <Card.Text>
                            ${dato.precio}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;