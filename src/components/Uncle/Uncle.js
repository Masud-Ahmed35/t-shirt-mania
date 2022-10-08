import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div className='border-2 border-orange-300 p-3 text-center rounded-lg'>
            <h3>Uncle</h3>
            <p>House: {house}</p>
            <button onClick={() => setHouse(house - 1)} className="mt-3 btn btn-outline btn-error">Decrease</button>
        </div>
    );
};

export default Uncle;