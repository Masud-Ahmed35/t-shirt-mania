import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-300 py-5'>
            <nav className='grid grid-cols-7 w-1/2 mx-auto'>
                <div className='col-span-3 grid grid-cols-2 text-center'>
                    <Link to='/'><h3 className='text-2xl font-extrabold font-serif italic border-x-4 border-green-700 rounded-lg text-orange-600'>Free-Shop</h3></Link>
                </div>
                <div className='col-span-4 grid grid-cols-4 gap-4 text-xl'>
                    <Link className='border-b-2 rounded-lg text-center hover:text-amber-600 text-sky-600' to='/'>Home</Link>
                    <Link className='border-b-2 rounded-lg text-center hover:text-amber-600 text-sky-600' to='/orders'>Orders</Link>
                    <Link className='border-b-2 rounded-lg text-center hover:text-amber-600 text-sky-600' to='/grandpa'>Grandpa</Link>
                    <Link className='border-b-2 rounded-lg text-center hover:text-amber-600 text-sky-600' to='/about'>About</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;