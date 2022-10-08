import React from 'react';

const Brother = ({ house }) => {
    return (
        <div className='border-2 border-orange-300 p-3 text-center rounded-lg'>
            <h3>Brother</h3>
            <p>House: {house}</p>
        </div>
    );
};

export default Brother;