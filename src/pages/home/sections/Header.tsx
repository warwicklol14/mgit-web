import * as React from 'react';
import LOGO from "../../../images/logo.png"
import {Link} from "react-router-dom";

interface Props {

}

export const Header = (props: Props) => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img className="rounded w-12" src={LOGO} alt={"Mahatma Gandhi Institute of Technology"}/>
                        <span className="ml-3 text-xl">Mahatma Gandhi Institute of Technology</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="home"><a className="mr-5 hover:text-gray-900">Home</a></Link>
                        <Link to="about"><a className="mr-5 hover:text-gray-900">About</a></Link>
                        <Link to="faculty"><a className="mr-5 hover:text-gray-900">Faculty</a></Link>
                        <Link to="contact"><a className="mr-5 hover:text-gray-900">Contact Us</a></Link>
                    </nav>
                    <button
                        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                        onClick={_ => window.location.href="https://mgit.winnou.net" }>
                        Log in
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};