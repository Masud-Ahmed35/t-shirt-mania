import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({ house }) => {
    return (
        <div className='border-2 border-orange-300 p-3 text-center rounded-lg'>
            <h3>Cousin</h3>
            <p>House: {house}</p>
            <section className='flex gap-5 mt-3'>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default Cousin;