import * as React from 'react';
import Faculty from "../images/faculty.png";

interface Props {

}

export const Employee = (props: Props) => {
    return (
        <div className="p-4">
            <div className="flex-col  flex justify-center items-center">
                <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                        <img alt="profil" src={Faculty}
                             className="mx-auto object-cover object-center rounded-full h-20 w-20 "/>
                    </a>
                </div>
                <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                        Dr. Crk. Reddy
                    </span>
                    <span className="text-gray-400 text-xs">
                        HOD
                    </span>
                </div>
            </div>
        </div>
    );
};