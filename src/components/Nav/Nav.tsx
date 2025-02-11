import { Link, useLocation } from "react-router-dom";
import Logo from '../../assets/Logo.png';
import { Analytics } from '@vercel/analytics/react'
type Props = {};

export default function Nav({}: Props) {
    const { pathname } = useLocation();

    return (
        <div className="w-screen h-20 text-black flex justify-between items-center px-10 fixed top-0 left-0 z-50 backdrop-blur-md">
           <Analytics />
            <Link to="/">
            <img className="h-12 cursor-pointer" src={Logo} alt="Logo" />
            </Link>

            {pathname !== '/wines' && (
                <Link to="/wines" className="hover:underline cursor-pointer">
                Wines
                </Link>)}
        
            {pathname !== '/about' && (
                <Link to="/about" className="hover:underline cursor-pointer">
                About Us
                </Link> )}
        </div>

    );
}
