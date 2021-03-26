import * as React from 'react';

interface Props {
    date: string,
    announcement:string,
}

export const Announcement = (props: Props) => {
    return (
        <div>
            <div className="flex relative pt-5 pb-5 sm:items-center md:w mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div
                    className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">{props.date}</h2>
                        <p className="leading-relaxed">{props.announcement}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};