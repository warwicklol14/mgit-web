import * as React from 'react';

interface Props {

}

export const Map = (props: Props) => {
    return (
            <div
                className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe className="absolute inset-0"
                        title="map" style={{filter: 'contrast(1.2) opacity(0.8)'}}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1131.9541518423976!2d78.32177657864223!3d17.391391968805546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94ebf56f09a7%3A0xf748e727e9b5122c!2sMahatma%20Gandhi%20Institute%20of%20Technology%20(MGIT)!5e0!3m2!1sen!2sin!4v1616758707928!5m2!1sen!2sin"
                        width="100%" height="100%" frameBorder="0"></iframe>
                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                        <p className="mt-1">Mahatma Gandhi Institute of Technology
                            Kokapet (Village), Gandipet (Mandal),
                            Chaitanya Bharathi (PO) Ranga Reddy Dist.
                            HYDERABAD - 500075, TELANGANA</p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                        <a className="text-blue-500 leading-relaxed"> principal@mgit.ac.in</a>
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                        <p className="leading-relaxed">040 - 24193057</p>
                    </div>
                </div>
            </div>
    );
};