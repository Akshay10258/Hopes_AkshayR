import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,FaSpotify,FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-5 my-10">
        <div className="container mx-auto flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/hopespesu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-5xl hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://www.instagram.com/hopes.pesu/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-5xl hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://open.spotify.com/show/2usGhPMB0HYKd6G9lmgGkg?si=WEVclSc3QLKMAAPhwxA4HA&nd=1&dlsi=b3119c81fc6c4feb" target="_blank" rel="noopener noreferrer">
            <FaSpotify className="text-5xl hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://www.youtube.com/@HoPES_PESU" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-5xl hover:text-gray-400 transition-colors" />
            </a>
        </div>
        <div className="text-center mt-4 text-sm">
            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
        </footer>
    );
};

export default Footer;
