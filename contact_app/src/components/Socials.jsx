import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Socials(){
    return (
        <div className="socials flex gap-sm">
            <Link to={""}>
                <FaFacebookSquare />
            </Link>
            <Link to={""}>
                <FaInstagramSquare />
            </Link>
            <Link to={""}>
                <FaTwitterSquare />
            </Link>
            <Link to={""}>
                <FaLinkedin />
            </Link>
        </div>
    )
}