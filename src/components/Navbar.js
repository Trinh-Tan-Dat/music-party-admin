import logo from './logo192.png';
import { Link } from 'react-router-dom';
import {FiHome} from 'react-icons/fi';
const Navbar = ({show}) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <img src={logo} alt="logo" className='logo' />
            <ul>
                <li>
                    <Link to='/'>
                        <FiHome />
                        Home</Link>
                </li>
                <li>
                    <a href="/dashboard">Dashboard</a>

                </li>
                <li>
                    <a href="/signin">Sign In</a>
                </li>
            </ul>

        </div>
    );
}
export default Navbar;