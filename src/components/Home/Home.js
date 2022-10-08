import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts.id === tshirt.id);

        if (exists) {
            alert('This Product has Already Added.')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
            // alert('Product Added Successfully.');
        }
    }
    const handleRemoveItem = tshirt => {
        const newCart = cart.filter(ts => ts.id !== tshirt.id)
        setCart(newCart);
    }

    return (
        <div className='grid grid-cols-4 bg-stone-100 divide-x-2'>
            <div className='col-span-3 grid grid-cols-3 gap-5 m-7'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt.id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='mt-7'>
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;