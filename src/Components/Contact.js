import React from 'react';

function Contact() {
    const backgroundStyle = {
        backgroundImage: "url('https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_1280.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',  // Changed from 'center' to 'flex-end'
        paddingRight: '10%'  // Added padding to the right
    };

    const contentStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '2rem',
        borderRadius: '10px',
        maxWidth: '400px',  // Reduced max-width for a narrower box
        width: '100%'
    };

    return (
        <div style={backgroundStyle}>
            <div style={contentStyle}>
                <h2 className="text-center mb-4">Contact Us</h2>
                <div className="mb-3">
                    <h5>Social Media:</h5>
                    <p><strong>Instagram:</strong> @pizzeria_official</p>
                    <p><strong>Twitter:</strong> @pizzeria_tweets</p>
                </div>
                <div className="mb-3">
                    <h5>Phone:</h5>
                    <p>(123) 456-7890</p>
                </div>
                <div className="mb-3">
                    <h5>Location:</h5>
                    <p>123 Pizza Street, Foodville, FD 12345</p>
                </div>
                <div className="mb-3">
                    <h5>Opening Hours:</h5>
                    <p>Open daily from 11:00 AM to 11:00 PM</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;