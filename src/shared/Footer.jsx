import { IoIosArrowDropdownCircle } from "react-icons/io";

const Footer = () => {
    return (
        <div className="bg-pink-400 bg-opacity-50 py-5 mt-5 relative">
            <div className="absolute inset-0 animate-neon-glow -z-10"></div>
            <footer className="footer text-gray-700 px-4 md:px-16">
                <nav>
                    <p className="text-4xl italic text-purple-600 font-bold">RestAura</p>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Rewards</a>
                    <a className="link link-hover">Work with Us</a>
                    <a className="link link-hover">Blog</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Legal</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Privacy Policy</a>
                </nav>
                <nav>
                
                    <div className="flex items-center justify-center gap-2">
                    <h6 className="footer-title">Connected with Us!</h6>
                    <p className="w-4 h-4 bg-purple-600 inline-flex rounded-full text-white justify-center items-center"><IoIosArrowDropdownCircle /></p>
                    </div>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <img src="https://img.icons8.com/?size=24&id=uLWV5A9vXIPu&format=png" alt="Facebook icon!" />
                        </a>
                        <a>
                            <img src="https://img.icons8.com/?size=24&id=TJX3x8NCUkFN&format=png" alt="Twiter icon!" />
                        </a>
                        <a>
                            <img src="https://img.icons8.com/?size=24&id=Xy10Jcu1L2Su&format=png" alt="Instagram icon!" />
                        </a>
                        <a>
                            <img src="https://img.icons8.com/?size=24&id=kBCrQMzpQDLQ&format=png" alt="Linkedin icon!" />
                        </a>
                        <a>
                            <img src="https://img.icons8.com/?size=24&id=kshUdu5u4FCX&format=png" alt="Reddit icon!" />
                        </a>

                    </div>
                </nav>
            </footer>
            <div className="text-center pt-4">
                <p className="text-sm text-gray-600">© 2024 RestAura - All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;