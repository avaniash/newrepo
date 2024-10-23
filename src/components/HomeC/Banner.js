import React from 'react';
import logo from '../../assets/images/bahamas.jpg'; // Adjust the path based on your folder structure

function Banner() {
    return  (
        <div className="banner" style={{ position: 'relative', textAlign: 'center' }}>
            <img 
                src={logo} // Replace with your image path
                alt="Banner"
                style={{ width: '100%', height: 'auto' }} // Make the image responsive
            />
        </div>
   );
}


export default Banner; // Export the component
