import React from 'react';

const TShirt = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price, gender } = tshirt;
    return (
        <div className="card card-compact bg-base-100 shadow-xl border-2 divide-y-2">
            <div className=''>
                <figure><img className='w-40 h-56 p-3' src={picture} alt="Shoes" /></figure>
            </div>
            <div className="card-body bg-zinc-100">
                <div className='flex'>
                    <h2 className="card-title">{name}</h2>
                    <small className="badge badge-secondary badge-outline text-xs">New</small>
                </div>
                <p><small>Gender: {gender}</small></p>
                <p>Price: <span className='text-lg text-orange-400'>${price}</span></p>
                <div className='mt-3'>
                    <button onClick={() => handleAddToCart(tshirt)} className="btn btn-outline btn-success w-full">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default TShirt;