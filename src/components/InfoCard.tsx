import * as React from 'react';


interface Props {
    image_location:string,
    title:string,
    text:string
}

export const InfoCard = (props: Props) => {
    return (
        <div className="p-4 lg:w-1/3 md:w-1/2  flex">
            <img className="h-40 rounded w-36 object-center mb-2" src={props.image_location} alt={props.title}/>
            <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{props.title}</h2>
                <p className="leading-relaxed text-base">{props.text}</p>
            </div>
        </div>
    );
};