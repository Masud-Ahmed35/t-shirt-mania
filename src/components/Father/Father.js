import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({ house, ring }) => {
    return (
        <div className='border-2 border-orange-300 p-3 text-center rounded-lg'>
            <h3>Father</h3>
            <p>House: {house}</p>
            <section className='flex gap-5 mt-3'>
                <Myself house={house} ring={ring}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Father;