import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, ring }) => {
    return (
        <div className='border-2 border-orange-300 p-3 text-center rounded-lg'>
            <h3>Myself</h3>
            <p>House: {house}</p>
            <section className='flex gap-5 mt-3'>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default Myself;