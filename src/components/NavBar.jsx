import React, { useState } from "react"; // import react
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaHackerrank,
} from "react-icons/fa"; // import icons
import { BiMailSend } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png"; // import logo
import { Link } from "react-scroll"; // import Link

export const NavBar = () => {
    const [nav, setNav] = useState(false); // set nav state to false
    const handleClick = () => setNav(!nav); // if nav is true, set nav to false, else set nav to true

    return (
        // return the navbar
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-20">
            <div className="flex items-center">
            <Link  to="home" smooth={true} duration={500} className="cursor-pointer">
                    <img src={Logo} alt="Logo_Image" style={{ width: "80px" }} />
            </Link>
                
            </div>
            <button class="light-mode-button" aria-label="Toggle Light Mode">
                <span></span>
                <span></span>
            </button>

            {/*=== Menu ===*/}

            <ul className="hidden md:flex ">
                <li className="text-xl">
                <Link  to="home" smooth={true} duration={500} className="  hover:border-b-2 hover:border-[#087D97] py-3">
                Accueil
              </Link>
                </li>
                <li className="text-xl">
                <Link  to="about" smooth={true} duration={500} className="  hover:border-b-2 hover:border-[#087D97] py-3">
                À propos
              </Link>
                </li>
                <li className="text-xl">
                <Link  to="skills" smooth={true} duration={500} className="  hover:border-b-2 hover:border-[#087D97] py-3">
                Compétences
              </Link>
                </li>
                <li className="text-xl">
                <Link  to="work" smooth={true} duration={500} className="  hover:border-b-2 hover:border-[#087D97] py-3">
                Projets
              </Link>
                </li>
                <li className="text-xl">
                <Link  to="contact" smooth={true} duration={500} className="  hover:border-b-2 hover:border-[#087D97] py-3">
                Contacte
              </Link>
                </li>
            </ul>

            {/*=== Hamburger ===*/}
            <div onClick={handleClick} className="md:hidden z-10 text-5xl">
                {nav ? <FaTimes /> : <FaBars /> }{" "}
                {/* if nav is true, show the close icon, else show the hamburger icon */}
            </div>

            {/*=== Mobile Menu ===*/}
            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl hover:bg-[#087D97] w-full text-center">
                <Link onClick={handleClick} to="home" smooth={true} duration={500} className="  hover:border-b-2 hover:border-[#087D97] py-3">
                Accueil
              </Link>
              </li>
                <li className="py-6 text-4xl hover:bg-[#087D97] w-full text-center">
                <Link onClick={handleClick}  to="about" smooth={true} duration={500} className="  hover:border-b-2 hover:border-[#087D97] py-3">
                À propos
              </Link>
                </li>
                <li className="py-6 text-4xl hover:bg-[#087D97] w-full text-center">
                <Link onClick={handleClick}  to="skills" smooth={true} duration={500} className="  hover:border-b-2 hover:border-[#087D97] py-3">
                Compétences
              </Link>
              </li>
                <li className="py-6 text-4xl hover:bg-[#087D97] w-full text-center">
                <Link onClick={handleClick}  to="work" smooth={true} duration={500} className="  hover:border-b-2 hover:border-[#087D97] py-3">
                Projets
              </Link>
              </li>
                <li className="py-6 text-4xl hover:bg-[#087D97] w-full text-center">
                <Link onClick={handleClick}  to="contact" smooth={true} duration={500} className="  hover:border-b-2 hover:border-[#087D97] py-3">
                Contacte
              </Link>
                </li>
            </ul>

            {/*=== Social Media ===*/}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    {/*=== LinkedIn ===*/}
                    <li className="m-0.5 w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-r-3xl duration-300 bg-[#0e76a8]  border">
                        <a
                            className="text-lg font-sans font-bold flex justify-between items-center w-full text-gray-300"
                            href="https://www.linkedin.com/in/saber-aissaoui"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn <FaLinkedin size={33} />
                        </a>
                    </li>
                    {/*=== GitHub ===*/}
                    <li className="m-0.5 w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-r-3xl duration-300 bg-[#252729] border">
                        <a
                            className="text-lg font-sans font-bold flex justify-between items-center w-full text-gray-300"
                            href="https://github.com/Saber0769"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub <FaGithub size={33} />
                        </a>
                    </li>
                    {/*=== HackerRank ===*/}
                    <li className="m-0.5 w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-r-3xl duration-300 bg-[#058c5a] border">
                        <a
                            className="text-sm font-sans font-bold flex justify-between items-center w-full text-gray-300"
                            href="https://www.hackerrank.com/soul_of_saber"
                            target="_blank"
                            rel="noreferrer"
                        >
                            HackerRank
                            <FaHackerrank size={33} />
                        </a>
                    </li>
                    {/*=== CV ===*/}
                    <li className="m-0.5 w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-r-3xl duration-300 bg-[#d2ac12] border">
                        <a
                            className="text-lg font-sans font-bold flex justify-between items-center w-full text-gray-300"
                            href="https://cv.saber-aissaoui.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            CV <BsFillPersonLinesFill size={33} />
                        </a>
                    </li>
                    {/*=== Email ===*/}
                    <li className="m-0.5 w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-r-3xl duration-300 bg-[#FF6D02] border">
                        <a
                            className="text-lg font-sans font-bold flex justify-between items-center w-full text-gray-300"
                            href="/"
                        >
                            Email <BiMailSend size={33} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default NavBar;
