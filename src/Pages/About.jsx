import React from 'react'
import about from '../img/about.jpg';
import '../css/style.css';

const About = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <img src={about} alt='about' />
                <h1 className="text-center display-1">Sobre Nosotros</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quas, sequi nobis, nam quo odit
                    temporibus est excepturi incidunt pariatur veniam eius facere libero laudantium commodi nemo dolores
                    iure dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quas, sequi nobis, nam
                    quo odit temporibus est excepturi incidunt pariatur veniam eius facere libero laudantium commodi nemo
                    dolores iure dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quas, sequi
                    nobis, nam quo odit temporibus est excepturi incidunt pariatur veniam eius facere libero laudantium
                    commodi nemo dolores iure dolor!Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                    quas, sequi nobis, nam quo odit temporibus est excepturi incidunt pariatur veniam eius facere libero
                    laudantium commodi nemo dolores iure dolor!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quas, sequi nobis, nam quo odit
                    temporibus est excepturi incidunt pariatur veniam eius facere libero laudantium commodi nemo dolores
                    iure dolor!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quas, sequi nobis, nam quo odit
                    temporibus est excepturi incidunt pariatur veniam eius facere libero laudantium commodi nemo dolores
                    iure dolor!</p>
            </div>
        </div>
    )
}

export default About;