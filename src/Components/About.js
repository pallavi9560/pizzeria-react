import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    const backgroundStyle = {
        backgroundImage: 'url("https://media.istockphoto.com/id/1350595552/photo/hands-making-a-pizza-dough-with-flour.jpg?s=612x612&w=0&k=20&c=g6yXKd7qCxcBVJYXxLPXFq7oDhA4FCwVnSAhhzaiVOU=")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    };

    return (
        <div style={backgroundStyle} className="d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-md-6 text-white">
                        <h1 className="display-4 mb-4" style={{ fontFamily: 'cursive' }}>About us</h1>
                        <div >
                            <p className="lead">
                                At Pizzeria, we are passionate about crafting the perfect pizza. Our
                                journey began with a love for authentic, Italian-inspired recipes
                                and a commitment to using the freshest ingredients. From the rich
                                tomato sauce to the gooey mozzarella and crispy crust, every pizza
                                we create is a labor of love.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
