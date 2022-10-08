import React from 'react';

const Sister = ({ house }) => {
    return (
        <div className='border-2 border-orange-300 p-3 text-center rounded-lg'>
            <h3>Sister</h3>
            <p>House: {house}</p>
        </div>
    );
};

export default Sister;