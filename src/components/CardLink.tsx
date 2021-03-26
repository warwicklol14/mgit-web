import * as React from 'react';

interface Props {
    text:string
}

export const CardLink = (props: Props) => {
    return (
        <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full flex bg-gray-200 items-center border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">{props.text}</h2>
                </div>
            </div>
        </div>
    );
};