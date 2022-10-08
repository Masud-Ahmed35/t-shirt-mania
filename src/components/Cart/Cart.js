import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please Buy Something!!!</p>
    }
    else {
        message = <p>Thanks for Buying.</p>
    }

    return (
        <div>
            <h2 className='text-center text-xl font-bold mb-11 border-y-2 py-1'>Order Summary</h2>
            <div className='ml-7 font-semibold'>
                <h3 className='mb-5'>Product Quantity: <span className='text-xl text-orange-500'>{cart.length}</span></h3>
                {
                    cart.map(tshirt => <p
                        key={tshirt.id}
                    >
                        {tshirt.name}
                        <button onClick={() => handleRemoveItem(tshirt)} className='border-2 border-red-200 px-2 rounded-[50%] ml-3 text-red-500 text-xl font-bold'>X</button>
                    </p>)
                }
                <div className='text-xl mt-7 text-center text-stone-500'>
                    {
                        message
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;