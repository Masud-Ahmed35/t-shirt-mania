import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

export const RingContext = createContext('Matir Bank');

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ring = 'Diamond Ring'

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='border-4 border-orange-300 m-16 p-10 rounded-xl text-center'>
                <h2 className='text-2xl font-bold border-2 border-orange-300 p-3 text-center rounded-lg'>Grandpa</h2>
                <section className='flex gap-5 mt-7'>
                    <Father house={house} ring={ring}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;