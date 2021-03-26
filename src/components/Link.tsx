import * as React from 'react';

interface Props {
    children:React.ReactNode
}

export const Link = (props: Props) => {
    return (
        <div>
            <a className="mt-3 text-blue-500 inline-flex items-center">
                {props.children}
                <svg fill="none" stroke="currentColor" stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2"
                     viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    );
};