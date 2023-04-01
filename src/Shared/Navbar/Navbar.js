import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import auth from '../../Utils/Firebase/firebase.config';
import { logOut } from '../../Utils/ReduxToolkit/AuthSlice/AuthSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const { email } = useSelector(state => state.auth)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(logOut())
        })
    }
    return (
        <div className="navbar bg-gradient-to-r px-10 from-stone-800 to-cyan-500">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-4xl font-bold">Pixsite</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/gallery"> Photo Gallery</Link></li>
                    {email ? <li><button onClick={() => handleSignOut()}>Logout</button></li> : <li><Link to="/login">Login</Link></li>}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;