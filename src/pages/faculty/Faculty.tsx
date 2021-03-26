import * as React from 'react';
import {Employee} from "../../components/Employee";

interface Props {

}

export const Faculty = (props: Props) => {
    return (

        <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
            <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
                Our Esteemed Faculty
            </p>
            <div className=" mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>
                <Employee/>
            </div>
        </div>

    );
};