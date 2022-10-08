import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div className='border-2 border-orange-300 p-3 text-center rounded-lg'>
            <h3>Special</h3>

            <button onClick={() => setHouse(house + 1)} className=" mt-3 btn btn-outline btn-success">Increase</button>
        </div>
    );
};

export default Special;