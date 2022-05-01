import React from 'react'
import Logo_footer from '../assets/Logo_footer.png'
import { Link } from "react-scroll"; // import Link
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaHackerrank,
} from "react-icons/fa"; // import icons



const Footer = () => {
    return (
        <footer className="p-4 sm:p-6 bg-[#091528] flex flex-col sm:items-center">
            <div className="">
                <div className="mb-6 md:mb-0">
                    <a href="/" className="flex items-center justify-center">
                        <img src={Logo_footer} className="mr-3 h-16" alt="SabDev Logo" />
                        <span className="self-center text-3xl font-semibold  text-gray-300">SabDev</span>
                    </a>
                    {/* Social media */}
                    <div className="flex flex-row items-center pt-6 justify-between text-gray-300">
                        <div className="px-3">
                            <a
                                className=""
                                href="https://www.linkedin.com/in/saber-aissaoui"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <FaLinkedin size={40} />
                            </a>
                        </div>
                        <div className="px-3">
                            <a
                                className=""
                                href="https://github.com/Saber0769"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <FaGithub size={40} />
                            </a>
                        </div>
                        <div className="px-3">
                            <a
                                className=""
                                href="https://twitter.com/saber077"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <FaTwitter size={40} />
                            </a>
                        </div>
                        <div className="px-3">
                            <a
                                className=""
                                href="ttps://www.hackerrank.com/soul_of_saber"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <FaHackerrank size={40} />
                            </a>
                        </div>
                        <div className="px-3">
                            <a
                                className=""
                                href="https://cv.saber-aissaoui.com/"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <BsFillPersonLinesFill size={40} />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-3 border-gray-200 sm:mx-auto "/>
            </div>
            <div className="text-gray-300 grid">
                <p className=""> 
                © 2022 SabDev™. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer