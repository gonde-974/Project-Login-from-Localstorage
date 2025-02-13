import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {

    function handlelogout(){
        localStorage.removeItem('vite-user')
    }
    

    return (

        <div className='container-fluid mx-auto bg-slate-400 flex items-center px-[25px] justify-between h-[100px]'>
            <h1 className='text-4xl font-bold'>Logo</h1>
            <ul className='flex items-center gap-[20px]'>
                <li>
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/products">Products</NavLink>
                </li>


                 {localStorage.hasOwnProperty('vite-user')?(
                    <li>
                        <button onClick={handlelogout}>Logout</button>
                    </li>
                 ):(
                 <li>
                <NavLink to="/login">Login</NavLink>
                </li>
                 )}
                
                    
            </ul>
        </div>
    );
}

export default NavbarComponent;
